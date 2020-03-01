import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const roster = {id: 2, type: "22222", defenders: 2, midfielders: 3, rucks: 1, forwards: 2, bench: 4};
const playerList = {
        def: [{name: "Josh Gibson", position: "DEF"}],
        mid: [{name: "Sam Mitchell", position: "MID"}],
        ruc: [{name: "Max Bailey", position: "RUC"}],
        fwd: [{name: "Cyril Rioli", position: "FWD"}],
        bench: [{name: "Jarryd Roughead", position: "BEN"}],
    };

// fake data generator
const getItems = (count, offset = 0, position) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: {name: `test-${k + offset}`, position: `${position}`}
    })
);

const getPositionList = (position, offset, slots, currentPlayers) => {
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

const getInitialPositionState = (playerList) => {
        let offset = 0;
        let initialState = {
            defs: '',
            mids: '',
            rucs: '',
            fwds: '',
            bench: '',
        }

        initialState.defs = getPositionList('DEF', offset, roster.defenders, playerList.def);
        offset += roster.defenders;
        initialState.mids = getPositionList('MID', offset, roster.midfielders, playerList.mid);
        offset += roster.midfielder;
        initialState.rucs = getPositionList('RUC', offset, roster.rucks, playerList.ruc);
        offset += roster.rucks;
        initialState.fwds = getPositionList('FWD', 15, roster.forwards, playerList.fwd);
        offset += roster.forwards;
        initialState.bench = getPositionList('BEN', 20, roster.bench, playerList.bench);
        console.log(initialState);
        return initialState;
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
    console.log('Source: ', sourceClone)
    console.log('Dest: ', destClone)
    const [removed] = sourceClone.splice(droppableSource.index, 1);
        console.log('Removed: ', removed)

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    console.log("Result: ", result);
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
        droppableDefs: 'defs',
        droppableMids: 'mids',
        droppableRucs: 'rucs',
        droppableFwds: 'fwds',
        droppableBench: 'bench',
    };

    getList = id => this.state[this.droppableList[id]];

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
        console.log(this.props.playerList);
        return (
            <DragDropContext onDragStart={this.onDragStart} onDragUpdate={this.onDragUpdate} onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppableDefs" isDropDisabled={this.state.draggedPlayerPosition != 'DEF'}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.defs.map((item, index) => (
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
                <Droppable droppableId="droppableMids" isDropDisabled={this.state.draggedPlayerPosition != 'MID'}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.mids.map((item, index) => (
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
                <Droppable droppableId="droppableRucs" isDropDisabled={this.state.draggedPlayerPosition != 'RUC'}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.rucs.map((item, index) => (
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
                <Droppable droppableId="droppableFwds" isDropDisabled={this.state.draggedPlayerPosition != 'FWD'}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.fwds.map((item, index) => (
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
                <Droppable droppableId="droppableBench">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.bench.map((item, index) => (
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
