import React, {useState} from "react";
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import withStyles from "@material-ui/core/styles/withStyles";
import {CircularProgress, Tooltip} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = {
    clockGridItem: {
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
   const [isTimerFinished, setIsTimerFinished] = useState(false);



    const renderTime = ({ remainingTime }) => {
        if (remainingTime < 1) {
            setIsTimerFinished(true);
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
        <Grid container className={classes.rootContainer} spacing={1} direction="row" justify="space-between" alignItems="stretch">
            <Grid item xs={12} className={classes.clockGridItem}>
                <CountdownCircleTimer
                    isPlaying
                    duration={props.duration}
                    initialRemainingTime={props.initialRemainingTime}
                    colors={props.clockColors}
                    size={110}
                >
                    {renderTime}
                </CountdownCircleTimer>
            </Grid>
            <Grid item xs={12}>
                {
                    props.isLeadBidder
                        ? (
                            <Tooltip title={<p>{props.tooltipText}</p>} placement="left">
                                            <span>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    disabled={true}
                                                >
                                                    <span style={{color: "green"}}>You Lead!</span>
                                                </Button>
                                            </span>
                            </Tooltip>
                        )
                        : (
                            <Tooltip title={<p>{props.tooltipText}</p>} placement="left">
                                            <span>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={props.sendBid}
                                                    disabled={props.isDisabled || isTimerFinished}
                                                >
                                                    Bid ${props.currentPrice + 1}
                                                </Button>
                                            </span>
                            </Tooltip>
                        )
                }
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(BidClock);
