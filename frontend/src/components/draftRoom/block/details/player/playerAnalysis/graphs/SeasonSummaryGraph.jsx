import React, {useEffect, useState} from "react";
import {
    Bar,
    CartesianGrid,
    Cell,
    ComposedChart,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import DraftService from "../../../../../../../services/DraftService";
import PlayerStatFetcher from "../../../../../../shared/statFetchers/PlayerStatFetcher";
import {FormControl, MenuItem, Paper, Select} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    formControl: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    seasonGraphFormControl: {
        width: "50%",
    },
}

function getPositionAverage(position, dataKey) {
    let positionAverage = null;
    if(dataKey === "average") {
        positionAverage = PlayerStatFetcher.getPositionAve(position);
    } else if(dataKey === "disposals") {
        positionAverage = PlayerStatFetcher.getPositionDisposalsAverage(position);
    }
    return positionAverage;
}

const CustomTooltip = ({ active, payload, label, tooltipText }) => {
    if (active && payload && payload.length) {
        return (
            <Paper style={{width: "220px", textAlign: "center"}}>
                <Typography variant={"subtitle2"}>{`Round ${label} - ${payload[0].value} ${tooltipText.toString()}`}</Typography>
            </Paper>
        );
    }
    return null;
};

function SeasonSummaryGraph(props) {
    const { classes } = props;
    const [selectedStat, setSelectedStat] = useState("average");
    const [statSettings, setStatSettings] = useState(
        {
            ticks: [50, 100, 150],
            thresholds: [120, 100, 80, 50],
            tooltipText: "Points",
        });
    const [games, setGames] = useState(null);

    useEffect(() => {
        let mounted = true;
        DraftService.getGamesByPlayerId(props.playerId)
            .then(games => {
                if(mounted) {
                    const fullGameList = getFullGamesList(games.data);
                    setGames(fullGameList);
                }
            })
        return () => mounted = false;
    }, [props.playerId])

    // Used to add in any missing rounds to ensure at least full set of 23 rounds.
    const getFullGamesList = (games) => {
        const fullGamesList = [];
        const lastRoundPlayed = Math.max.apply(Math, games.map(game => game.round));
        // The last round in the graph should Round 23 unless the player played Finals.
        const lastRoundInGraph = Math.max(23, lastRoundPlayed);
        for(let i = 0; i < lastRoundInGraph; i++) {
            // If stats exist for the round, use them.
            let currentGame = games.find(game => game.round === i + 1);
            // If not, add empty stats for that round.
            if(!currentGame) {
                currentGame = {
                    round: i + 1,
                    average: null,
                    clearances: null,
                    disposalEfficiency: null,
                    disposals: null,
                    goals: null,
                    hardnessRating: null,
                    hitouts: null,
                    metersGains: null,
                    tackles: null
                }
            }
            fullGamesList.push(currentGame);
        }
        return fullGamesList;
    }

    if(!games || games.length < 1) {
        return null;
    }

    const positionAverage = getPositionAverage(props.primaryPosition, props.selectedStat);

    const handleChange = (event) => {
        setSelectedStat(event.target.value);
        setStatSettings(getStatSettings(event.target.value));
    }

    const getStatSettings = (selectedStat) => {
        let ticks = [50, 100, 150];
        let thresholds = [120, 100, 80, 50];
        let tooltipText = "Points";
        switch(selectedStat) {
            case "average":
                ticks = [50, 100, 150];
                thresholds = [120, 100, 80, 50];
                tooltipText = "Points";
                break;
            case "disposals":
                ticks = [10, 20, 30];
                thresholds = [30, 25, 15, 10];
                tooltipText = "Disposals";
                break;
            case "clearances":
                ticks = [4, 8, 12]
                thresholds = [10, 8, 4, 2];
                tooltipText = "Clearances";
                break;
            case "centerClearances":
                ticks = [2, 4, 6]
                thresholds = [8, 6, 4, 2];
                tooltipText = "Center Clearances";
                break;
            case "goals":
                ticks = [2, 4, 6]
                thresholds = [5, 3, 2, 1];
                tooltipText = "Goals";
                break;
            case "hitouts":
                ticks = [15, 30, 45]
                thresholds = [35, 20, 10, 5];
                tooltipText = "Hitouts";
                break;
            case "hardnessRating":
                ticks = [30, 60, 90]
                thresholds = [80, 60, 40, 25];
                tooltipText = "% Hardness";
                break;
            default:
                break;
        }
        return {
            ticks: ticks,
            thresholds: thresholds,
            tooltipText: tooltipText,
        };
    }

    return (
        <Grid container spacing={2} style={{height: "100%"}}>
            <Grid item xs={12} className={classes.formControl}>
                <FormControl className={classes.seasonGraphFormControl}>
                    <Select
                        labelId="season-summary-graph-select"
                        id="season-summary-graph-select"
                        value={selectedStat}
                        onChange={handleChange}
                        style={{textAlign: "center"}}
                    >
                        <MenuItem value={"average"}>Average - 2021</MenuItem>
                        <MenuItem value={"disposals"}>Disposals - 2021</MenuItem>
                        <MenuItem value={"clearances"}>Clearances - 2021</MenuItem>
                        <MenuItem value={"centerClearances"}>Center Clearances - 2021</MenuItem>
                        <MenuItem value={"goals"}>Goals - 2021</MenuItem>
                        <MenuItem value={"hitouts"}>Hitouts - 2021</MenuItem>
                        <MenuItem value={"hardnessRating"}>Hardness - 2021</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        width={500}
                        height={200}
                        data={games}
                        margin={{
                            top: 5,
                            right: 10,
                            bottom: 5,
                            left: -10,
                        }}
                    >
                        <CartesianGrid stroke="grey" strokeDasharray="2 2" vertical={false}/>
                        <XAxis dataKey="round" tick={false} height={5} />
                        <YAxis ticks={statSettings.ticks} tick={{ fontSize: "0.8vw" }}/>
                        <Tooltip content={<CustomTooltip tooltipText={statSettings.tooltipText}/>} position={{ x: 50, y: 0 }}/>
                        <Bar dataKey={selectedStat}
                             barSize={10}
                             fill="#4df3cc"
                        >
                            {games.map((entry, index) => (
                                <Cell key={index} fill={
                                    entry[selectedStat] >= statSettings.thresholds[0] ? 'var(--great)'
                                        : entry[selectedStat] >= statSettings.thresholds[1] ? 'var(--good)'
                                            : entry[selectedStat] >= statSettings.thresholds[2] ? 'var(--average)'
                                                : entry[selectedStat] >= statSettings.thresholds[3] ? 'var(--poor)'
                                                    : 'var(--terrible)'
                                }/>
                            ))}
                        </Bar>
                        {
                            positionAverage != null
                                ? <ReferenceLine y={positionAverage} stroke="#0066ff" strokeWidth={2}/>
                                : null
                        }
                    </ComposedChart>
                </ResponsiveContainer>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(SeasonSummaryGraph);
