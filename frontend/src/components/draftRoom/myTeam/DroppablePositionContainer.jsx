import {Droppable} from "react-beautiful-dnd";
import DraggablePlayerContainer from "./DraggablePlayerContainer";
import React from "react";

const grid = 8;

const getListStyle = (isDraggingOver, styleProps, droppableHeight) => ({
    background: isDraggingOver ? styleProps.isDraggingOverColor : 'slategrey',
    padding: grid,
    transform: 'none',
    height: `calc(${droppableHeight}% - ${(grid * 2)}px`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
});

export default function DroppablePositionContainer(props) {

    const droppableHeight = (props.itemList.length / props.numOfPlayerRequired) * 100;

    return(
        <Droppable droppableId={props.droppableId} isDropDisabled={props.isDropDisabled}>
            {(provided, snapshot) => (
                <div
                    id={props.droppableId}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver, props.styleProps, droppableHeight)}
                >
                    {props.itemList.map((item, index) => (
                        <DraggablePlayerContainer
                            key={index}
                            item={item}
                            index={index}
                            snapshot={snapshot}
                        />
                    ))}
                    <span style={{display: "none"}}>
                        {provided.placeholder}
                    </span>
                </div>
            )}
        </Droppable>
    )

}
