import React from "react";
import {Paper, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const styles = {
    paperRoot: {
        // Ensures that the player card expands to take up the remaining space.
        height: "100%",
    },
    gridContainer: {
        height: "100%",
    },
    defContainer: {
        backgroundColor: "red",
    },
    midContainer: {
        backgroundColor: "blue",
    },
    rucContainer: {
        backgroundColor: "green",
    },
    fwdContainer: {
        backgroundColor: "yellow",
    },
    benchContainer: {
        backgroundColor: "grey",
    },
    playerNameContainer: {
        display: "grid",
        alignItems: "center",
        justifyContent: "left",
    },
    playerName: {
        fontWeight: "bold",
        fontSize: "1vw",
        paddingLeft: "10px",
    },
    playerDetailsContainer: {
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
    },
    playerPosition: {
        fontSize: "1vw",
    },
    playerPrice: {
        fontSize: "1vw",
    },
    selected: {
        backgroundColor: "pink",
    },
    greyedOut: {
        backgroundColor: "lightgrey",
        opacity: 0.25,
    }
}

class PlayerCard extends React.Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true; // nextProps.player !== this.props.player;
    }

    render() {
        const {classes} = this.props;

        const getPositionClass = () => {
            switch(this.props.slot.slotPosition) {
                case "DEF":
                    return classes.defContainer;
                case "MID":
                    return classes.midContainer;
                case "RUC":
                    return classes.rucContainer;
                case "FWD":
                    return classes.fwdContainer;
                default:
                    return classes.benchContainer;
            }
        }

        if(!this.props.player) {
            return (
                <Paper elevation={3}
                       className={[
                           classes.paperRoot,
                           getPositionClass(),
                           this.props.isGreyedOut ? classes.greyedOut : '',
                       ]}
                >
                    &nbsp;
                </Paper>
            )
        }
        return (
            <Paper elevation={3}
                   className={[
                       classes.paperRoot,
                       getPositionClass(),
                       this.props.isSelected ? classes.selected : '',
                       this.props.isGreyedOut ? classes.greyedOut : '',
                   ]}
            >
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={7} className={classes.playerNameContainer}>
                        <Typography className={classes.playerName}>
                            {this.props.player.firstName.substring(0, 1) + ". " + this.props.player.lastName}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.playerDetailsContainer}>
                        <Typography className={classes.playerPosition}>
                            {this.props.player.primaryPosition.substring(0,1)}
                            {
                                this.props.player.secondaryPosition !== null
                                ? "-" + this.props.player.secondaryPosition.substring(0,1)
                                : ""
                            }
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.playerDetailsContainer}>
                        <Typography className={classes.playerPrice}>
                            {"$" + this.props.price}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        )
    }

}

export default withStyles(styles)(PlayerCard);
