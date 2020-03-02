import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


// fake data generator
const getItems = (count, offset = 0, position) => {
    return Array.from({ length: count }, (v, k) => k).map(k => {
        const id = k + offset;
        return createEmptySlot(id, position)
    });
};

const createEmptySlot = (id, position) => {
    return {id: `${id}`, content: {vacant: true, position: `${position}`, player: {name: "TBA"}}};
}

const createFilledSlot = (id, position, player) => {
    return {id: `${id}`, content: {vacant: false, position: `${position}`, player: player}};
}

const getInitialState = (roster, playerList) => {
    let initialState = {
        DEF: getItems(roster.def, 0, "DEF"),
        MID: getItems(roster.mid, roster.def, "MID"),
        RUC: getItems(roster.ruc, roster.def + roster.mid, "RUC"),
        FWD: getItems(roster.fwd, roster.def + roster.mid + roster.ruc, "FWD"),
        BENCH: getItems(roster.bench, roster.def + roster.mid + roster.ruc + roster.fwd, "BENCH"),
        draggedPlayerPosition: '',
    }

    playerList.forEach(player => {
        console.log(player);
        addToAvailableSlot(initialState, player);
    });

    return initialState;
};

const addToAvailableSlot = (currentPlayers, playerToBeAdded) => {
    const position = playerToBeAdded.position;
    const primaryPosition = position.slice(0, 3);
    const secondaryPosition = position.length > 3 ? position.slice(4, 7) : null;

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
    currentPlayers[availablePosition][availableSlot] = createFilledSlot(currentSlotData.id, currentSlotData.content.position, playerToBeAdded);
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
    console.log(result);
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
        console.log("Should Component Update: ", playerListChange || stateChange);
        return playerListChange || stateChange;
    }

    componentWillMount() {
        console.log("Initial State Set.");
        console.log(this.props.roster);
        this.setState(getInitialState(this.props.roster, this.props.playerList));
    }

    componentWillUpdate(nextProps) {
        console.log("Add Player.");
        const newPlayerReceived = nextProps.playerList != this.props.playerList;
        if(newPlayerReceived) {
            addToAvailableSlot(this.state, nextProps.playerList[nextProps.playerList.length-1]);
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

    getList = id => this.state[this.droppableList[id]];

    isDragDisabled = (isDraggableVacant) => {
        return isDraggableVacant;
    }

    isDropDisabled = (dropPosition) => {
        return !(this.state.draggedPlayerPosition.includes(dropPosition) || dropPosition == "BENCH");
    };

    onDragStart = start => {
        const draggedSlot = this.getList(start.source.droppableId)[start.source.index];
        this.setState({draggedPlayerPosition: draggedSlot.content.player.position});
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
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );
            this.setState({[this.droppableList[source.droppableId]]: result[source.droppableId]})
            this.setState({[this.droppableList[destination.droppableId]]: result[destination.droppableId]})
        }
    };

    render() {
        console.log(this.props.playerList);
        return (
            <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppableDefs" isDropDisabled={this.isDropDisabled("DEF")}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.DEF.map((item, index) => (
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
                            {this.state.MID.map((item, index) => (
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
                            {this.state.RUC.map((item, index) => (
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
                            {this.state.FWD.map((item, index) => (
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
                            {this.state.BENCH.map((item, index) => (
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
