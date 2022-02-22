import React from "react";
import {updateMyTeamPositionAction, updateMyTeamPositionSuccessAction} from "../../../store/actions";
import {
    currentTeamIdSelector,
    draftRosterSelector,
    draftTeamSelector,
} from "../../../store/selectors/DraftSelectors";
import {stompClientSelector} from "../../../store/selectors/WebSocketSelectors";
import {isLeadBidderSelector} from "../../../store/selectors/BlockSelectors";
import {connect} from "react-redux";
import MyTeamList from "./MyTeamList";

class MyTeamContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            myTeamList: [],
            isDropDisabled: true,
            isDragging: false,
            isPositionChangeDisabled: true,
            errorText: '',
            isPositionChangeUnderway: false,
            selectedPlayerId: null,
            selectedSlotPosition: null,
        };
    }

    // this.props.isDraggingDisabled || this.props.item.dynamicSlotData.isVacant || this.props.isLeadBidder

    componentWillMount() {
        // this.setState({myTeamList: this.getInitialMyTeamList(this.props.roster, this.props.team.teamPlayerJoins)});
    }

    componentDidMount() {
        // this.props.stompClient.subscribe('/draft/updateMyTeamPositions', this.receiveUpdatedMyTeamPosition)
    }

    componentWillUpdate(nextProps) {
        /*
        // If different Team selected then we update team list.
        if(nextProps.team.id !== this.props.team.id) {
            this.setState({myTeamList: this.getInitialMyTeamList(this.props.roster, nextProps.team.teamPlayerJoins)});
        }
        // Else if new player added to current Team then we update team list.
        else if (nextProps.team.teamPlayerJoins.length !== this.props.team.teamPlayerJoins.length){
                const playerToBeAdded = nextProps.team.teamPlayerJoins[nextProps.team.teamPlayerJoins.length -1];
                this.addPlayerToFirstVacantSlot(this.state.myTeamList, playerToBeAdded);
        }
        // Else if a player has been by the manually moved in the TeamList then we update the field view.
        // TODO: Could refactor the field layout to always be inline with the BE positions.
        // To do this first would need to add Slot Number Values to BE (e.g. M1, D5 etc).
        else if(this.props.type === "field" && nextProps.team.teamPlayerJoins !== this.props.team.teamPlayerJoins) {
            this.setState({myTeamList: this.getInitialMyTeamList(this.props.roster, nextProps.team.teamPlayerJoins)});
        }
        */
    }

    getInitialMyTeamList = (roster, teamPlayerJoinList) => {
        const initialMyTeamList = {
            DEF: this.createSlots(roster.def, 0, "DEF"),
            MID: this.createSlots(roster.mid, roster.def, "MID"),
            RUC: this.createSlots(roster.ruc, roster.def + roster.mid, "RUC"),
            FWD: this.createSlots(roster.fwd, roster.def + roster.mid + roster.ruc, "FWD"),
            BENCH: this.createSlots(roster.bench, roster.def + roster.mid + roster.ruc + roster.fwd, "BENCH")
        };
        this.fillSlots(initialMyTeamList, teamPlayerJoinList)
        return initialMyTeamList;
    };

    receiveUpdatedMyTeamPosition = (payload) => {
        const updatedMyTeamPosition = JSON.parse(payload.body);
        this.props.updateMyTeamPositionSuccess(updatedMyTeamPosition);
    }

    movePlayers = (sourcePlayerList, destinationPlayerList, sourceDroppableInfo, destinationDroppableInfo) => {
        const sourcePlayerListClone = Array.from(sourcePlayerList);
        const sourceSlotData = sourcePlayerList[sourceDroppableInfo.index].dynamicSlotData;
        const sourcePosition = this.droppableList[sourceDroppableInfo.droppableId];

        const destinationPlayerListClone = Array.from(destinationPlayerList);
        const destinationSlotData = destinationPlayerList[destinationDroppableInfo.index].dynamicSlotData;
        const destinationPosition = this.droppableList[destinationDroppableInfo.droppableId];

        // Switch content of 2 switched slots.
        sourcePlayerListClone[sourceDroppableInfo.index].dynamicSlotData = destinationSlotData;
        destinationPlayerListClone[destinationDroppableInfo.index].dynamicSlotData = sourceSlotData;

        this.setState(prevState => ({
            ...prevState,
            myTeamList: {
                ...prevState.myTeamList,
                [sourcePosition]: sourcePlayerListClone,
                [destinationPosition]: destinationPlayerListClone
            },
            isDragging: false,
            draggedPrimaryPosition: '',
            draggedSecondaryPosition: '',
        }));

        // If move involves a position change.
        if(sourcePosition !== destinationPosition) {
            let updatePlayerPositions = [{playerId: sourceSlotData.player.id, myTeamPosition: destinationPosition}];
            // If 2 players switched positions, also update the destinationPlayer's position in the DB.
            if(destinationSlotData.player != null) {
                updatePlayerPositions.push({playerId: destinationSlotData.player.id, myTeamPosition: sourcePosition});
            }
            this.props.updateMyTeamPosition(this.props.team.id, updatePlayerPositions);
        }

    };

    isDropDisabled = (dropPosition) => {
        const isDropPositionValid = dropPosition === "BENCH"
            || dropPosition.includes(this.state.draggedPrimaryPosition)
            || dropPosition.includes(this.state.draggedSecondaryPosition);
        return !isDropPositionValid || this.props.isLeadBidder;
    };

    handleSlotClick = (slot) => {
        console.log("Slot Click.");
        // If no change was previously underway, set selected player id and slot position.
        if(this.state.isPositionChangeUnderway === false) {
            this.setState({selectedPlayerId: slot.player.id})
            this.setState({selectedSlotPosition: slot.slotPosition})
            this.setState({isPositionChangeUnderway: true})
        } else {
            // Else, switch players between slots.
            this.handlePositionChange(slot);

        }
    }

    handlePositionChange = (slot) => {
        let updatedPlayerPositions = [{playerId: this.state.selectedPlayerId, myTeamPosition: slot.slotPosition}];
        // If 2 players switched positions, also update the destinationPlayer's position in the DB.
        if(slot.player != null) {
            updatedPlayerPositions.push({playerId: slot.player.id, myTeamPosition: this.state.selectedSlotPosition});
        }
        this.props.updateMyTeamPosition(this.props.team.id, updatedPlayerPositions);

        // Unset selected player and slot.
        this.setState({selectedPlayerId: null})
        this.setState({selectedSlotPosition: null})
        this.setState({isPositionChangeUnderway: false})
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/updateMyTeamPositions', this.receiveUpdatedMyTeamPosition)
    }

    receiveUpdatedMyTeamPosition = (payload) => {
        const updatedData = JSON.parse(payload.body);
        this.props.updateMyTeamPositionSuccess(updatedData);
        const {myTeamList} = this.state;
        updatedData.myTeamPositions.forEach(myTeamPositionUpdate => {
            const updatedPlayer = myTeamList.find(player => player.id === myTeamPositionUpdate.playerId);
            console.log(updatedPlayer);
            updatedPlayer.myTeamPositionType = myTeamPositionUpdate.myTeamPosition;
        });
        this.setState({myTeamList});
    }

    render() {
        return (
            <MyTeamList
                isDraggingDisabled={this.props.isDraggingDisabled}
                isDropDisabled={this.isDropDisabled("DEF")}
                teamPlayerJoinList={this.props.team.teamPlayerJoins}
                isLeadBidder={this.props.isLeadBidder}
                isPositionChangeUnderway={this.state.isPositionChangeUnderway}
                selectedPlayerId={this.state.selectedPlayerId}
                selectedSlotPosition={this.state.selectedSlotPosition}
                handleSlotClick={this.handleSlotClick}
            />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateMyTeamPosition: (teamId, playerId, position) => dispatch(updateMyTeamPositionAction(teamId, playerId, position)),
    updateMyTeamPositionSuccess: (team) => dispatch(updateMyTeamPositionSuccessAction(team)),
})

const mapStateToProps = (state, props) => {
    const currentTeamId = currentTeamIdSelector(state);
    return {
        roster: draftRosterSelector(state),
        stompClient: stompClientSelector(state),
        isLeadBidder: isLeadBidderSelector(state),
        team: draftTeamSelector(state, currentTeamId),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTeamContainer);
