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

class PlayerCard extends React.Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.player !== this.props.player;
    }

    render() {
        const {classes} = this.props;

        return (
            this.props.player ?
                    <Grid container className={classes.playerDetailsContainer}>
                        <Grid item xs={7} className={classes.playerDetails}>
                            <Typography className={classes.playerName}>
                                {
                                    this.props.player.firstName.substring(0, 1)
                                    + ". " + this.props.player.lastName
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

export default withStyles(styles)(PlayerCard);
