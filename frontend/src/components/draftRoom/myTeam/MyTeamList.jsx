import React from "react";
import PlayerCard from "../../shared/teamView/PlayerCard";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import {updateMyTeamPositionAction, updateMyTeamPositionSuccessAction} from "../../../store/actions";
import {currentTeamIdSelector, draftRosterSelector, draftTeamSelector} from "../../../store/selectors/DraftSelectors";
import {stompClientSelector} from "../../../store/selectors/WebSocketSelectors";
import {isLeadBidderSelector} from "../../../store/selectors/BlockSelectors";
import {connect} from "react-redux";

const styles = {
    mainContainer: {
        height: "100%",
    },
}

class MyTeamList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teamList: [],
            selectedPlayer: null,
            selectedSlotPosition: null,
            selectedSlotId: null,
        }
    }

    componentDidMount() {
        this.setState({teamList: this.props.teamList});
        this.props.stompClient.subscribe('/draft/updateMyTeamPositions', this.receiveUpdatedMyTeamPosition)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.teamList.length !== this.props.teamList.length) {
            this.setState({teamList: this.props.teamList});
        }
    };

    receiveUpdatedMyTeamPosition = (payload) => {
        // Emit success event.
        const updatedData = JSON.parse(payload.body);
        this.props.updateMyTeamPositionSuccess(updatedData);
        // Update teamList in state.
        const {teamList} = this.state;
        // Clear the source slot (if player was switched with a isVacant slot, we need to manually clear the source slot).
        const sourceSlot = this.state.teamList.find(slot => slot.id === this.state.selectedSlotId);
        sourceSlot.player = null;
        sourceSlot.price = null;
        sourceSlot.isVacant = true;
        // Clear the selected player and slot from the state.
        this.setState({selectedPlayer: null})
        this.setState({selectedSlotPosition: null})
        this.setState({selectedSlotId: null})
        // Add moved players to their new slots.
        updatedData.forEach(update => {
            const updatedSlot = teamList.find(slot => slot.id === update.slotId);
            updatedSlot.player = update.player;
            updatedSlot.price = update.price;
            updatedSlot.isVacant = false;
        });
        this.setState({teamList});
    }

    getIsSelected = (slot) => {
        return this.state.selectedPlayer != null && slot.player != null
            ? this.state.selectedPlayer.id === slot.player.id
            : false;
    }

    handleSlotClick = (slot) => {
        // If the team has somehow clicked whilst they are the lead bidder, clear the selected player and slot.
        if(this.props.isLeadBidder) {
            this.setState({selectedPlayer: null})
            this.setState({selectedSlotPosition: null})
            this.setState({selectedSlotId: null})
        } else if(this.state.selectedPlayer === null) {
            // If no change was previously underway, set selected player and slot.
            this.setState({selectedPlayer: slot.player})
            this.setState({selectedSlotPosition: slot.slotPosition})
            this.setState({selectedSlotId: slot.id})
        } else {
            // Else, switch players between slots.
            this.handlePositionChange(slot);
        }
    }

    handlePositionChange = (slot) => {
        console.log("Handle.");
        // The previously selected player (in the state) should be updated based on the currently selected slot.
        let updatedPlayerPositions = [{
            playerId: this.state.selectedPlayer.id,
            myTeamPosition: slot.slotPosition,
            slotId: slot.id,
        }];
        // If 2 players switched positions, also update the second selected player with the previously selected slot.
        if(slot.player != null) {
            updatedPlayerPositions.push({
                playerId: slot.player.id,
                myTeamPosition: this.state.selectedSlotPosition,
                slotId: this.state.selectedSlotId,
            });
        }
        console.log(updatedPlayerPositions);
        this.props.updateMyTeamPosition(this.props.teamId, updatedPlayerPositions);
    }

    shouldShowButton = (slot) => {
        let showButton;
        if(this.state.selectedPlayer !== null) {
            showButton = this.isValidDestination(slot);
        } else {
            showButton = !slot.isVacant && !this.props.isLeadBidder;
        }
        return showButton;
    }

    isButtonGreyedOut = (slot) => {
        let isGreyedOut = false;
        if(this.state.selectedPlayer !== null) {
            isGreyedOut = !this.isValidDestination(slot);
        }
        return isGreyedOut;
    }

    isValidDestination(slot) {
        const isDifferentSlot = slot.slotId !== this.state.selectedSlotId;

        const isValidVacantSlot = slot.isVacant && (
            slot.slotPosition === "BENCH"
            || slot.slotPosition === (this.state.selectedPlayer.primaryPosition || this.state.selectedPlayer.secondaryPosition)
        );

        const isValidOccupiedSlot = !slot.isVacant && (
            (this.state.selectedPlayer.primaryPosition || this.state.secondaryPosition) === (slot.player.primaryPosition || slot.player.secondaryPosition)
            || (this.state.selectedSlotPosition === "BENCH" && slot.slotPosition === "BENCH")
        );

        return isDifferentSlot && (isValidVacantSlot || isValidOccupiedSlot);
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container item className={classes.mainContainer}>
                {
                    this.props.teamList.map((slot, index) => {
                        return (
                            <PlayerCard
                                key={index}
                                slot={slot}
                                player={slot.player}
                                price={slot.price}
                                isSelected={this.getIsSelected(slot)}
                                isGreyedOut={this.isButtonGreyedOut(slot)}
                                shouldShowButton={this.shouldShowButton(slot)}
                                handleSlotClick={this.handleSlotClick}
                            />
                        )
                    })
                }
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateMyTeamPosition: (teamId, updatedMyTeamPositions) => dispatch(updateMyTeamPositionAction(teamId, updatedMyTeamPositions)),
    updateMyTeamPositionSuccess: (team) => dispatch(updateMyTeamPositionSuccessAction(team)),
})

const mapStateToProps = (state, props) => {
    return {
        stompClient: stompClientSelector(state),
        isLeadBidder: isLeadBidderSelector(state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MyTeamList));
