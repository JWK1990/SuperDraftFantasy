import React from "react";
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import withStyles from "@material-ui/core/styles/withStyles";
import {CircularProgress} from "@material-ui/core";

const styles = {
    rootDiv: {
        display: "grid",
        justifyContent: "center",
        height: "100%",
    },
    trailingBidText: {
        fontSize: 38,
        color: "grey"
    },
    leadingBidText: {
        fontSize: 38,
        color: "green",
    },
    dollarSymbol: {
        fontSize: 22,
    },
    secondsSymbol: {
        fontSize: 10,
        verticalAlign: "alphabetic",
    },
    winningBidText: {
        fontSize: 14,
        color: "green",
    },
    losingBidText: {
        fontSize: 14,
        color: "grey",
    }
};

function BidClock(props) {

   const {classes} = props;

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return (
                props.isLeadBidder
                    ? <CircularProgress style={{color: "green"}}/>
                    : <CircularProgress color={"primary"}/>
            )
        }

        return (
            <div>
                <div className={props.isLeadBidder ? classes.leadingBidText : classes.trailingBidText}>
                    <sup className={classes.dollarSymbol}>$</sup>
                    {props.currentPrice}
                </div>
                <div className="value">{remainingTime}<span className={classes.secondsSymbol}>s</span></div>
            </div>
        );
    };

    return (
        <div className={classes.rootDiv}>
            <CountdownCircleTimer
                isPlaying
                duration={props.duration}
                initialRemainingTime={props.initialRemainingTime}
                colors={props.clockColors}
                size={110}
            >
                {renderTime}
            </CountdownCircleTimer>
        </div>
    )
}

export default withStyles(styles)(BidClock);
