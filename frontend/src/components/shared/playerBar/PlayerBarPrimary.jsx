import React from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";
import Box from "@material-ui/core/Box";
import WillDayImage from "../../../images/WillDay.jpeg";
import Typography from "@material-ui/core/Typography";
import {Paper} from "@material-ui/core";
import {mockPlayerSelector} from "../../../store/selectors/PlayersSelectors";
import CircularStatBar from "../circularStatBar/CircularStatBar";
import PlayerGraphContainer from "../../draftRoom/block/details/player/PlayerGraphContainer";

const styles = {
    rootPaper: {
        height: "100%",
    },
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
    playerGraphContainer: {
        height: "100%",
    },
}

class PlayerBarPrimary extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <Paper elevation={3} className={classes.rootPaper}>
                <Grid container className={classes.rootContainer} spacing={0} direction="row" justify="flex-start" alignItems="center">
                    <Grid item className={classes.playerImageGridItem}>
                        <img src={WillDayImage} className={classes.playerImage} alt={this.props.statName}/>
                    </Grid>
                    <Grid item xs className={classes.playerDetailsGridItem}>
                        <Grid container className={classes.detailsContainer} spacing={0} direction="row" justify="flex-start" alignItems="center">
                            <Grid item xs={12}>
                                <Typography variant="h3" color="textPrimary">
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
                                    <CircularStatBar player={this.props.player}/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <PlayerGraphContainer />
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

export default connect(mapStateToProps)(withStyles(styles)(PlayerBarPrimary));
