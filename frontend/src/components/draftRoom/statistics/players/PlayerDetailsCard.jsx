import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {IconButton} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import Typography from "@material-ui/core/Typography";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import BlockPlayerCard from "../../block/details/player/playerCard/BlockPlayerCard";
import PlayerDetailsYearStats from "../../block/details/player/playerCard/stats/PlayerDetailsYearStats";
import SeasonSummaryGraph from "../../block/details/player/playerAnalysis/graphs/SeasonSummaryGraph";
import CareerSummaryGraph from "../../block/details/player/playerAnalysis/CareerSummaryGraph";

const styles = {
    container: {
        height: "var(--player-details-popper-height)",
        maxWidth: "1000px",
    },
    playerImage: {
        width: 188,
    },
    root: {
        display: 'flex',
    },
    hidden: {
        opacity: 0.01,
    }
}

class PlayerDetailsCard extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.triggerPopperUpdate();
        }, 250)
    }

    render() {
        const {classes} = this.props;

        if(this.props.player === null) {
            return null;
        }

        return (
            <Grid container component={Paper} elevation={5} className={[classes.container, this.props.areDetailsHidden ? classes.hidden : ''].join(' ')}>
                {/* Row 1. */}
                <Grid item xs={12}>
                    <IconButton onClick={this.props.triggerIconClosePlayerDetails}
                                style={{position: "absolute", right: 0, top: 0}}
                    >
                        <CancelIcon />
                    </IconButton>
                </Grid>
                {/* Row 2. */}
                <Grid item xs={7}>
                    <BlockPlayerCard
                        player={this.props.player}
                        statsComponent={<PlayerDetailsYearStats player={this.props.player}/>}
                    />
                </Grid>
                <Grid item xs={5}>
                    <SeasonSummaryGraph
                        playerId={this.props.player.id}
                        primaryPosition={this.props.player.primaryPosition}
                        dataKey={"average"}
                        title={"SC Scores 2021"}
                    />
                </Grid>
                {/* Row 3. */}
                <Grid item xs={7}>
                    <Typography>Add Stats Here.</Typography>
                </Grid>
                <Grid item xs={5}>
                    <CareerSummaryGraph
                        playerId={this.props.player.id}
                        primaryPosition={this.props.player.primaryPosition}
                        dataKey={"average"}
                        title={"SC Average - Career"}
                        ticks={[50, 100, 150]}
                    />
                </Grid>
                {/* Row 4. */}
                <Grid item xs={7}>
                    <Typography>Add More Stats Here.</Typography>
                </Grid>
                <Grid item xs={5}>
                    <CareerSummaryGraph
                        playerId={this.props.player.id}
                        primaryPosition={this.props.player.primaryPosition}
                        dataKey={"price"}
                        title={"$ - Career"}
                        ticks={[0, 20, 40, 60]}
                    />
                </Grid>
            </Grid>
        )

    }

}

export default withStyles(styles)(PlayerDetailsCard);
