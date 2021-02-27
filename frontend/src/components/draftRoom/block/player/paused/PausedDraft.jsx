import React from "react";
import {Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    rootDiv: {
        height: "100%",
    }
}

function VacantBlock(props) {
    const {classes} = props;

    return (
        <div className={classes.rootDiv}>
            <Typography>
                {props.commissionerTeamName} has paused the Draft. Wait for them to restart.
            </Typography>
        </div>
    )
}

export default withStyles(styles)(VacantBlock);
