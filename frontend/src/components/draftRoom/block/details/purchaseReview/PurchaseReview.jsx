import React from "react";
import Grid from "@material-ui/core/Grid";
import {mockPlayerSelector} from "../../../../../store/selectors/PlayersSelectors";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";
import {Paper} from "@material-ui/core";
import PurchaseReviewRatingCard from "./PurchaseReviewRatingCard";
import PurchaseReviewPlayerCard from "./PurchaseReviewPlayerCard";
import PurchaseReviewStatsCard from "./PurchaseReviewStatsCard";

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
}

class PurchaseReview extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <Paper elevation={2} className={classes.paperRoot}>
                <Grid container className={classes.rootContainer} spacing={0} direction="row" justify="flex-start" alignItems="center">
                    <Grid item xs={2} zeroMinWidth>
                        <Typography style={{overflowWrap: 'break-word'}} align={"center"}>
                            Purchase
                        </Typography>
                        <Typography style={{overflowWrap: 'break-word'}} align={"center"}>
                            Review
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <PurchaseReviewPlayerCard player={this.props.player}/>
                    </Grid>
                    <Grid item xs={2}>
                        <PurchaseReviewStatsCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PurchaseReviewRatingCard />
                    </Grid>
                </Grid>
            </Paper>
        )
    }

}

const mapStateToProps = state => {
    return {
        player: mockPlayerSelector(state, 0),
    };
};

export default connect(mapStateToProps)(withStyles(styles)(PurchaseReview));
