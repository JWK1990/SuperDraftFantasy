import React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import {
    currentTeamSelector,
    draftRosterSelector,
    numOfPlayersRequiredSelector
} from "../../../store/selectors/DraftSelectors";
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import DroppablePositionContainer from "./DroppablePositionContainer";
import {updateMyTeamPositionAction, updateMyTeamPositionSuccessAction} from "../../../store/actions";
import {stompClientSelector} from "../../../store/selectors/WebSocketSelectors";
import {isLeadBidderSelector} from "../../../store/selectors/BlockSelectors";

const styles = {
    myTeamRoot: {
        height: "98%",
        width: "98%",
    },
}

const defDroppableStyle = {
    isDraggingOverColor: "red",
}

const midDroppableStyles = {
    isDraggingOverColor: "lightblue",
}

const rucDroppableStyles = {
    isDraggingOverColor: "yellow",
}

const fwdDroppableStyles = {
    isDraggingOverColor: "lightgreen",
}

const benchDroppableStyles = {
    isDraggingOverColor: "lightgrey",
}

const getInitialMyTeamList = (roster, teamPlayerJoinList) => {
    const initialMyTeamList = {
            DEF: createSlots(roster.def, 0, "DEF"),
            MID: createSlots(roster.mid, roster.def, "MID"),
            RUC: createSlots(roster.ruc, roster.def + roster.mid, "RUC"),
            FWD: createSlots(roster.fwd, roster.def + roster.mid + roster.ruc, "FWD"),
            BENCH: createSlots(roster.bench, roster.def + roster.mid + roster.ruc + roster.fwd, "BENCH")
    };
    fillSlots(initialMyTeamList, teamPlayerJoinList)
    return initialMyTeamList;
};

const createSlots = (count, offset, position) => {
    return Array.from({ length: count }, (v, k) => k).map(k => {
        const id = k + offset;
        return createEmptySlot(id, position);
    });
};

const createEmptySlot = (id, position) => {
    return {
        id: `${id}`,
        position: `${position}`,
        dynamicSlotData: {vacant: true, player: null, price: null}
    }
}

const fillSlots = (myTeamList, teamPlayerJoinList) => {
    teamPlayerJoinList.forEach(teamPlayerJoin => {
        addPlayerToFirstVacantSlot(myTeamList, teamPlayerJoin);
    })
    return myTeamList;
}

const addPlayerToFirstVacantSlot = (myTeamList, teamPlayerJoin) => {
    if(teamPlayerJoin.myTeamPositionType != null) {
        const relevantPositionList = myTeamList[teamPlayerJoin.myTeamPositionType];
        const firstVacantSlot = relevantPositionList.find(slot => slot.dynamicSlotData.vacant);
        firstVacantSlot.dynamicSlotData.vacant = false;
        firstVacantSlot.dynamicSlotData.player = teamPlayerJoin.player;
        firstVacantSlot.dynamicSlotData.price = teamPlayerJoin.price;
    }
}

const move = (sourcePlayerList, destinationPlayerList, sourceDroppableInfo, destinationDroppableInfo) => {
    const sourcePlayerListClone = Array.from(sourcePlayerList);
    const destinationPlayerListClone = Array.from(destinationPlayerList);

    // Remove relevant slots from initial lists.
    const [slotRemovedFromSource] = sourcePlayerListClone.splice(sourceDroppableInfo.index, 1);
    const [slotRemovedFromDestination] = destinationPlayerListClone.splice(destinationDroppableInfo.index, 1);

    console.log("Source Slot: ", slotRemovedFromSource);
    console.log("Destination Slot: ", slotRemovedFromDestination);

    // Add slots to updated lists.
    sourcePlayerListClone.splice(sourceDroppableInfo.index, 0, slotRemovedFromDestination);
    destinationPlayerListClone.splice(destinationDroppableInfo.index, 0, slotRemovedFromSource);

/*    const firstAvailableSlot = destinationPlayerListClone.find(slot => slot.content.vacant);
    firstAvailableSlot.content.vacant = false;
    firstAvailableSlot.content.player = slotRemovedFromSource.content.player;
    firstAvailableSlot.content.price = slotRemovedFromSource.content.price;*/

    const result = {};
    result[sourceDroppableInfo.droppableId] = sourcePlayerListClone;
    result[destinationDroppableInfo.droppableId] = destinationPlayerListClone;
    console.log("Result: ", result);
    return result;
};

