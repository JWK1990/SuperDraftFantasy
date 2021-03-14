import React from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import {Paper} from "@material-ui/core";
import PurchaseReviewRatingCard from "./PurchaseReviewRatingCard";
import PurchaseReviewPlayerCard from "./PurchaseReviewPlayerCard";
import PurchaseReviewStatsCard from "./PurchaseReviewStatsCard";
import PerformanceReviewSymbol from "../../../../../images/PerformanceReviewSymbol.jpg";

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
            <Paper elevation={2} className={classes.paperRoot}>
                <Grid container className={classes.rootContainer} spacing={0} direction="row" justify="flex-start" alignItems="center">
                    <Grid item xs={2} zeroMinWidth className={classes.blackBg}>
                        <div>
                            <Typography variant={"subtitle1"} color={"textPrimary"} className={classes.purchaseReviewText}>Purchase Review...</Typography>
                        </div>
                        <div className={classes.purchaseReviewImageDiv}>
                            <img src={PerformanceReviewSymbol} className={classes.purchaseReviewImage} alt={"Purchase Review."}/>
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <PurchaseReviewPlayerCard
                            player={this.props.purchaseReviewPlayer}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <PurchaseReviewStatsCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PurchaseReviewRatingCard
                            purchaseReviewRating={this.props.purchaseReviewPlayer.purchaseReviewRating}
                        />
                    </Grid>
                </Grid>
            </Paper>
        )
    }

}

export default withStyles(styles)(PurchaseReview);
