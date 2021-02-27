import AddToBlockClock from "./AddToBlockClock";
import BidClock from "./BidClock";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    rootDiv: {
        height: "100%",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
})

function BlockClockContainer(props) {
    console.log("Block Clock Props: ", props);
    const {classes} = props;

    return (
        <div className={classes.rootDiv}>
            {props.showAddToBlockClock ?
                <AddToBlockClock
                    duration={props.onTheBlockTimer}
                    initialRemainingTime={props.addToBlockClockTimeRemaining}
                    key={props.addToBlockClockKey}
                />
                : props.showBidClock ?
                    <BidClock
                        duration={props.bidTimer}
                        initialRemainingTime={props.bidClockTimeRemaining}
                        key={props.bidClockKey}
                        sendBid={props.sendBid}
                        isDisabled={props.isBidClockDisabled}
                        currentPrice={props.currentPrice}
                        tooltipText={props.bidClockText}
                    />
                    : null
            }
        </div>
    )

}

export default withStyles(styles)(BlockClockContainer);