const moveToNonVacantPosition = (sourcePlayerList, destinationPlayerList, sourceDroppableInfo, destinationDroppableInfo) => {
    const sourcePlayerListClone = Array.from(sourcePlayerList);
    const destinationPlayerListClone = Array.from(destinationPlayerList);

    const sourcePlayer = sourcePlayerList[sourceDroppableInfo.index].dynamicSlotData;
    const destinationPlayer = destinationPlayerList[destinationDroppableInfo.index].dynamicSlotData;

    // Switch content of 2 switched slots.
    console.log(sourcePlayer);
    console.log(destinationPlayer);

    sourcePlayerListClone[sourceDroppableInfo.index].dynamicSlotData = destinationPlayer;
    destinationPlayerListClone[destinationDroppableInfo.index].dynamicSlotData = sourcePlayer;

    const result = {};
    result[sourceDroppableInfo.droppableId] = sourcePlayerListClone;
    result[destinationDroppableInfo.droppableId] = destinationPlayerListClone;
    console.log("Result: ", result);
    return result;
};

class MyTeam extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            myTeamList: {
                DEF: [],
                MID: [],
                RUC: [],
                FWD: [],
                BENCH: []
            },
            draggedPrimaryPosition: '',
            draggedSecondaryPosition: '',
            isDropDisabled: true,
            isDragging: false,
            errorText: '',
        };
    }

    componentWillMount() {
        this.setState({myTeamList: getInitialMyTeamList(this.props.roster, this.props.currentTeam.teamPlayerJoins)});
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/updateMyTeamPositions', this.receiveUpdatedMyTeamPosition)
    }

    componentWillUpdate(nextProps) {
        const newPlayerReceived = nextProps.currentTeam.teamPlayerJoins.length !== this.props.currentTeam.teamPlayerJoins.length;
        if(newPlayerReceived) {
            const playerToBeAdded = nextProps.currentTeam.teamPlayerJoins[nextProps.currentTeam.teamPlayerJoins.length -1];
            addPlayerToFirstVacantSlot(this.state.myTeamList, playerToBeAdded);
        }
    }

    receiveUpdatedMyTeamPosition = (payload) => {
        const updatedMyTeamPosition = JSON.parse(payload.body);
        this.props.updateMyTeamPositionSuccess(updatedMyTeamPosition);
    }

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    droppableList = {
        droppableDefs: 'DEF',
        droppableMids: 'MID',
        droppableRucs: 'RUC',
        droppableFwds: 'FWD',
        droppableBench: 'BENCH',
    };

    getPlayersByPosition = id => this.state.myTeamList[id];

    isDropDisabled = (dropPosition) => {
        // Disable drop if drop position isn't valid for current player.
        //const isDropPositionVacant = this.state.myTeamList[dropPosition].findIndex(slot => slot.content.vacant) > -1;
        const isDropPositionValid = dropPosition === "BENCH"
                                    || dropPosition.includes(this.state.draggedPrimaryPosition)
                                    || dropPosition.includes(this.state.draggedSecondaryPosition);
        //return !isDropPositionVacant || !isDropPositionValid || this.props.isLeadBidder;
        return !isDropPositionValid || this.props.isLeadBidder;
    };

    onDragStart = start => {
        const sourcePosition = this.droppableList[start.source.droppableId];
        const draggedSlot = this.getPlayersByPosition(sourcePosition)[start.source.index];
        this.setState({
            ...this.state,
            isDragging: true,
            draggedPrimaryPosition: draggedSlot.dynamicSlotData.player.primaryPosition,
            draggedSecondaryPosition: draggedSlot.dynamicSlotData.player.secondaryPosition,
        })
    }

    onDragEnd = result => {
        console.log("ODE Result: ", result);
        const { source, destination } = result;
        // Dropped outside the list or re-Ordered.
        if (!destination || (source.droppableId === destination.droppableId)) {
            this.setState({
                ...this.state,
                isDragging: false,
                draggedPrimaryPosition: '',
                draggedSecondaryPosition: ''
            })
        }
        // Moved to another list.
        else {
            const sourcePosition = this.droppableList[source.droppableId];
            const sourcePlayerList = this.getPlayersByPosition(sourcePosition);
            const sourcePlayer = sourcePlayerList[source.index].dynamicSlotData.player;

            const destinationPosition = this.droppableList[destination.droppableId];
            const destinationPlayerList = this.getPlayersByPosition(destinationPosition);
            const destinationPlayer = destinationPlayerList[destination.index].dynamicSlotData.player;

            // If player is dropped on valid vacant slot.
            if(!destinationPlayer) {
                this.movePlayerAndUpdateState(sourcePlayerList, destination, source, destinationPosition);
                this.props.updateMyTeamPosition(this.props.currentTeam.id, sourcePlayer.id, destinationPosition);
            }
            // Else if player is dropped on a valid player to switch with.
            else if(sourcePosition === "BENCH"
                || destinationPlayer.primaryPosition === sourcePosition
                || destinationPlayer.secondaryPosition === sourcePosition) {
                console.log("Valid Switch");
                this.movePlayerAndUpdateState(sourcePlayerList, destination, source, destinationPosition);
                this.props.updateMyTeamPosition(this.props.currentTeam.id, sourcePlayer.id, destinationPosition);
            }

            console.log(sourcePlayer, destinationPlayer);
            // Dropped onto a valid vacant position.
            // TODO: Add spinner to relevant slot when loading.


            //const destinationPosition = this.droppableList[destination.droppableId];

            //this.movePlayerAndUpdateState(sourcePositionList, destination, source, destinationPosition);

            // TODO: List is rearranged regardless of success of request. Should try and update this.
            // Uses POST rather than WebSockets to send as this functionality may be used outside of a Draft too.
            //this.props.updateMyTeamPosition(this.props.currentTeam.id, sourcePlayerId, destinationPosition);
        }
    };

    movePlayerAndUpdateState(sourcePositionList, destination, source, destinationPosition) {
        const result = moveToNonVacantPosition(
            sourcePositionList,
            this.getPlayersByPosition(this.droppableList[destination.droppableId]),
            source,
            destination
        );
        const sourcePosition = this.droppableList[source.droppableId];
        this.setState(prevState => ({
            ...prevState,
            myTeamList: {
                ...prevState.myTeamList,
                [sourcePosition]: result[source.droppableId],
                [destinationPosition]: result[destination.droppableId]
            },
            isDragging: false,
            draggedPrimaryPosition: '',
            draggedSecondaryPosition: '',
        }));
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.myTeamRoot}>
                <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
                    <DroppablePositionContainer
                        droppableId="droppableDefs"
                        isDragging={this.state.isDragging}
                        isDropDisabled={this.isDropDisabled("DEF")}
                        itemList={this.state.myTeamList.DEF}
                        styleProps={defDroppableStyle}
                        numOfPlayerRequired={this.props.numOfPlayersRequired}
                    />
                    <DroppablePositionContainer
                        droppableId="droppableMids"
                        isDragging={this.state.isDragging}
                        isDropDisabled={this.isDropDisabled("MID")}
                        itemList={this.state.myTeamList.MID}
                        styleProps={midDroppableStyles}
                        numOfPlayerRequired={this.props.numOfPlayersRequired}
                    />
                    <DroppablePositionContainer
                        droppableId="droppableRucs"
                        isDragging={this.state.isDragging}
                        isDropDisabled={this.isDropDisabled("RUC")}
                        itemList={this.state.myTeamList.RUC}
                        styleProps={rucDroppableStyles}
                        numOfPlayerRequired={this.props.numOfPlayersRequired}
                    />
                    <DroppablePositionContainer
                        droppableId="droppableFwds"
                        isDragging={this.state.isDragging}
                        isDropDisabled={this.isDropDisabled("FWD")}
                        itemList={this.state.myTeamList.FWD}
                        styleProps={fwdDroppableStyles}
                        numOfPlayerRequired={this.props.numOfPlayersRequired}
                    />
                    <DroppablePositionContainer
                        droppableId="droppableBench"
                        isDragging={this.state.isDragging}
                        isDropDisabled={this.isDropDisabled("BENCH")}
                        itemList={this.state.myTeamList.BENCH}
                        styleProps={benchDroppableStyles}
                        numOfPlayerRequired={this.props.numOfPlayersRequired}
                    />
                </DragDropContext>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateMyTeamPosition: (teamId, playerId, position) => dispatch(updateMyTeamPositionAction(teamId, playerId, position)),
    updateMyTeamPositionSuccess: (team) => dispatch(updateMyTeamPositionSuccessAction(team)),
})

const mapStateToProps = state => {
    return {
        roster: draftRosterSelector(state),
        currentTeam: currentTeamSelector(state),
        numOfPlayersRequired: numOfPlayersRequiredSelector(state),
        stompClient: stompClientSelector(state),
        isLeadBidder: isLeadBidderSelector(state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MyTeam));
