import React from "react";
import Grid from "@material-ui/core/Grid";
import PlayerBarSecondary from "../../../../../shared/playerBar/PlayerBarSecondary";
import {playersSelector} from "../../../../../../store/selectors/PlayersSelectors";
import withStyles from "@material-ui/core/styles/withStyles";
import RatingsTable from "./RatingsTable";
import {connect} from "react-redux";

const styles = {
    rootContainer: {
        height: "100%",
    }
}

class PurchaseReview extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <Grid container className={classes.rootContainer} spacing={1} direction="row" justify="center" alignItems="center">
                <Grid item xs={8}>
                    <PlayerBarSecondary player={this.props.players[0]}/>
                </Grid>
                <Grid item xs={4}>
                    <RatingsTable />
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
