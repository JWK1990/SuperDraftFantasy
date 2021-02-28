import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TeamLogo from "../../../../../../images/AustralianFlagLogo.jpg";
import ScoreLogo from "../../../../../../images/APlusSymbol.svg";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    rootContainer: {
        height: "100%",
    },
    headerText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    // TODO: Potentially make images 100% width in GlobalStyles.
    scoreImage: {
        width: "50px",
    },
    teamImage: {
        width: "50px",
    },
    borderlessCell: {
        border: 0,
    },
    dollarSymbol: {
        fontSize: 14,
        color: "grey",
    },
}

function PurchaseReviewStats(props) {
    const {classes} = props;

    return (
        <Grid container className={classes.rootContainer} direction="column" justify="center" alignItems="center">
            <Grid item>
                <Typography variant="subtitle2" align="center" color="textSecondary">
                    Sold To:
                </Typography>
                <img className={classes.teamImage} src={TeamLogo} alt="Purchase Review Team Logo."/>
            </Grid>
            <Grid item>
                <Typography variant="subtitle2" align="center" color="textSecondary">
                    Sold For:
                </Typography>
                <Typography variant="h3" align="center" color="textPrimary">
                    <sup className={classes.dollarSymbol}>$</sup>
                    10
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="subtitle2" align="center" color="textSecondary">
                    Rating:
                </Typography>
                <img className={classes.scoreImage} src={ScoreLogo} alt="Purchase Review Score."/>
            </Grid>
        </Grid>
    )

}

export default withStyles(styles)(PurchaseReviewStats)
