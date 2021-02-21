import {Droppable} from "react-beautiful-dnd";
import DraggablePlayerContainer from "./DraggablePlayerContainer";
import React from "react";

export default function DroppablePositionContainer(props) {

    const droppableHeight = (props.itemList.length / props.numOfPlayerRequired) * 100;

    return(
        <Droppable droppableId={props.droppableId} isDropDisabled={props.isDropDisabled}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    style={
                        props.getDynamicDroppableStyle(
                            snapshot.isDraggingOver,
                            props.styleProps,
                            droppableHeight,
                            (props.isDragging && props.isDropDisabled)
                        )
                    }
                >
                    {props.itemList.map((item, index) => (
                        <DraggablePlayerContainer
                            key={index}
                            item={item}
                            index={index}
                            snapshot={snapshot}
                            baseStyles={props.draggableStyles.root}
                            positionStyles={props.draggableStyles[item.position.toString().toLowerCase()]}
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
