import React from "react";
import {Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    rootDiv: {
        height: 238,
    }
}

function VacantBlock(props) {
    const {classes} = props;

    return (
        <div className={classes.rootDiv}>
            <Typography>
                {props.onTheBlockTeamName} is on the block...
            </Typography>
        </div>
    )
}

export default withStyles(styles)(VacantBlock);
