import React from "react";
import {Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const styles = {
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

class DraggablePlayerCard extends React.Component {

    positionStyle = styles[this.props.position.toLowerCase()];

    render() {
        console.log("Snapshot: ", this.props.snapshot);
        const {classes} = this.props;

        return (
            this.props.player ?
                <Grid container className={classes.playerDetailsContainer}>
                    <Grid item xs={7} className={classes.playerDetails}>
                        <Typography className={classes.playerName}>
                            {
                                this.props.player.firstName
                                + " " + this.props.player.lastName
                            }
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.playerDetails}>
                        <Typography>
                            {this.props.player.primaryPosition}
                            {this.props.player.secondaryPosition ?
                                "/" + this.props.player.secondaryPosition
                                : ""
                            }
                        </Typography>
                    </Grid>
                    <Grid item xs={1} className={classes.playerDetails}>
                        <Typography>
                            {" $" + this.props.price}
                        </Typography>
                    </Grid>
                </Grid>
                : ""
        )
    }

}

export default withStyles(styles)(DraggablePlayerCard);
