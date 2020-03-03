import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DraftService from '../DraftService';

// fake data generator
const getSlots = (count, offset = 0, position) => {
    return Array.from({ length: count }, (v, k) => k).map(k => {
        const id = k + offset;
        return createEmptySlot(id, position)
    });
};

const createEmptySlot = (id, position) => {
    return {id: `${id}`, content: {vacant: true, position: `${position}`, player: null}};
}

const createFilledSlot = (id, position, player) => {
    let updatedPlayer = player;
    updatedPlayer.myTeamPosition = position;
    return {id: `${id}`, content: {vacant: false, position: `${position}`, player: updatedPlayer}};
}

const getInitialState = (roster, playerList) => {
    let initialState = {
        playerList: {
            DEF: getSlots(roster.def, 0, "DEF"),
            MID: getSlots(roster.mid, roster.def, "MID"),
            RUC: getSlots(roster.ruc, roster.def + roster.mid, "RUC"),
            FWD: getSlots(roster.fwd, roster.def + roster.mid + roster.ruc, "FWD"),
            BENCH: getSlots(roster.bench, roster.def + roster.mid + roster.ruc + roster.fwd, "BENCH")
        },
        draggedPrimaryPosition: '',
        draggedSecondaryPosition: '',
        errorText: '',
    }

    playerList.forEach(player => {
        const myTeamPositon = player.myTeamPosition;
        if(myTeamPositon) {
            const relevantPositionList = initialState.playerList[myTeamPositon];
            const firstVacantSlot = relevantPositionList.findIndex(slot => slot.content.vacant);
            const currentSlotData = relevantPositionList[firstVacantSlot];
            relevantPositionList[firstVacantSlot] = createFilledSlot(currentSlotData.id, currentSlotData.content.position, player);
        } else {
            addToAvailableSlot(initialState.playerList, player);
        }
    });

    return initialState;
};

const addToAvailableSlot = (currentPlayers, playerToBeAdded) => {
    const primaryPosition = playerToBeAdded.primaryPosition;
    const secondaryPosition = playerToBeAdded.secondaryPosition;

    let availablePosition = "BENCH";
    let availableSlot = currentPlayers["BENCH"].findIndex(slot => slot.content.vacant);

    const primaryPositionSlot = currentPlayers[primaryPosition].findIndex(slot => slot.content.vacant);

    if(primaryPositionSlot > -1) {
        availablePosition = primaryPosition;
        availableSlot = primaryPositionSlot;
    } else if(secondaryPosition) {
        const secondaryPositionSlot = currentPlayers[secondaryPosition].findIndex(slot => slot.content.vacant);
        if(secondaryPositionSlot > -1) {
            availablePosition = secondaryPosition;
            availableSlot = secondaryPositionSlot;
        }
    }

    const currentSlotData = currentPlayers[availablePosition][availableSlot];
    const updatedSlotData = createFilledSlot(currentSlotData.id, currentSlotData.content.position, playerToBeAdded);
    currentPlayers[availablePosition][availableSlot] = updatedSlotData;
    
    const result = {};
    result["playerId"] = updatedSlotData.content.player.id;
    result["myTeamPosition"] = updatedSlotData.content.position;

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    const firstAvailableSlotIndex = destClone.findIndex(slot => slot.content.vacant);
    const firstAvailableSlot = destClone[firstAvailableSlotIndex];

    sourceClone.push(createEmptySlot(removed.id, removed.content.position));
    destClone[firstAvailableSlotIndex] = createFilledSlot(firstAvailableSlot.id, firstAvailableSlot.content.position, removed.content.player);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    result["updatedPlayerId"] = removed.content.player.id;
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

class MyTeam extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        const playerListChange = nextProps.playerList != this.props.playerList;
        const stateChange = nextState != this.state;
        return playerListChange || stateChange;
    }

    componentWillMount() {
        this.setState(getInitialState(this.props.roster, this.props.playerList));
    }

    componentWillUpdate(nextProps) {
        const newPlayerReceived = nextProps.playerList.length != this.props.playerList.length;
        if(newPlayerReceived) {
            const playerToBeAdded = nextProps.playerList[nextProps.playerList.length -1];
            const result = addToAvailableSlot(this.state.playerList, playerToBeAdded);
            this.saveMyTeamLayout(this.props.teamId, result.playerId, result.myTeamPosition);
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

    getPositionList = id => this.state.playerList[this.droppableList[id]];

    isDragDisabled = (isDraggableVacant) => {
        return isDraggableVacant;
    }

    isDropDisabled = (dropPosition) => {
        const isDropPositionVacant = this.state.playerList[dropPosition].findIndex(slot => slot.content.vacant) > -1;
        const isDropPositionValid = dropPosition == "BENCH"
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
            const result = move(
                this.getPositionList(source.droppableId),
                this.getPositionList(destination.droppableId),
                source,
                destination
            );

            const sourcePosition = this.droppableList[source.droppableId];
            const destinationPosition = this.droppableList[destination.droppableId];

            this.setState(prevState => ({
                ...prevState,
                playerList: {
                    ...prevState.playerList,
                    [sourcePosition]: result[source.droppableId],
                    [destinationPosition]: result[destination.droppableId]
                }
            }));
            this.saveMyTeamLayout(this.props.teamId, result.updatedPlayerId, destinationPosition);
        }
    };

    saveMyTeamLayout = (teamId, playerId, position) => {
        DraftService.saveMyTeamLayout(teamId, playerId, position)
            .then(response => {
                if(response.status === 200) {
                    this.props.setVacantPositions(this.state.playerList);
                } else {
                    this.setState({errorText: response.data.message});
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    getMyTeamLayout = (playerList) => {
        const myTeamLayout = [];
        for(let position in playerList) {
            if (Object.prototype.hasOwnProperty.call(playerList, position)) {
                for(let i=0; i < playerList[position].length; i++) {
                    const currentSlot = playerList[position][i];
                    if(!currentSlot.content.vacant) {
                        myTeamLayout.push(currentSlot.content.player);
                    } else {
                        break;
                    }
                }
            }
        }
        return myTeamLayout;
    };

    render() {
        return (
            <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppableDefs" isDropDisabled={this.isDropDisabled("DEF")}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.playerList.DEF.map((item, index) => (
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
                            {this.state.playerList.MID.map((item, index) => (
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
                            {this.state.playerList.RUC.map((item, index) => (
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
                            {this.state.playerList.FWD.map((item, index) => (
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
                            {this.state.playerList.BENCH.map((item, index) => (
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
