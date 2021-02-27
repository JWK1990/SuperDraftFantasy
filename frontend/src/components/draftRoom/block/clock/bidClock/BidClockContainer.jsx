import React from "react";
import Grid from "@material-ui/core/Grid";
import BidClock from "./BidClock";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const styles = {
    rootContainer: {
        height: "100%",
    },
    upperTextLeading: {
        color: "green",
        fontWeight: 500,
    },
    upperTextTrailing: {
        color: "var(--text-black)",
        fontWeight: 500,
    },
    lowerTextLeading: {
        color: "green",
    },
}

const activeClockColours = [
    ['#004777', 0.33],
    ['#F7B801', 0.33],
    ['#A30000', 0.33],
]

const inactiveClockColors = [
    ['#808080', 1],
]

function BidClockContainer(props) {
    const {classes} = props;

    return(
        <Grid container className={classes.rootContainer} spacing={1} direction="row" justify="space-between" alignItems="stretch">
            <Grid item xs={12}>
                <div>
                    {
                        props.isLeadBidder
                            ?  <p className={classes.upperTextLeading}>You Lead</p>
                            : <p className={classes.upperTextTrailing}>{props.leadBidderTeamName + " Leads"}</p>
                    }
                </div>
            </Grid>
            <Grid item xs={12}>
                <BidClock
                    duration={props.duration}
                    initialRemainingTime={props.initialRemainingTime}
                    key={props.bidClockKey}
                    sendBid={props.sendBid}
                    isDisabled={props.isDisabled}
                    currentPrice={props.currentPrice}
                    tooltipText={props.tooltipText}
                    clockColors={props.isLeadBidder ? inactiveClockColors : activeClockColours}
                    isLeadBidder={props.isLeadBidder}
                />
            </Grid>
            <Grid item xs={12}>
                {
                    props.isLeadBidder
                        ? <p className={classes.lowerTextLeading}>Daumen Drück!</p>
                        : <Button
                            variant="contained"
                            color="primary"
                            onClick={props.sendBid}
                            disabled={props.isDisabled}
                        >
                            Bid ${props.currentPrice + 1}
                        </Button>
                }
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(BidClockContainer);
