import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ActiveOnTheBlock from "./ActiveOnTheBlock";
import PurchaseReview from "./purchaseReview/PurchaseReview";

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
                : <PurchaseReview />
            }
        </div>
    )
}

export default VacantBlock;
