import React from "react";
import {Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    pausedBlockRootDiv: {
        height: "100%",
        display: "grid",
        alignItems: "center",
    },
}

function PausedBlock(props) {
    const {classes} = props;

    return (
        <div className={classes.pausedBlockRootDiv}>
            <Typography variant="h5" align="center" color="textPrimary">
                {props.commissionerTeamName} have paused the Draft.
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">
                Waiting for them to restart....
            </Typography>
        </div>
    )
}

export default withStyles(styles)(PausedBlock);
