import React, {useState} from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "./BidClock.css";
import {Fab} from "@material-ui/core";
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

function AddToBlockClock(props) {
    const {classes} = props;

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className="timer">Auto Add</div>;
        }

        return (
            <div>
                <Fab
                    size="medium"
                    color="primary"
                    aria-label="add"
                    className={[classes.sizeMedium, classes.primary].join(" ")}
                    disabled={true}
                >
                    <div className="timer">
                        <div className="bid-text">{remainingTime}</div>
                    </div>
                </Fab>
            </div>

        );
    };

    return (
        <CountdownCircleTimer
            isPlaying
            duration={props.duration}
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

export default withStyles(styles)(AddToBlockClock);
