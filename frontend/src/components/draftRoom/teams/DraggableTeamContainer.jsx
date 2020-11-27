import React from "react";
import {Draggable} from "react-beautiful-dnd";
import DraggableTeamContent from "./DraggableTeamContent";

const grid = 8;

const getItemStyle = (isDragging, draggableStyle, isVacant, draggableHeight, isOnTheBlock) => ({
    userSelect: "none",
    padding: grid,
    margin: `0 0 ${grid}px 0`,
    background: isDragging ? "lightgreen" : isVacant ? "lightgrey" : "lightblue",
    border: isVacant ? "dotted 1px black" : isOnTheBlock ? "solid 3px green" : "solid 1px lightgrey",
    textAlign: isVacant ? "center" : "left",
    height: "100%",
    ...draggableStyle
});

class DraggableTeamContainer extends React.Component {

    render() {
        return (
            <Draggable
                key={this.props.item.id}
                draggableId={this.props.item.id}
                index={this.props.index}
                isDragDisabled={this.props.isReorderDisabled}
            >
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style,
                            this.props.item.content.isVacant,
                            this.props.draggableHeight,
                            this.props.isOnTheBlock,
                        )}
                    >
                        {
                            this.props.item.content.isVacant ?
                                "VACANT"
                                :
                                <DraggableTeamContent
                                    team={this.props.item.content.team}
                                    numOfPlayersRequired={this.props.numOfPlayersRequired}
                                />
                        }
                    </div>
                )}
            </Draggable>
        );
    }
}

export default DraggableTeamContainer;
