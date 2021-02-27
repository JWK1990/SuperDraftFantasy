import React from "react";
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    secondsText: {
        fontSize: 16,
        verticalAlign: "alphabetic",
    },
    rootDiv: {
        display: "grid",
        justifyContent: "center",
    }
}

function Clock(props) {
    const {classes} = props;

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return (
                <div>
                    <p>Auto Add</p>
                </div>
            )
        }
        return (
            <div>
                <p>{remainingTime}<span className={classes.secondsText}>s</span></p>
            </div>
        );
    };

    return (
        <div className={classes.rootDiv}>
            <CountdownCircleTimer
                isPlaying
                duration={props.duration}
                colors={props.clockColors}
                size={100}
            >
                {renderTime}
            </CountdownCircleTimer>
        </div>
    )
}

export default withStyles(styles)(Clock);
