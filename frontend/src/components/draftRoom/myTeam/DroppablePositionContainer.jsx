import {Droppable} from "react-beautiful-dnd";
import DraggablePlayerContainer from "./DraggablePlayerContainer";
import React from "react";

const grid = 8;

const getListStyle = (isDraggingOver, styleProps, droppableHeight, isDropDisabled) => ({
    background: isDraggingOver ? styleProps.isDraggingOverColor : 'white',
    padding: grid,
    transform: 'none',
    height: `calc(${droppableHeight}% - ${(grid * 2)}px`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    opacity: isDropDisabled ? "0.15" : "1"
});

export default function DroppablePositionContainer(props) {

    const droppableHeight = (props.itemList.length / props.numOfPlayerRequired) * 100;

    return(
        <Droppable droppableId={props.droppableId} isDropDisabled={props.isDropDisabled}>
            {(provided, snapshot) => (
                <div
                    id={props.droppableId}
                    ref={provided.innerRef}
                    style={getListStyle(
                        snapshot.isDraggingOver,
                        props.styleProps,
                        droppableHeight,
                        (props.isDragging && props.isDropDisabled)
                    )}
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
