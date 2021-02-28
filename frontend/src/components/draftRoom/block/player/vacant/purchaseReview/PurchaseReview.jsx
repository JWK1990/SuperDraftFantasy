import React from "react";
import Grid from "@material-ui/core/Grid";
import PlayerBarSecondary from "../../../../../shared/playerBar/PlayerBarSecondary";
import {playersSelector} from "../../../../../../store/selectors/PlayersSelectors";
import withStyles from "@material-ui/core/styles/withStyles";
import RatingsTable from "./RatingsTable";
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";
import TeamLogo from "../../../../../../images/AustralianFlagLogo.jpg";
import {TableCell} from "@material-ui/core";
import ScoreLogo from "../../../../../../images/APlusSymbol.svg";

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
    }
}

class PurchaseReview extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <Grid container className={classes.rootContainer} spacing={1} direction="row" justify="center" alignItems="center">
                <Grid item xs={10}>
                    <PlayerBarSecondary player={this.props.players[0]}/>
                </Grid>
                <Grid item xs={2}>
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Grid item>
                            <Typography variant="subtitle1" align="center" color="textSecondary">
                                Sold To
                            </Typography>
                            <img className={classes.teamImage} src={TeamLogo} alt="Purchase Review Team Logo."/>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" align="center" color="textSecondary">
                                Sold For
                            </Typography>
                            <Typography variant="h3" align="center" color="textPrimary">
                                <sup className={classes.dollarSymbol}>$</sup>
                                10
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" align="center" color="textSecondary">
                                Rating
                            </Typography>
                            <img className={classes.scoreImage} src={ScoreLogo} alt="Purchase Review Score."/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}

const mapStateToProps = state => {
    return {
        players: playersSelector(state),
    };
};

export default connect(mapStateToProps)(withStyles(styles)(PurchaseReview));
