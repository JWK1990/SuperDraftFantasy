import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { defaultCipherList } from 'constants';

const roster = {id: 2, type: "22222", DEF: 1, MID: 3, RUC: 1, FWD: 1, BENCH: 4};
const playerList = [
    {id: 1, name: "Josh Gibson", position: "DEF"},
    {id: 2, name: "Sam Mitchell", position: "MID"},
    {id: 3, name: "Max Bailey", position: "RUC"},
    {id: 4, name: "Cyril Rioli", position: "FWD"},
    {id: 5, name: "Jarryd Roughead", position: "DEF-FWD"},
];

// fake data generator
const getItems = (count, offset = 0, position) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: {name: `TBA`, position: `${position}`}
    })
);

const setPositionSlots = (position, offset, slots, currentPlayers) => {
    const playerList = [];
    for(let i=0; i < slots; i++) {
        if(currentPlayers[i]) {
            playerList.push({id: `item-${offset + i}`, content: currentPlayers[i]});
        } else {
            playerList.push({id: `item-${offset + i}`, content: {name: "TBA", position: position}})
        }
    }
    return playerList;
};

const addToAvailableSlot = (currentPlayers, playerToBeAdded) => {
    const position = playerToBeAdded.position;
    const primaryPosition = position.slice(0, 3);
    const secondaryPosition = position.length > 3 ? position.slice(4, 7) : null;

    let availablePosition = "BENCH";
    let availableSlot = currentPlayers["BENCH"].findIndex(slot => slot.content.name == "TBA");

    const primaryPositionSlot = currentPlayers[primaryPosition].findIndex(slot => slot.content.name == "TBA");

    if(primaryPositionSlot > -1) {
        availablePosition = primaryPosition;
        availableSlot = primaryPositionSlot;
    } else if(secondaryPosition) {
        const secondaryPositionSlot = currentPlayers[secondaryPosition].findIndex(slot => slot.content.name == "TBA");
        if(secondaryPositionSlot > -1) {
            availablePosition = secondaryPosition;
            availableSlot = secondaryPositionSlot;
        }
    }

    console.log("Available Position: ", availablePosition);
    console.log("Available Slot: ", availableSlot);
    console.log("Current Value: ", currentPlayers[availablePosition][availableSlot]);

    currentPlayers[availablePosition][availableSlot] = {id: `${currentPlayers[availablePosition][availableSlot].id}`, content: playerToBeAdded};
};

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

/*
        let offset = 0;
        initialState.defs = setPositionSlots('DEF', offset, roster.defenders, playerList.def);
        offset += roster.defenders;
        initialState.mids = setPositionSlots('MID', offset, roster.midfielders, playerList.mid);
        offset += roster.midfielder;
        initialState.rucs = setPositionSlots('RUC', offset, roster.rucks, playerList.ruc);
        offset += roster.rucks;
        initialState.fwds = setPositionSlots('FWD', 15, roster.forwards, playerList.fwd);
        offset += roster.forwards;
        initialState.bench = setPositionSlots('BEN', 20, roster.bench, playerList.bench);
        console.log(initialState);
        return initialState;
*/
};

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250
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

    isDragDisabled = (draggableItemName) => {
        return draggableItemName == "TBA";
    }

    isDropDisabled = (dropPosition) => {
        const validDropPosition = (this.state.draggedPlayerPosition.includes(dropPosition) || dropPosition == "BENCH");
        return !validDropPosition;
    };

    onDragStart = start => {
        const list = this.getList(start.source.droppableId)
        const index = start.source.index;
        this.setState({draggedPlayerPosition: list[index].content.position})
        console.log(this.state.draggedPlayerPosition);
    }

    onDragUpdate = update => {
        this.setState({validDropArea: update.combine != null})
        console.log(this.state.validDropArea);
    }

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination && !result.combine) {
            console.log("No Destination Or Combine");
            return;
        }

        if(result.combine) {
            console.log("Combine");
            this.updateAvailableSlots(result);
        } else if (source.droppableId === destination.droppableId) {
            console.log("Re-Order");
            const result = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );
            this.setState({[this.droppableList[source.droppableId]]: result})
        } else {
            console.log("Move");
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

    updateAvailableSlots = (result) => {
        const destinationPosition = this.droppableList[result.combine.droppableId];
        const destinationList = this.state[destinationPosition];
        const destinationSlot = destinationList.findIndex(slot => slot.id == result.combine.draggableId);

        const sourcePosition = this.droppableList[result.source.droppableId];
        const sourceList = this.state[sourcePosition];
        const sourceSlot = sourceList.findIndex(slot => slot.id == result.draggableId);

        destinationList[destinationSlot] = {id: `${destinationList[destinationSlot].id}`, content: this.state[sourcePosition][sourceSlot].content};
        sourceList[sourceSlot] = {id: `${sourceList[sourceSlot].id}`, content: {name: "TBA", position: sourcePosition}};

        this.setState[destinationList] = destinationList;
        this.setState[sourceList] = sourceList;

        console.log(this.state);

    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <DragDropContext onDragStart={this.onDragStart} onDragUpdate={this.onDragUpdate} onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppableDefs" isDropDisabled={this.isDropDisabled("DEF")} isCombineEnabled={true}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.DEF.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                    isDragDisabled={this.isDragDisabled(item.content.name)}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}>
                                            {item.content.name}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="droppableMids" isDropDisabled={this.isDropDisabled("MID")} isCombineEnabled={true}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.MID.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                    isDragDisabled={this.isDragDisabled(item.content.name)}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}>
                                            {item.content.name}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="droppableRucs" isDropDisabled={this.isDropDisabled("RUC")} isCombineEnabled={true}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.RUC.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                    isDragDisabled={this.isDragDisabled(item.content.name)}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}>
                                            {item.content.name}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="droppableFwds" isDropDisabled={this.isDropDisabled("FWD")} isCombineEnabled={true}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.FWD.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                    isDragDisabled={this.isDragDisabled(item.content.name)}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}>
                                            {item.content.name}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="droppableBench" isDropDisabled={this.isDropDisabled('BENCH')} isCombineEnabled={true}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.BENCH.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                    isDragDisabled={this.isDragDisabled(item.content.name)}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}>
                                            {item.content.name}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export default MyTeam;
