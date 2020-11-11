import React from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "./CountdownClock.css";
import {Fab} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    primary: {
        boxShadow: "none",
        color: "inherit",
        backgroundColor: "inherit",
        lineHeight: "1",
        textTransform: "none",
        '&:hover': {
            color: "inherit",
            border: "4px solid currentColor",
            background: "-moz-linear-gradient(top, #66ff00 0%, #8cff40 50%, #66ff00 51%, #bcff90 100%)",
        }
    },
    sizeMedium: {
        width: "110px",
        height: "110px",
    },
};

function CountdownClock(props) {
   const {classes} = props;

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className="timer">Too lale...</div>;
        }

        const sendBid = (e) => {
         e.preventDefault();
         props.sendBid();
        }

        return (
            <div>
                <Fab
                    size="medium"
                    color="primary"
                    aria-label="add"
                    className={[classes.sizeMedium, classes.primary].join(" ")}
                    onClick={sendBid}
                >
                    <div className="timer">
                        <div className="text">{props.text}</div>
                        <div className="value">{remainingTime}</div>
                        <div className="text">seconds</div>
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

export default withStyles(styles)(CountdownClock);
