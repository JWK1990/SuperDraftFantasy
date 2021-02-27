import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ActiveOnTheBlock from "./ActiveOnTheBlock";
import InactiveOnTheBlock from "./InactiveOnTheBlock";

const useStyles = makeStyles(theme => ({
    rootDiv: {
        height: "100%",
    },
    onTheBlock: {
        backgroundColor: "red",
    }
}));

function VacantBlock(props) {
    const classes = useStyles();

    return (
        <div className={classes.rootDiv}>
            {props.isOnTheBlock ?
                <ActiveOnTheBlock />
                : <InactiveOnTheBlock />
            }
        </div>
    )
}

export default VacantBlock;
