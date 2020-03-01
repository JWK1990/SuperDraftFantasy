import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { defaultCipherList } from 'constants';
import { nominalTypeHack } from 'prop-types';

const roster = {id: 2, type: "22222", DEF: 5, MID: 5, RUC: 5, FWD: 5, BENCH: 4};
const playerList = [
    {id: 1, name: "Josh Gibson", position: "DEF"},
    {id: 2, name: "Sam Mitchell", position: "MID"},
    {id: 3, name: "Max Bailey", position: "RUC"},
    {id: 4, name: "Cyril Rioli", position: "FWD"},
    {id: 5, name: "Jarryd Roughead", position: "DEF-FWD"},
];

// fake data generator
const getItems = (count, offset = 0, position) => {
    return Array.from({ length: count }, (v, k) => k).map(k => {
        const id = k + offset;
        return createEmptySlot(id, position)
    });
};

const createEmptySlot = (id, position) => {
    return {id: `${id}`, content: {vacant: true, position: `${position}`, player: null}};
}

const createFilledSlot = (id, position, player) => {
    return {id: `${id}`, content: {vacant: false, position: `${position}`, player: player}};
}

const getInitialPositionState = (playerList) => {
    let initialState = {
        DEF: getItems(roster.DEF, 0, "DEF"),
        MID: getItems(roster.MID, roster.DEF, "MID"),
        RUC: getItems(roster.RUC, roster.DEF + roster.MID, "RUC"),
        FWD: getItems(roster.FWD, roster.DEF + roster.MID + roster.RUC, "FWD"),
        BENCH: getItems(roster.BENCH, roster.DEF + roster.MID + roster.RUC + roster.FWD, "BENCH"),
        draggedPlayerPosition: '',
    }

    playerList.forEach(player => {
        addToAvailableSlot(initialState, player);
    });

    console.log(initialState);
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
    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    position: 'static',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});


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

    state = getInitialPositionState(playerList);

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
        console.log(start)

        const list = this.getList(start.source.droppableId)
        console.log(list)

        const index = start.source.index;
        console.log(index)

        this.setState({draggedPlayerPosition: list[index].content.player.position})
        console.log(this.state.draggedPlayerPosition)
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

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
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
                                            {item.content.player ? item.content.player.name : ""}
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
                                            {item.content.player ? item.content.player.name : ""}
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
                                            {item.content.player ? item.content.player.name : ""}
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
                                            {item.content.player ? item.content.player.name : ""}
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
                                            {item.content.player ? item.content.player.name : ""}
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
