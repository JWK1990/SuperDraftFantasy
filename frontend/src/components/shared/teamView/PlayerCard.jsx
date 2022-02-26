import React from "react";
import {createMuiTheme, MuiThemeProvider, Paper, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
    overrides: {
        MuiButtonBase: {
            root: {
                //cursor: "url(Insert url to 32px x 32px icon here.), auto"
            },
        },
    },
    typography: {
        button: {
            textTransform: "none",
        }
    }
})

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
    },
    gridItem: {
        padding: 2,
        // Required to stop text opacity changing when button is disabled.
        "& .Mui-disabled": {
            color: "black"
        }
    },
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
                <Grid item xs={12} className={classes.gridItem}>
                    <Paper elevation={3}
                           className={[
                               classes.paperRoot,
                               getPositionClass(),
                               this.props.isGreyedOut ? classes.greyedOut : '',
                           ].join(' ')}
                    >
                        <Button
                            onClick={() => this.props.handleSlotClick(this.props.slot)}
                            disabled={!this.props.shouldShowButton}
                            style={{width: "100%", height: "100%", padding: "0px"}}
                            className={classes.button}
                        >
                            &nbsp;
                        </Button>
                    </Paper>
                </Grid>
            )
        }
        return (
            <MuiThemeProvider theme={theme}>
                <Grid item xs={12} className={classes.gridItem}>
                    <Paper elevation={3}
                           className={[
                               classes.paperRoot,
                               getPositionClass(),
                               this.props.isSelected ? classes.selected : '',
                               this.props.isGreyedOut ? classes.greyedOut : '',
                           ].join(' ')}
                    >
                        <Button
                            onClick={() => this.props.handleSlotClick(this.props.slot)}
                            disabled={!this.props.shouldShowButton}
                            style={{width: "100%", height: "100%", padding: "0px"}}
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
                        </Button>

                    </Paper>
                </Grid>
            </MuiThemeProvider>
        )
    }

}

export default withStyles(styles)(PlayerCard);
