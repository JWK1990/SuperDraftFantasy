import React from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    rootDiv: {
        height: 238,
        textAlign: "center",
    },
    onTheBlock: {
        backgroundColor: "red",
    }
}));

function VacantBlock(props) {
    const classes = useStyles();

    return (
        <div className={`${classes.rootDiv} ${props.isOnTheBlock ? classes.onTheBlock : ''}`}>
            {props.isOnTheBlock ?
                    <Typography component="h5" variant="h5">
                        YOU ARE ON THE BLOCK!!!! SELECT A PLAYER!!!!
                    </Typography>
                :
                    <Typography>
                        {props.onTheBlockTeamName} is on the block.
                    </Typography>
            }
        </div>
    )
}

export default VacantBlock;
