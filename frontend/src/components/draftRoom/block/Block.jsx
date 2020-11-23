import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import BidClock from "./clock/BidClock";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import {currentTeamSelector, draftSelector, onTheBlockTeamSelector} from "../../../store/selectors/DraftSelectors";
import BlockPlayer from "./player/BlockPlayer";
import {stompClientSelector} from "../../../store/selectors/WebSocketSelectors";
import {playersSelector} from "../../../store/selectors/PlayersSelectors";
import {
    receiveAddToBlockAction,
    receiveBidAction,
    receiveStartNextRoundAction,
    receiveStopDraftAction,
} from "../../../store/actions/BlockActions";
import {blockSelector} from "../../../store/selectors/BlockSelectors";
import VacantBlock from "./vacantBlock/VacantBlock";
import AddToBlockClock from "./clock/AddToBlockClock";

const styles = theme => ({
    firstRowGridContainer: {
        justify: "space-between",
        alignItems: "stretch",
        // TODO: Decide if we want to fix height or let it flex.
        //height: "20vh",
        //overflow: "hidden",
    },
    countdownClockDiv: {
        height: "100%",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
});

class DraftRoomBlock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            addToBlockClockKey: 0,
            showAddToBlockClock: false,
            showBidClock: false,
            bidClockKey: 0,
        }
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/rounds', this.receiveStartNextRound);
        this.props.stompClient.subscribe('/draft/stopDrafts', this.receiveStopDraft);
        this.props.stompClient.subscribe('/draft/addToBlocks', this.receiveAddToBlock);
        this.props.stompClient.subscribe('/draft/bids', this.receiveBid);
    }

    receiveStartNextRound = (payload) => {
        console.log('Start Next Round Received: ', payload);
        const updatedBlockData = JSON.parse(payload.body);
        this.props.receiveStartNextRound(updatedBlockData);
        this.setState({
            ...this.state,
            showAddToBlockClock: true,
            addToBlockClockKey: this.state.addToBlockClockKey + 1,
            showBidClock: false,
        })
    };

    receiveAddToBlock = (payload) => {
        console.log('AddToBlock Received ', payload);
        const updatedBlock = JSON.parse(payload.body);
        const isBidDisabledTuple = this.getIsBidDisabled(updatedBlock.teamId, updatedBlock.price, updatedBlock.playerId);
        this.props.receiveAddToBlock(updatedBlock);
        this.setState({
            ...this.state,
            showAddToBlockClock: false,
            showBidClock: true,
            bidClockKey: this.state.bidClockKey + 1,
        });
    };

    sendBid = () => {
        if (this.props.stompClient) {
            const bidDetails = {
                draftId: this.props.draft.id,
                playerId: this.props.block.playerId,
                onTheBlockTeamId: this.props.block.onTheBlockTeamId,
                bidderTeamId: this.props.currentTeam.id,
                myTeamPosition: null,
                price: this.props.block.price + 1,
                onTheBlockTimer: this.props.draft.onTheBlockTimer,
                bidTimer: this.props.draft.bidTimer,
            };
            this.props.stompClient.send("/app/bid", {}, JSON.stringify(bidDetails));
            console.log('Bid Sent: ', bidDetails);
        }
    };

    receiveBid = (payload) => {
        console.log("Bid Received", payload);
        const updatedBlock = JSON.parse(payload.body);
        const isBidDisabledTuple = this.getIsBidDisabled(updatedBlock.price, updatedBlock.playerId);
        this.props.receiveBid(updatedBlock);
        this.setState({
            ...this.state,
            showAddToBlockClock: false,
            showBidClock: true,
            bidClockKey: this.state.bidClockKey + 1,
        });
    };

    receiveStopDraft = () => {
        console.log('StopDraft Received.');
        this.props.receiveStopDraft();
        this.setState({
            ...this.state,
            showAddToBlockClock: false,
            showBidClock: false,
        })
    }

    getPlayerDetailsById = (playerId) => {
        return this.props.players.find(player => player.id === playerId);
    };

    getTeamById = (teamId) => {
        return this.props.draft.teams.find(team => team.id === teamId);
    }

    getIsBidDisabled = (bidderId, price, playerId) => {
        const player = this.getPlayerDetailsById(playerId);

        if(bidderId === this.props.currentTeam.id) {
            return [true, "You lead:"];
        }
        if(price && !this.getIsBudgetAvailableForPlayer(price)) {
            return [true, "Insufficient budget."]
        }
        if(player && !this.getIsSlotAvailableForPlayer(player)) {
            return [true, "No " + player.position + " Slot."]
        }
        return [false, "Bid"];
    }

    getIsBudgetAvailableForPlayer = (price) => {
        if(this.getIsTeamFull()) {
            return false;
        }
        const currentTeamMaxBid = this.props.currentTeam.maxBid;
        const nextBidPrice = price + 1;
        return currentTeamMaxBid >= nextBidPrice;
    }

    getIsSlotAvailableForPlayer = (player) => {
        if(this.getIsTeamFull()) {
            return false;
        }
        // const benchSlotAvailable = this.state.vacantPositions["BENCH"];
        // const primarySlotAvailable = this.state.vacantPositions[player.primaryPosition];
        // const secondarySlotAvailable = player.secondaryPosition ? this.state.vacantPositions[player.secondaryPosition] : false;
        // return benchSlotAvailable || primarySlotAvailable || secondarySlotAvailable;
        return true;
    };

    getIsTeamFull = () => {
        const currentTeamPlayerCount = this.getCurrentTeamPlayerCount();
        const numOfSlotsPerTeam = this.getNumOfSlotsPerTeam();
        return currentTeamPlayerCount >= numOfSlotsPerTeam;
    };

    getCurrentTeamPlayerCount = () => {
        return this.props.currentTeam.teamPlayerJoins.length;
    }

    getNumOfSlotsPerTeam = () => {
        const roster = this.props.draft.roster;
        return roster.def + roster.mid + roster.ruc + roster.fwd + roster.bench;
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid
                container
                className={classes.firstRowGridContainer}
            >
                <Grid item xs={2}>
                    <div className={classes.countdownClockDiv}>
                        {this.state.showAddToBlockClock ?
                            <AddToBlockClock
                                duration={this.props.draft.onTheBlockTimer}
                                text="Add To Block"
                                key={this.state.addToBlockClockKey}
                                isDisabled={false}
                            />
                            : this.state.showBidClock ?
                            <BidClock
                                duration={this.props.draft.bidTimer}
                                text="Bid"
                                key={this.state.bidClockKey}
                                sendBid={this.sendBid}
                                isDisabled={false}
                                currentPrice={this.props.block.price}
                            />
                            : null
                        }
                    </div>
                </Grid>

                <Grid item xs={10}>
                    {this.state.showAddToBlockClock ?
                        <VacantBlock
                            onTheBlockTeamName={this.getTeamById(this.props.block.onTheBlockTeamId).name}
                        />
                        : this.state.showBidClock ?
                        <BlockPlayer
                            player={this.getPlayerDetailsById(this.props.block.playerId)}
                        />
                        : "Draft Is Paused"
                    }
                </Grid>

            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        stompClient: stompClientSelector(state),
        draft: draftSelector(state),
        players: playersSelector(state),
        currentTeam: currentTeamSelector(state),
        block: blockSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
        receiveStartNextRound: (block) => dispatch(receiveStartNextRoundAction(block)),
        receiveAddToBlock: (block) => dispatch(receiveAddToBlockAction(block)),
        receiveBid: (block) => dispatch(receiveBidAction(block)),
        receiveStopDraft: () => dispatch(receiveStopDraftAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles, {withTheme: true})
    (DraftRoomBlock)
);
