import React from "react";
import {Draggable} from "react-beautiful-dnd";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";
import {isLeadBidderSelector} from "../../../../store/selectors/BlockSelectors";
import DraggableFieldPlayerCard from "./DraggableFieldPlayerCard";

const grid = 4;

const styles = {
    root: {
        userSelect: 'none',
        position: 'static',
        padding: grid,
        margin: `0 0 ${grid}px 0`,
        border: "3px solid",
        height: "40%",
        //minHeight: 20,
    },
    def: {
        borderColor: "red",
        backgroundColor: "lightsalmon",
        width: "30%", // Max 3 per row
    },
    mid: {
        borderColor: "blue",
        backgroundColor: "lightblue",
        width: "22%", // Max 4 per row
    },
    ruc: {
        borderColor: "yellow",
        backgroundColor: "lightyellow",
        width: "22%", // Max 4 per row
    },
    fwd: {
        borderColor: "green",
        backgroundColor: "lightgreen",
        width: "30%", // Max 3 per row
    },
    bench: {
        borderColor: "black",
        backgroundColor: "lightgrey",
        width: "22%", // Max 4 per row
    },
    vacant: {
        backgroundColor: "lightslategrey !important",
    },
    playerDetailsContainer: {
        height: "100%",
    },
    playerDetails: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    playerName: {
        fontWeight: "bold",
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
                isDragDisabled={this.props.item.content.vacant || this.props.isLeadBidder}>
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
                        <DraggableFieldPlayerCard
                            player={this.props.item.content.player}
                            price={this.props.item.content.price}
                            position={this.props.item.content.position}
                        />
                    </div>
                )}
            </Draggable>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isLeadBidder: isLeadBidderSelector(state),
    }
}

export default connect(mapStateToProps)(withStyles(styles)(DraggablePlayerContainer));
