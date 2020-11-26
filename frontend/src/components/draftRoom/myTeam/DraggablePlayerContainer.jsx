import React from "react";
import {Draggable} from "react-beautiful-dnd";
import {Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

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
    },
    playerDetailsContainer: {
        height: "100%",
    },
    playerDetails: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
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
                        {this.props.item.content.player ?
                            <Grid container className={classes.playerDetailsContainer}>
                                <Grid item xs={10} className={classes.playerDetails}>
                                    <Typography>
                                        {
                                            this.props.item.content.player.firstName
                                            + " " + this.props.item.content.player.lastName
                                        }
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} className={classes.playerDetails}>
                                    <Typography>
                                        {" ($" + this.props.item.content.price + ")"}
                                    </Typography>
                                </Grid>
                            </Grid>
                            : ""
                        }
                    </div>
                )}
            </Draggable>
        )
    }

}

export default withStyles(styles)(DraggablePlayerContainer);
