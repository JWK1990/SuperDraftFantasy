import {Droppable} from "react-beautiful-dnd";
import React from "react";
import DraggableFieldPlayerContainer from "./DraggableFieldPlayerContainer";

const grid = 4;

const getListStyle = (isDraggingOver, styleProps, droppableHeight, isDropDisabled) => ({
    background: isDraggingOver ? styleProps.isDraggingOverColor : 'rgba(0, 0, 0, 0)',
    padding: grid,
    transform: 'none',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    opacity: isDropDisabled ? "0.15" : "1",
    width: "100%",
    height: `calc(${droppableHeight}% - ${(grid * 2)}px`,
    flexWrap: "wrap",
});

export default function DroppableFieldPositionContainer(props) {

    const droppableHeight = (props.itemList.length / props.numOfPlayerRequired) * 100;

    return(
        <Droppable droppableId={props.droppableId} isDropDisabled={props.isDropDisabled}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    style={getListStyle(
                        snapshot.isDraggingOver,
                        props.styleProps,
                        droppableHeight,
                        (props.isDragging && props.isDropDisabled)
                    )}
                >
                    {props.itemList.map((item, index) => (
                        <DraggableFieldPlayerContainer
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
