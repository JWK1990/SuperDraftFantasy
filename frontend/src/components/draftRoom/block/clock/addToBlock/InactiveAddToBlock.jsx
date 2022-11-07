import React from "react";
import AddToBlockClock from "./AddToBlockClock";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    rootContainer: {
        height: "100%"
    },
    upperText: {
        color: "var(--text-black)",
    }
}

const clockColors = [
    ['#808080', 1],
]

function InactiveAddToBlock(props) {
    const {classes} = props;

    return (
        <Grid container className={classes.rootContainer} spacing={1} direction="row"
              justify="space-between" alignItems="center"
        >
            <Grid item xs={12}>
                <AddToBlockClock
                    duration={props.duration}
                    initialRemainingTime={props.initialRemainingTime}
                    key={props.addToBlockKey}
                    clockColors={clockColors}
                />
            </Grid>
        </Grid>
    )

}

export default withStyles(styles)(InactiveAddToBlock);
