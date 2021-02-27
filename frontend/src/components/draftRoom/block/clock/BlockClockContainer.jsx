import BidClock from "./BidClock";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import AddToBlockClockContainer from "./addToBlock/AddToBlockClockContainer";

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
    const {classes} = props;

    return (
        <div className={classes.rootDiv}>
            {props.showAddToBlockClock
                ? (
                    <AddToBlockClockContainer
                        activeOnTheBlock={props.isOnTheBlock}
                        duration={props.onTheBlockTimer}
                        initialRemainingTime={props.addToBlockClockTimeRemaining}
                        addToBlockKey={props.addToBlockClockKey}
                        onTheBlockTeamName={props.onTheBlockTeamName}
                    />
                )
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
