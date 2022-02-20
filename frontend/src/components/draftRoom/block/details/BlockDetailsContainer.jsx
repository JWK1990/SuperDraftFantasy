import React from "react";
import BlockPlayer from "./player/BlockPlayer";
import PausedDraft from "./paused/PausedDraft";
import withStyles from "@material-ui/core/styles/withStyles";
import PurchaseReview from "./purchaseReview/PurchaseReview";

const styles = {
    rootDiv: {
        height: "100%",
    }

};

function BlockDetailsContainer(props) {
    const {classes} = props;

    return(
        <>
            {
                props.showAddToBlockClock
                    ? (
                        <PurchaseReview
                            onTheBlockTeamName={props.onTheBlockTeamName}
                            isOnTheBlock={props.isOnTheBlock}
                            purchaseReviewPlayer={props.purchaseReviewPlayer}
                        />
                    )
                    : props.showBidClock
                        ? (
                            <BlockPlayer
                                player={props.onTheBlockPlayer}
                            />
                        )
                        : (
                            <PausedDraft
                                commissionerTeamName={props.commissionerTeamName}
                            />
                        )
            }
        </>
    )

}

export default withStyles(styles)(BlockDetailsContainer);
