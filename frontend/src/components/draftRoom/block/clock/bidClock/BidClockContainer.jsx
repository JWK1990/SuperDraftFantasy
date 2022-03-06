import React from "react";
import BidClock from "./BidClock";
import withStyles from "@material-ui/core/styles/withStyles";

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
    )
}

export default withStyles(styles)(BidClockContainer);
