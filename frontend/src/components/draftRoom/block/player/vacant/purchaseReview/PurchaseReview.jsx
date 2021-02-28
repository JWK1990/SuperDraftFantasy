import React from "react";
import Grid from "@material-ui/core/Grid";
import {mockPlayerSelector} from "../../../../../../store/selectors/PlayersSelectors";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";
import PurchaseReviewStats from "./PurchaseReviewStats";
import Box from "@material-ui/core/Box";
import WillDayImage from "../../../../../../images/WillDay.jpeg";
import Typography from "@material-ui/core/Typography";
import CircularStatIcon from "../../../../../shared/circularStatBar/CircularStatIcon";

const styles = {
    rootContainer: {
        height: "100%",
    },
    detailsContainer: {
        height: "100%",
    },
    playerImageGridItem: {
        width: 228,
        height: "100%",
    },
    playerDetailsGridItem: {
        width: 250,
        height: "100%",
    },
    playerImage: {
        width: "228px",
        height: "100%",
    },
    purchaseReviewStatsGridItem: {
        height: "100%",
    }
}

class PurchaseReview extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <Grid container className={classes.rootContainer} spacing={0} direction="row" justify={"flex-start"} alignItems="center">
                <Grid item className={classes.playerImageGridItem}>
                    <img src={WillDayImage} className={classes.playerImage} alt={this.props.statName}/>
                </Grid>
                <Grid item className={classes.playerDetailsGridItem}>
                    <Grid container className={classes.detailsContainer} spacing={0} direction="row" justify="flex-start" alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="h4" color="textPrimary">
                                {this.props.player ? this.props.player.firstName + " " + this.props.player.lastName : null}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {this.props.player.secondaryPosition ?
                                    this.props.player.primaryPosition + "/" + this.props.player.secondaryPosition
                                    : this.props.player.primaryPosition
                                }
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box display={"flex"} flexDirection={"row"}>
                                <CircularStatIcon
                                    statName="SC"
                                    statValue= {this.props.player.average}
                                    maxStatValue= {150}
                                    showHeader={true}
                                />
                                <CircularStatIcon
                                    statName="Rank"
                                    statValue= {this.props.player.average}
                                    maxStatValue= {200}
                                    showHeader={true}
                                />
                                <CircularStatIcon
                                    statName="Games"
                                    statValue= {this.props.player.average}
                                    maxStatValue= {170}
                                    showHeader={true}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.purchaseReviewStatsGridItem}>
                    <PurchaseReviewStats />
                </Grid>
            </Grid>
        )
    }

}

const mapStateToProps = state => {
    return {
        player: mockPlayerSelector(state, 0),
    };
};

export default connect(mapStateToProps)(withStyles(styles)(PurchaseReview));
