import React from "react";
import AddToBlockClock from "./AddToBlockClock";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    rootContainer: {
      height: "100%",
    },
    upperText: {
        color: "var(--text-black)",
        fontWeight: 500,
    },
    lowerText: {
        color: "grey",
    },
}

const clockColours = [
    ['#004777', 0.33],
    ['#F7B801', 0.33],
    ['#A30000', 0.33],
]

function ActiveAddToBlock(props) {
    const {classes} = props;

    return (
        <Grid container className={classes.rootContainer} spacing={1} direction="row"
              justify="space-between" alignItems="center">
            <Grid item xs={12}>
                <AddToBlockClock
                    duration={props.duration}
                    initialRemainingTime={props.initialRemainingTime}
                    key={props.addToBlockKey}
                    clockColors={clockColours}
                />
            </Grid>
        </Grid>
    )

}

export default withStyles(styles)(ActiveAddToBlock);
