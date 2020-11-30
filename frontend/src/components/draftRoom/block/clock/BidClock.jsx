import React, {useState} from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "./Clock.css";
import {Fab, Tooltip} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    primary: {
        boxShadow: "none",
        color: "inherit",
        backgroundColor: "inherit",
        lineHeight: "1.25",
        textTransform: "none",
        '&:hover': {
            color: "inherit",
            border: "4px solid currentColor",
            background: "-moz-linear-gradient(top, #66ff00 0%, #8cff40 50%, #66ff00 51%, #bcff90 100%)",
        },
        '&:disabled': {
            color: "inherit",
        },
    },
    sizeMedium: {
        width: "110px",
        height: "110px",
    },
};

function BidClock(props) {

   const {classes} = props;

    const [text, setText] = useState({
        upperText: props.isDisabled ? (props.tooltipText === "You are the lead bidder." ? "You Lead" : "Bid Disabled") : "Click To Bid",
        bidText: props.currentPrice,
    });

    const handleMouseEnter = (e) => {
        e.preventDefault();
        setText({
            upperText: "Place Bid:",
            bidText: props.currentPrice + 1,
        });
    }

    const handleMouseLeave = (e) => {
        e.preventDefault();
        setText({
            upperText: "Current Bid:",
            bidText: props.currentPrice,
        });
    }

    const sendBid = (e) => {
        e.preventDefault();
        props.sendBid();
    }

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className="timer">Sold for ${props.currentPrice}</div>;
        }

        return (
            <Tooltip title={<h1 style={{color: "lightblue"}}>{props.tooltipText}</h1>} placement="top">
                <div>
                        <Fab
                            size="medium"
                            color="primary"
                            aria-label="add"
                            className={[classes.sizeMedium, classes.primary].join(" ")}
                            onClick={sendBid}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            disabled={props.isDisabled}
                        >
                            <div className="timer">
                                <div className="upper-text">{text.upperText}</div>
                                <div className="bid-text"><span className={"dollar-symbol"}>$</span>{text.bidText}</div>
                                <div className="value">{remainingTime}<span className={"seconds-symbol-sm"}>s</span></div>
                            </div>
                        </Fab>
                </div>
            </Tooltip>
        );
    };

    return (
        <CountdownCircleTimer
            isPlaying
            duration={props.duration}
            initialRemainingTime={props.initialRemainingTime}
            colors={[
                ['#004777', 0.33],
                ['#F7B801', 0.33],
                ['#A30000', 0.33],
            ]}
            size="130"
        >
            {renderTime}
        </CountdownCircleTimer>
    )
}

export default withStyles(styles)(BidClock);
