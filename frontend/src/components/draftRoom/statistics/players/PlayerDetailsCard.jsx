import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {FormControl, IconButton, InputLabel, MenuItem, Select} from "@material-ui/core";
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
    },
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

        console.log(this.props.player);
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
                    <Grid container alignItems={"stretch"} justify={"center"} style={{height: "100%"}}>
                        <Grid item xs={6}>
                            <div style={{height:"50%"}}>
                                <Typography align={"center"} color={"primary"} variant={"subtitle2"}>
                                    Ave - Career
                                </Typography>
                                <Typography align={"center"} variant={"h4"}>
                                    {this.props.player.careerAverage != null ? this.props.player.careerAverage : "-"}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6} style={{height:"50%"}}>
                            <div style={{height:"50%"}} className={classes.centeredDiv}>
                                <div style={{height:"50%"}}>
                                    <Typography align={"center"} color={"primary"} variant={"subtitle2"}>
                                        Games - Career
                                    </Typography>
                                    <Typography align={"center"} variant={"h4"}>
                                        {this.props.player.careerAverageGames != null ? this.props.player.careerAverageGames : "-"}
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} style={{height:"50%"}}>
                            <div style={{height:"50%"}} className={classes.centeredDiv}>
                                <div style={{height:"50%"}}>
                                    <Typography align={"center"} color={"primary"} variant={"subtitle2"}>
                                        Price Career
                                    </Typography>
                                    <Typography align={"center"} variant={"h4"}>
                                        {this.props.player.careerPrice != null ? "$" + this.props.player.careerPrice : "-"}
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} style={{height:"50%"}}>
                            <div style={{height:"50%"}} className={classes.centeredDiv}>
                                <div style={{height:"50%"}}>
                                    <Typography align={"center"} color={"primary"} variant={"subtitle2"}>
                                        $ Over/Under - Career
                                    </Typography>
                                    <Typography align={"center"} variant={"h4"}>
                                        {
                                            this.props.player.careerPriceOverUnder != null
                                                ? this.props.player.careerPriceOverUnder > 0
                                                    ? <span style={{color: "red"}}>${this.props.player.careerPriceOverUnder}</span>
                                                    : this.props.player.careerPriceOverUnder < 0
                                                        ? <span style={{color: "green"}}>-${this.props.player.careerPriceOverUnder * -1}</span>
                                                        : <span style={{color: "black"}}>-${this.props.player.careerPriceOverUnder}</span>
                                            : "-"
                                        }
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Row 3. */}
                <Grid item xs={6} style={{maxHeight: "300px"}}>
                    <SeasonSummaryGraph
                        playerId={this.props.player.id}
                        primaryPosition={this.props.player.primaryPosition}
                        dataKey={"average"}
                        title={"SC Scores 2021"}
                    />
                </Grid>
                <Grid item xs={6} style={{maxHeight: "300px"}}>
                    <CareerSummaryGraph
                        playerId={this.props.player.id}
                        primaryPosition={this.props.player.primaryPosition}
                        dataKey={"average"}
                        title={"SC Average - Career"}
                        ticks={[50, 100, 150]}
                    />
                </Grid>
            </Grid>
        )

    }

}

export default withStyles(styles)(PlayerDetailsCard);
