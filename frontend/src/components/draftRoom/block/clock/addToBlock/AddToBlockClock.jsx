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
    secondsSymbol: {
        fontSize: 16,
        verticalAlign: "alphabetic",
    },
}

function AddToBlockClock(props) {
    const {classes} = props;

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return (
                <div>
                    <CircularProgress />
                </div>
            )
        }
        return (
            <div>
                <p>{remainingTime}<span className={classes.secondsSymbol}>s</span></p>
            </div>
        );
    };

    return (
        <div className={classes.rootDiv}>
            <CountdownCircleTimer
                isPlaying
                duration={props.duration}
                colors={props.clockColors}
                size={110}
            >
                {renderTime}
            </CountdownCircleTimer>
        </div>
    )
}

export default withStyles(styles)(AddToBlockClock);
