import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import {
    commissionerTeamNameSelector,
    currentTeamSelector,
    draftBaseSelector,
    isSlotAvailableSelector,
    numOfPlayersRequiredSelector
} from "../../../store/selectors/DraftSelectors";
import {stompClientSelector} from "../../../store/selectors/WebSocketSelectors";
import {
    receiveAddToBlockAction,
    receiveBidAction,
    receiveStartNextRoundAction,
    receiveStopDraftAction,
} from "../../../store/actions/BlockActions";
import {
    blockSelector,
    isLeadBidderSelector,
    isOnTheBlockSelector,
    leadBidderTeamNameSelector
} from "../../../store/selectors/BlockSelectors";
import DraftRoomUtils from "../../../utils/DraftRoomUtils";
import {DraftStatusEnum} from "../../../models/DraftStatusEnum";
import {updateDraftStatus, updateTeamAction} from "../../../store/actions";
import ClockContainer from "./clock/ClockContainer";
import BlockPlayerContainer from "./details/BlockDetailsContainer";

const styles = theme => ({
    rootContainer: {
        height: "100%",
    },
    // TODO: Potentially add maxHeight or height of 100% to all Grid Items.
    gridItem: {
        maxHeight: "100%",
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
            isBidClockDisabled: true,
            bidClockText: '',
            bidClockKey: 0,
            playerDetails: null,
        }
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/rounds', this.receiveStartNextRound);
        this.props.stompClient.subscribe('/draft/stopDrafts', this.receiveStopDraft);
        this.props.stompClient.subscribe('/draft/addToBlocks', this.receiveAddToBlock);
        this.props.stompClient.subscribe('/draft/bids', this.receiveBid);
        this.props.stompClient.subscribe('/draft/teams', this.receiveTeam);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Updates the state of the BlockClock if a player is moved.
        if(prevProps.currentTeam.teamPlayerJoins !== this.props.currentTeam.teamPlayerJoins) {
            const isBidDisabledTuple = this.getIsBidDisabledTuple(
                this.props.block.bidderTeamId,
                this.props.block.price,
                this.props.block.playerDetails
            );
            if(isBidDisabledTuple[0] !== this.state.isBidClockDisabled) {
                this.setState({
                    ...this.state,
                    isBidClockDisabled: isBidDisabledTuple[0],
                    bidClockTimeRemaining: (this.props.block.endTime - Date.now()) / 1000,
                    bidClockText: isBidDisabledTuple[1],
                    bidClockKey: this.state.bidClockKey + 1,
                })
            }
        }
    }

    getOnTheBlockTeamName = () => {
        let teamName = null;
        if(this.props.block.onTheBlockTeamId) {
            //teamName = this.props.draft.teams.find(team => team.id === this.props.block.onTheBlockTeamId).name;
        }
        return teamName;
    }

    receiveStartNextRound = (payload) => {
        console.log("Start Next Round Received: ", payload);
        const updatedBlock = JSON.parse(payload.body);
        this.props.receiveStartNextRound(updatedBlock);
        if(this.props.draftBase.status !== DraftStatusEnum.IN_PROGRESS) {
            this.props.updateDraftStatus(DraftStatusEnum.IN_PROGRESS);
        }
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
        console.log("Add To Block Received: ", payload);
        const updatedBlock = JSON.parse(payload.body);
        const isBidDisabledTuple = this.getIsBidDisabledTuple(
            updatedBlock.bidderTeamId,
            updatedBlock.price,
            updatedBlock.playerDetails
        );
        // Update Block in Store.
        this.props.receiveAddToBlock(updatedBlock);
        // Update State to keep track of local BlockClock properties.
        this.setState({
            ...this.state,
            showAddToBlockClock: false,
            addToBlockClockTimeRemaining: '',
            showBidClock: true,
            bidClockTimeRemaining: (updatedBlock.endTime - Date.now())/1000,
            bidClockKey: this.state.bidClockKey + 1,
            isBidClockDisabled: isBidDisabledTuple[0],
            bidClockText: isBidDisabledTuple[1],
            playerDetails: updatedBlock.playerDetails,
        });
    };

    receiveTeam = (payload) => {
        console.log("Team Received: ", payload);
        const team = JSON.parse(payload.body);
        this.props.updateTeam(team);
    };

    sendBid = () => {
        if (this.props.stompClient) {
            console.log("Bid Sent.");
            const bidDetails = {
                draftId: this.props.draftBase.id,
                playerId: this.props.block.playerId,
                onTheBlockTeamId: this.props.block.onTheBlockTeamId,
                bidderTeamId: this.props.currentTeam.id,
                myTeamPosition: null,
                price: this.props.block.price + 1,
                onTheBlockTimer: this.props.draftBase.onTheBlockTimer,
                bidTimer: this.props.draftBase.bidTimer,
            };
            this.props.stompClient.send("/app/bid", {}, JSON.stringify(bidDetails));
        }
    };

    receiveBid = (payload) => {
        console.log("Bid Received: ", payload);
        const updatedBlock = JSON.parse(payload.body);
        const isBidDisabledTuple = this.getIsBidDisabledTuple(
            updatedBlock.bidderTeamId,
            updatedBlock.price,
            updatedBlock.playerDetails
        );
        this.props.receiveBid(updatedBlock);
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

    receiveStopDraft = (payload) => {
        console.log("Stop Draft Received.");
        const updatedStatus = payload.body;
        this.props.receiveStopDraft();
        this.setState({
            ...this.state,
            showAddToBlockClock: false,
            addToBlockClockTimeRemaining: '',
            showBidClock: false,
            bidClockTimeRemaining: '',
        })
        if(this.props.draftBase.status !== updatedStatus) {
            this.props.updateDraftStatus(updatedStatus);
        }
    }

    // TODO: Currently this isn't dynamic. If space is made available, the bid clock isn't enabled.
    // This is because we need to push a key to update the timer.
    // We need to change the timer to be based on endTime - currentTime (rather than a set number).
    // Then when a relevant team update is received, we should increment the bidClockKey to refresh the timer.
    getIsBidDisabledTuple = (bidderId, price, player) => {
        console.log("BidderId: ", bidderId, price);
        if(this.props.currentTeam.teamPlayerJoins.length >= this.props.numOfPlayerRequired) {
            console.log("1");
            return [true, "Your team is full."]
        }

        if(bidderId === this.props.currentTeam.id) {
            console.log("2");
            return [true, "You are the lead bidder."];
        }

        if(price && this.props.currentTeam.maxBid < price + 1) {
            console.log("3");
            return [true, "Insufficient budget."]
        }

        console.log("Player: ", this.state.playerDetails);
        if(
            player &&
            !DraftRoomUtils.isSlotAvailableForPlayer(
                this.props.slotAvailability,
                player.primaryPosition,
                player.secondaryPosition
            )
        ) {
            console.log("Tuple Player: ", player);
            return[true, this.getSlotUnavailableText(player)];
        }

        console.log("4");

        return [false, "Bid"];
    }

    getSlotUnavailableText(player) {
        return "No " + player.primaryPosition
        + (player.secondaryPosition ? " or " + player.secondaryPosition : '')
        + " slot.";
    }

    render() {
        const {classes} = this.props;
        return (
            <div className="block">
                <Grid container className={classes.rootContainer} spacing={1} direction="row" justify="space-between" alignItems="stretch">
                    <Grid item xs={2} className={classes.gridItem}>
                        <ClockContainer
                            showAddToBlockClock={this.state.showAddToBlockClock}
                            showBidClock={this.state.showBidClock}
                            onTheBlockTimer={this.props.draftBase.onTheBlockTimer}
                            bidTimer={this.props.draftBase.bidTimer}
                            addToBlockClockTimeRemaining={this.state.addToBlockClockTimeRemaining}
                            bidClockTimeRemaining={this.state.bidClockTimeRemaining}
                            addToBlockClockKey={this.state.addToBlockClockKey}
                            bidClockKey={this.state.bidClockKey}
                            isBidClockDisabled={this.state.isBidClockDisabled}
                            sendBid={this.sendBid}
                            currentPrice={this.props.block.price}
                            bidClockText={this.state.bidClockText}
                            isOnTheBlock={this.props.isOnTheBlock}
                            onTheBlockTeamName={this.getOnTheBlockTeamName()}
                            isLeadBidder={this.props.isLeadBidder}
                            leadBidderTeamName={this.props.leadBidderTeamName}
                        />
                    </Grid>
                    <Grid item xs={10} className={classes.gridItem}>
                        <BlockPlayerContainer
                            isOnTheBlock={this.props.isOnTheBlock}
                            showAddToBlockClock={this.state.showAddToBlockClock}
                            showBidClock={this.state.showBidClock}
                            commissionerTeamName={this.props.commissionerTeamName}
                            onTheBlockTeamName={this.getOnTheBlockTeamName()}
                            onTheBlockPlayer={this.state.playerDetails}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stompClient: stompClientSelector(state),
        draftBase: draftBaseSelector(state),
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
        leadBidderTeamName: leadBidderTeamNameSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
        receiveStartNextRound: (block) => dispatch(receiveStartNextRoundAction(block)),
        receiveAddToBlock: (block) => dispatch(receiveAddToBlockAction(block)),
        receiveBid: (block) => dispatch(receiveBidAction(block)),
        receiveStopDraft: () => dispatch(receiveStopDraftAction()),
        updateTeam: (team) => dispatch(updateTeamAction(team)),
        updateDraftStatus: (status) => dispatch(updateDraftStatus(status)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(DraftRoomBlock));
