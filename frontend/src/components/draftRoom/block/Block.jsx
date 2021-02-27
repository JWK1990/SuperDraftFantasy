import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import {
    commissionerTeamNameSelector,
    currentTeamSelector,
    draftSelector,
    isSlotAvailableSelector,
    numOfPlayersRequiredSelector
} from "../../../store/selectors/DraftSelectors";
import {stompClientSelector} from "../../../store/selectors/WebSocketSelectors";
import {playersSelector} from "../../../store/selectors/PlayersSelectors";
import {
    receiveAddToBlockAction,
    receiveBidAction,
    receiveStartNextRoundAction,
    receiveStopDraftAction,
} from "../../../store/actions/BlockActions";
import {blockSelector, isLeadBidderSelector, isOnTheBlockSelector} from "../../../store/selectors/BlockSelectors";
import DraftRoomUtils from "../../../utils/DraftRoomUtils";
import {DraftStatusEnum} from "../../../models/DraftStatusEnum";
import {updateDraftStatus} from "../../../store/actions";
import BlockClock from "./clock/BlockClockContainer";
import BlockPlayerContainer from "./player/BlockPlayerContainer";

const styles = theme => ({
    rootContainer: {
        height: "100%",
    },
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
        }
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/rounds', this.receiveStartNextRound);
        this.props.stompClient.subscribe('/draft/stopDrafts', this.receiveStopDraft);
        this.props.stompClient.subscribe('/draft/addToBlocks', this.receiveAddToBlock);
        this.props.stompClient.subscribe('/draft/bids', this.receiveBid);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.currentTeam.teamPlayerJoins !== this.props.currentTeam.teamPlayerJoins) {
            const isBidDisabledTuple = this.getIsBidDisabledTuple(this.props.block.bidderTeamId, this.props.block.price, this.props.block.playerId);
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
        if(this.props.block.onTheBlockTeamId) {
            return this.props.draft.teams.find(team => team.id === this.props.block.onTheBlockTeamId).name;
        }
        return null;
    }

    getOnTheBlockPlayer = () => {
        return this.props.players.find(player => player.id === this.props.block.playerId);
    };

    receiveStartNextRound = (payload) => {
        console.log('Start Next Round Received: ', payload);
        const updatedBlock = JSON.parse(payload.body);
        this.props.receiveStartNextRound(updatedBlock);
        if(this.props.draft.status !== DraftStatusEnum.IN_PROGRESS) {
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
        console.log('AddToBlock Received ', payload);
        const updatedBlock = JSON.parse(payload.body);
        const isBidDisabledTuple = this.getIsBidDisabledTuple(updatedBlock.bidderTeamId, updatedBlock.price, updatedBlock.playerId);
        this.props.receiveAddToBlock(updatedBlock);
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
        console.log('StopDraft Received.');
        const updatedStatus = payload.body;
        this.props.receiveStopDraft();
        this.setState({
            ...this.state,
            showAddToBlockClock: false,
            addToBlockClockTimeRemaining: '',
            showBidClock: false,
            bidClockTimeRemaining: '',
        })
        if(this.props.draft.status !== updatedStatus) {
            this.props.updateDraftStatus(updatedStatus);
        }
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
        if(player && this.isSlotAvailable(player)) {
            return[true, this.getSlotUnavailableText(player)];
        }

        return [false, "Bid"];
    }

    isSlotAvailable(player) {
        return player &&
            !DraftRoomUtils.isSlotAvailableForPlayer(
                this.props.slotAvailability,
                player.primaryPosition,
                player.secondaryPosition
            )
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
                    <Grid item xs={2}>
                        <BlockClock
                            showAddToBlockClock={this.state.showAddToBlockClock}
                            showBidClock={this.state.showBidClock}
                            onTheBlockTimer={this.props.draft.onTheBlockTimer}
                            bidTimer={this.props.draft.bidTimer}
                            addToBlockClockTimeRemaining={this.state.addToBlockClockTimeRemaining}
                            bidClockTimeRemaining={this.state.bidClockTimeRemaining}
                            addToBlockClockKey={this.state.addToBlockClockKey}
                            bidClockKey={this.state.bidClockKey}
                            isBidClockDisabled={this.state.isBidClockDisabled}
                            sendBid={this.sendBid}
                            currentPrice={this.props.block.price}
                            bidClockText={this.state.bidClockText}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <BlockPlayerContainer
                            isOnTheBlock={this.props.isOnTheBlock}
                            showAddToBlockClock={this.state.showAddToBlockClock}
                            showBidClock={this.state.showBidClock}
                            commissionerTeamName={this.props.commissionerTeamName}
                            onTheBlockTeamName={this.getOnTheBlockTeamName()}
                            onTheBlockPlayer={this.getOnTheBlockPlayer()}
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
        updateDraftStatus: (status) => dispatch(updateDraftStatus(status)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles, {withTheme: true})
    (DraftRoomBlock)
);
