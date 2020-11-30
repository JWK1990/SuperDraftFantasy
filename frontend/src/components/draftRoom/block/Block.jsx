import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import BidClock from "./clock/BidClock";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import {
    commissionerTeamNameSelector,
    currentTeamSelector,
    draftSelector,
    isSlotAvailableSelector,
    numOfPlayersRequiredSelector
} from "../../../store/selectors/DraftSelectors";
import BlockPlayer from "./player/BlockPlayer";
import {stompClientSelector} from "../../../store/selectors/WebSocketSelectors";
import {playersSelector} from "../../../store/selectors/PlayersSelectors";
import {
    receiveAddToBlockAction,
    receiveBidAction,
    receiveStartNextRoundAction,
    receiveStopDraftAction,
} from "../../../store/actions/BlockActions";
import {blockSelector, isLeadBidderSelector, isOnTheBlockSelector} from "../../../store/selectors/BlockSelectors";
import VacantBlock from "./player/VacantBlock";
import AddToBlockClock from "./clock/AddToBlockClock";
import PausedDraft from "./player/PausedDraft";
import DraftRoomUtils from "../../../utils/DraftRoomUtils";

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
            showAddToBlockClock: false,
            addToBlockClockTimeRemaining: '',
            addToBlockClockKey: 0,
            showBidClock: false,
            bidClockTimeRemaining: '',
            bidClockKey: 0,
            isBidClockDisabled: true,
            bidBlockText: '',
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
        const updatedBlock = JSON.parse(payload.body);
        this.props.receiveStartNextRound(updatedBlock);
        console.log(updatedBlock.endTime,  Date.now(), (updatedBlock.endTime - Date.now())/1000);
        this.setState({
            ...this.state,
            showAddToBlockClock: true,
            addToBlockClockTimeRemaining: (updatedBlock.endTime - Date.now()) / 1000,
            addToBlockClockKey: this.state.addToBlockClockKey + 1,
            showBidClock: false,
            bidClockTimeRemaining: '',
        })
    };

    receiveAddToBlock = (payload) => {
        console.log('AddToBlock Received ', payload);
        const updatedBlock = JSON.parse(payload.body);
        const isBidDisabledTuple = this.getIsBidDisabledTuple(updatedBlock.bidderTeamId, updatedBlock.price, updatedBlock.playerId);
        this.props.receiveAddToBlock(updatedBlock);
        console.log(updatedBlock.endTime,  Date.now(), (updatedBlock.endTime - Date.now())/1000);
        this.setState({
            ...this.state,
            showAddToBlockClock: false,
            addToBlockClockTimeRemaining: '',
            showBidClock: true,
            bidClockTimeRemaining: (updatedBlock.endTime - Date.now())/1000,
            bidClockKey: this.state.bidClockKey + 1,
            isBidClockDisabled: isBidDisabledTuple[0],
            bidClockText: isBidDisabledTuple[1],
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
        const isBidDisabledTuple = this.getIsBidDisabledTuple(updatedBlock.bidderTeamId, updatedBlock.price, updatedBlock.playerId);
        this.props.receiveBid(updatedBlock);
        console.log(updatedBlock.endTime,  Date.now(), (updatedBlock.endTime - Date.now())/1000);
        this.setState({
            ...this.state,
            showAddToBlockClock: false,
            showBidClock: true,
            bidClockTimeRemaining: (updatedBlock.endTime - Date.now())/1000,
            bidClockKey: this.state.bidClockKey + 1,
            isBidClockDisabled: isBidDisabledTuple[0],
            bidClockText: isBidDisabledTuple[1],
        });
    };

    receiveStopDraft = () => {
        console.log('StopDraft Received.');
        this.props.receiveStopDraft();
        this.setState({
            ...this.state,
            showAddToBlockClock: false,
            addToBlockClockTimeRemaining: '',
            showBidClock: false,
            bidClockTimeRemaining: '',
        })
    }

    getPlayerDetailsById = (playerId) => {
        return this.props.players.find(player => player.id === playerId);
    };

    getTeamById = (teamId) => {
        return this.props.draft.teams.find(team => team.id === teamId);
    }

    // TODO: Currently this isn't dynamic. If space is made available, the bid clock isn't enabled.
    // This is because we need to push a key to update the timer.
    // We need to change the timer to be based on endTime - currentTime (rather than a set number).
    // Then when a relevant team update is received, we should increment the bidClockKey to refresh the timer.
    getIsBidDisabledTuple = (bidderId, price, playerId) => {
        if(this.props.currentTeam.teamPlayerJoins.length >= this.props.numOfPlayerRequired) {
            return [true, "Your team is full."]
        }

        if(bidderId === this.props.currentTeam.id) {
            return [true, "You are the lead bidder."];
        }

        if(price && this.props.currentTeam.maxBid < price + 1) {
            return [true, "Insufficient budget."]
        }

        const player = this.getPlayerDetailsById(playerId);
        if(player &&
            !DraftRoomUtils.isSlotAvailableForPlayer(
                this.props.slotAvailability,
                player.primaryPosition,
                player.secondaryPosition
            )
        ) {
            return [true, "No " + player.primaryPosition
            + (player.secondaryPosition ? " or " + player.secondaryPosition : '')
                + " slot."]
        }

        return [false, "Bid"];
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
                                duration={this.state.addToBlockClockTimeRemaining}
                                key={this.state.addToBlockClockKey}
                            />
                            : this.state.showBidClock ?
                            <BidClock
                                duration={this.state.bidClockTimeRemaining}
                                key={this.state.bidClockKey}
                                sendBid={this.sendBid}
                                isDisabled={this.state.isBidClockDisabled}
                                currentPrice={this.props.block.price}
                                tooltipText={this.state.bidClockText}
                            />
                            : null
                        }
                    </div>
                </Grid>

                <Grid item xs={10}>
                    {this.state.showAddToBlockClock ?
                        <VacantBlock
                            onTheBlockTeamName={this.getTeamById(this.props.block.onTheBlockTeamId).name}
                            isOnTheBlock={this.props.isOnTheBlock}
                        />
                        : this.state.showBidClock ?
                        <BlockPlayer
                            player={this.getPlayerDetailsById(this.props.block.playerId)}
                        />
                        :
                            <PausedDraft
                                commissionerTeamName={this.props.commissionerTeamName}
                            />
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
        commissionerTeamName: commissionerTeamNameSelector(state),
        isLeadBidder: isLeadBidderSelector(state),
        isOnTheBlock: isOnTheBlockSelector(state),
        slotAvailability: {
            def: isSlotAvailableSelector(state, "def"),
            mid: isSlotAvailableSelector(state, "mid"),
            ruc: isSlotAvailableSelector(state, "ruc"),
            fwd: isSlotAvailableSelector(state, "fwd"),
            bench: isSlotAvailableSelector(state, "bench"),
        },
        numOfPlayerRequired: numOfPlayersRequiredSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
        receiveStartNextRound: (block) => dispatch(receiveStartNextRoundAction(block)),
        receiveAddToBlock: (block) => dispatch(receiveAddToBlockAction(block)),
        receiveBid: (block) => dispatch(receiveBidAction(block)),
        receiveStopDraft: () => dispatch(receiveStopDraftAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles, {withTheme: true})
    (DraftRoomBlock)
);
