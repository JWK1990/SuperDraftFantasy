import React from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import {Paper} from "@material-ui/core";
import PurchaseReviewRatingCard from "./PurchaseReviewRatingCard";
import PurchaseReviewPlayerCard from "./PurchaseReviewPlayerCard";
import PurchaseReviewStatsCard from "./PurchaseReviewStatsCard";
import PerformanceReviewSymbol from "../../../../../images/PerformanceReviewSymbol.jpg";
import BlockPlayerCard from "../player/playerCard/BlockPlayerCard";

const styles = {
    paperRoot: {
        height: "100%",
        paddingTop: 10,
        paddingRight: 10,
    },
    rootContainer: {
        height: "100%",
    },
    detailsContainer: {
        height: "100%",
    },
    playerImage: {
        width: "228px",
        height: "100%",
    },
    purchaseReviewText: {
        textAlign: "center",
    },
    purchaseReviewImageDiv: {
        display: 'flex',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: -20,
    },
    purchaseReviewImage: {
        width: 160,
    },
}

class PurchaseReview extends React.Component {

    render() {
        const {classes} = this.props;

        if(!this.props.purchaseReviewPlayer) {
            return <div />
        }

        return (
            <Grid container className={classes.rootContainer} spacing={0}
                  justify="flex-start" alignItems="center"
            >
                <Grid item xs={6}>
                    <BlockPlayerCard
                        player={this.props.purchaseReviewPlayer}
                        isPurchaseReview={true}
                    />
                </Grid>
                <Grid item xs={6}>
                    <PurchaseReviewRatingCard
                        player={this.props.purchaseReviewPlayer}
                    />
                </Grid>
            </Grid>
        )
    }

}

export default withStyles(styles)(PurchaseReview);
