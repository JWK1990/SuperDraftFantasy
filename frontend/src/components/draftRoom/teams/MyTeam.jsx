import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DraftService from '../../../services/DraftService';

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
    return {id: `${id}`, content: {vacant: true, position: `${position}`, player: null, price: null}};
}

const fillSlots = (myTeamList, teamPlayerJoinList) => {
    teamPlayerJoinList.forEach(teamPlayerJoin => {
        addPlayerToFirstVacantSlot(myTeamList, teamPlayerJoin);
    })
    return myTeamList;
}

const addPlayerToFirstVacantSlot = (myTeamList, teamPlayerJoin) => {
    if(teamPlayerJoin.myTeamPosition != null) {
        const relevantPositionList = myTeamList[teamPlayerJoin.myTeamPosition];
        const firstVacantSlot = relevantPositionList.find(slot => slot.content.vacant);
        firstVacantSlot.content.vacant = false;
        firstVacantSlot.content.player = teamPlayerJoin.player;
        firstVacantSlot.content.price = teamPlayerJoin.price;
    }
}

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    sourceClone.push(createEmptySlot(removed.id, removed.content.position));

    const firstAvailableSlot = destClone.find(slot => slot.content.vacant);
    firstAvailableSlot.content.vacant = false;
    firstAvailableSlot.content.player = removed.content.player;
    firstAvailableSlot.content.price = removed.content.price;

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
};

const grid = 8;

function getStyle(style, snapshot) {
    if (!snapshot.isDragging) {
        return {
            userSelect: 'none',
            position: 'static',
            padding: grid * 2,
            margin: `0 0 ${grid}px 0`,
            background: snapshot.isDragging ? 'lightgreen' : 'grey',
        }
    };

    if (!snapshot.isDropAnimating) {
        return {
            ...style,
            userSelect: 'none',
            position: 'static',
            padding: grid * 2,
            margin: `0 0 ${grid}px 0`,
            background: snapshot.isDragging ? 'lightgreen' : 'grey',
        }
    }
  
    return {
      ...style,
      userSelect: 'none',
      position: 'static',
      padding: grid * 2,
      margin: `0 0 ${grid}px 0`,
      background: snapshot.isDragging ? 'lightgreen' : 'grey',
      // cannot be 0, but make it super tiny
      transitionDuration: `0.001s`
    };
  }

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250,
    transform: 'none',
});

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
            errorText: '',
        };
    }

    componentWillMount() {
        this.setState({myTeamList: getInitialMyTeamList(this.props.roster, this.props.currentTeam.teamPlayerJoins)});
    }

    componentWillUpdate(nextProps) {
        const newPlayerReceived = nextProps.currentTeam.teamPlayerJoins.length !== this.props.currentTeam.teamPlayerJoins.length;
        if(newPlayerReceived) {
            const playerToBeAdded = nextProps.currentTeam.teamPlayerJoins[nextProps.currentTeam.teamPlayerJoins.length -1];
            addPlayerToFirstVacantSlot(this.state.myTeamList, playerToBeAdded);
        }
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

    getPositionList = id => this.state.myTeamList[this.droppableList[id]];

    isDragDisabled = (isDraggableVacant) => {
        return isDraggableVacant;
    }

    isDropDisabled = (dropPosition) => {
        const isDropPositionVacant = this.state.myTeamList[dropPosition].findIndex(slot => slot.content.vacant) > -1;
        const isDropPositionValid = dropPosition === "BENCH"
                                    || dropPosition.includes(this.state.draggedPrimaryPosition)
                                    || dropPosition.includes(this.state.draggedSecondaryPosition);
        if(!isDropPositionVacant || !isDropPositionValid) {
            return true;
        }
        return false;
    };

    onDragStart = start => {
        const draggedSlot = this.getPositionList(start.source.droppableId)[start.source.index];
        this.setState({draggedPrimaryPosition: draggedSlot.content.player.primaryPosition});
        this.setState({draggedSecondaryPosition: draggedSlot.content.player.secondaryPosition});
    }

    onDragEnd = result => {
        const { source, destination } = result;
        // Dropped outside the list.
        if (!destination) {
            return;
        }
        // Re-Ordered.
        else if (source.droppableId === destination.droppableId) {
            return;
        }
        // Moved to another list.
        else {
            // TODO: Add spinner to relevant slot when loading.
            const sourcePositionList = this.getPositionList(source.droppableId);
            const playerId = sourcePositionList[source.index].content.player.id;
            const destinationPosition = this.droppableList[destination.droppableId];

            DraftService.saveMyTeamLayout(this.props.currentTeam.id, playerId, destinationPosition)
                .then(response => {
                    if(response.status === 200) {
                        this.movePlayerAndUpdateState(sourcePositionList, destination, source, destinationPosition);
                    } else {
                        this.setState({errorText: response.data.message});
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    movePlayerAndUpdateState(sourcePositionList, destination, source, destinationPosition) {
        const result = move(
            sourcePositionList,
            this.getPositionList(destination.droppableId),
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
            }
        }));
    }

    render() {
        return (
            <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppableDefs" isDropDisabled={this.isDropDisabled("DEF")}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.myTeamList.DEF.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                    isDragDisabled={this.isDragDisabled(item.content.vacant)}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getStyle(provided.draggableProps.style, snapshot)}>
                                            {item.content.player ? item.content.player.firstName : ""}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            <span style={{display: "none"}}>
                                {provided.placeholder}
                            </span>
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="droppableMids" isDropDisabled={this.isDropDisabled("MID")}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.myTeamList.MID.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                    isDragDisabled={this.isDragDisabled(item.content.vacant)}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getStyle(provided.draggableProps.style, snapshot)}>
                                            {item.content.player ? item.content.player.firstName : ""}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            <span style={{display: "none"}}>
                                {provided.placeholder}
                            </span>
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="droppableRucs" isDropDisabled={this.isDropDisabled("RUC")}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.myTeamList.RUC.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                    isDragDisabled={this.isDragDisabled(item.content.vacant)}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getStyle(provided.draggableProps.style, snapshot)}>
                                            {item.content.player ? item.content.player.firstName : ""}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            <span style={{display: "none"}}>
                                {provided.placeholder}
                            </span>
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="droppableFwds" isDropDisabled={this.isDropDisabled("FWD")}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.myTeamList.FWD.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                    isDragDisabled={this.isDragDisabled(item.content.vacant)}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getStyle(provided.draggableProps.style, snapshot)}>
                                            {item.content.player ? item.content.player.firstName : ""}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            <span style={{display: "none"}}>
                                {provided.placeholder}
                            </span>
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="droppableBench" isDropDisabled={this.isDropDisabled('BENCH')}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.myTeamList.BENCH.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                    isDragDisabled={this.isDragDisabled(item.content.vacant)}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getStyle(provided.draggableProps.style, snapshot)}>
                                            {item.content.player ? item.content.player.firstName : ""}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            <span style={{display: "none"}}>
                                {provided.placeholder}
                            </span>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export default MyTeam;
