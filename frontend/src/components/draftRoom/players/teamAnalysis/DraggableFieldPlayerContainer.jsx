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
        marginLeft: "1%",
        //minHeight: 20,
    },
    def: {
        borderColor: "red",
        backgroundColor: "lightsalmon",
        width: "calc(27.5% - 5px)",
        height: "calc(40% - 5px)", // 40% because it's 2 rows.
    },
    mid: {
        borderColor: "blue",
        backgroundColor: "lightblue",
        width: "calc(22% - 5px)",
        height: "calc(40% - 5px)", // 40% because it's 2 rows.
    },
    ruc: {
        borderColor: "yellow",
        backgroundColor: "lightyellow",
        width: "calc(22% - 5px)",
        height: "calc(80% - 5px)", // 80% because it's 1 row.
    },
    fwd: {
        borderColor: "green",
        backgroundColor: "lightgreen",
        width: "calc(27.5% - 5px)",
        height: "calc(40% - 5px)", // 40% because it's 2 rows.
    },
    bench: {
        borderColor: "black",
        backgroundColor: "lightgrey",
        width: "calc(22% - 5px)",
        height: "calc(80% - 5px)", // 80% because it's 1 row.
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

    positionStyle = styles[this.props.item.position.toLowerCase()];

    render() {
        const {classes} = this.props;

        return (
            <Draggable
                key={this.props.item.id}
                draggableId={this.props.item.id}
                index={this.props.index}
                isDragDisabled={true}
            >
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
                             ${classes[this.props.item.position.toLowerCase()]}
                             ${this.props.item.dynamicSlotData.vacant ? classes.vacant : null}`
                        }
                    >
                        <DraggableFieldPlayerCard
                            player={this.props.item.dynamicSlotData.player}
                            price={this.props.item.dynamicSlotData.price}
                            position={this.props.item.position}
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
