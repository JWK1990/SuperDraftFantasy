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
        content: {name: `test-${k + offset}`, position: `${position}`}
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

const getAvailableSlot = (currentPlayers, playerToBeAdded) => {
    const position = playerToBeAdded.position;
    const primaryPosition = position.slice(0, 3);
    const secondaryPosition = position.length > 3 ? position.slice(4, 7) : null;

    if(currentPlayers[primaryPosition].length < roster.DEF) {
        return primaryPosition;
    } else if(secondaryPosition && currentPlayers[secondaryPosition].length < roster.FWD) {
        return secondaryPosition;
    } else {
        return "BENCH";
    }
};

const getInitialPositionState = (playerList) => {
    let initialState = {
        DEF: [],
        MID: [],
        RUC: [],
        FWD: [],
        BENCH: [],
        draggedPlayerPosition: '',
    }

    playerList.forEach(player => {
        const availableSlot = getAvailableSlot(initialState, player);
        initialState[availableSlot].push({id: `${player.id}`, content: player});
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

    isDropDisabled = (dropPosition) => {
        const validDropPosition = this.state.draggedPlayerPosition.includes(dropPosition) || dropPosition == "BENCH";
        const slotAvailable = this.state[dropPosition].length < roster[dropPosition];
        return !validDropPosition || !slotAvailable;
    };

    onDragStart = start => {
        const list = this.getList(start.source.droppableId)
        const index = start.source.index;
        this.setState({draggedPlayerPosition: list[index].content.position})
        console.log(this.state.draggedPlayerPosition);
    }

    onDragUpdate = update => {
        console.log("Update");
    }

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const result = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );
            this.setState({[this.droppableList[source.droppableId]]: result})
        } else {
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
            <DragDropContext onDragStart={this.onDragStart} onDragUpdate={this.onDragUpdate} onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppableDefs" isDropDisabled={this.isDropDisabled("DEF")}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.DEF.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
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
                <Droppable droppableId="droppableMids" isDropDisabled={this.isDropDisabled("MID")}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.MID.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
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
                <Droppable droppableId="droppableRucs" isDropDisabled={this.isDropDisabled("RUC")}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.RUC.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
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
                <Droppable droppableId="droppableFwds" isDropDisabled={this.isDropDisabled("FWD")}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.FWD.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
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
                <Droppable droppableId="droppableBench" isDropDisabled={this.isDropDisabled('BENCH')}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.BENCH.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
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
