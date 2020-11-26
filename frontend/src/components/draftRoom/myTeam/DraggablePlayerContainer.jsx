import React from "react";
import {Draggable} from "react-beautiful-dnd";
import withStyles from "@material-ui/core/styles/withStyles";

const grid = 8;

const styles = {
    root: {
        userSelect: 'none',
        position: 'static',
        padding: grid,
        margin: `0 0 ${grid}px 0`,
        border: "3px solid",
        height: "100%",
        minHeight: 20,
    },
    def: {
        borderColor: "red",
        backgroundColor: "lightsalmon"
    },
    mid: {
        borderColor: "blue",
        backgroundColor: "lightblue"
    },
    ruc: {
        borderColor: "yellow",
        backgroundColor: "lightyellow"
    },
    fwd: {
        borderColor: "green",
        backgroundColor: "lightgreen"
    },
    bench: {
        borderColor: "black",
        backgroundColor: "lightgrey"
    },
    vacant: {
        backgroundColor: "lightslategrey !important",
    }
}

class DraggablePlayerContainer extends React.Component {

    positionStyle = styles[this.props.item.content.position.toLowerCase()];

    render() {
        const {classes} = this.props;

        return (
            <Draggable
                key={this.props.item.id}
                draggableId={this.props.item.id}
                index={this.props.index}
                isDragDisabled={this.props.item.content.vacant}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            ...snapshot.isDragging ?
                                {...provided.draggableProps.style, backgroundColor: "white"} : null,
                        }}
                        className={
                            `${classes.root}
                             ${classes[this.props.item.content.position.toLowerCase()]}
                             ${this.props.item.content.vacant ? classes.vacant : null}`
                        }
                    >
                        {this.props.item.content.player
                            ? this.props.item.content.player.firstName
                            + " " + this.props.item.content.player.lastName
                            + " ($" + this.props.item.content.price + ")"
                            : ""}
                    </div>
                )}
            </Draggable>
        )
    }

}

export default withStyles(styles)(DraggablePlayerContainer);
