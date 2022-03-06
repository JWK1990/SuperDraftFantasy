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
import {FormControl, MenuItem, Paper, Select} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PlayerStatFetcher from "../../../../../shared/statFetchers/PlayerStatFetcher";
import DraftService from "../../../../../../services/DraftService";
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

const CustomTooltip = ({ active, payload, label, tooltipText, tooltipPrefix }) => {
    if (active && payload && payload.length) {
        return (
            <Paper style={{width: "220px", textAlign: "center"}}>
                <Typography variant={"subtitle2"}>{`${label} - ${tooltipPrefix}${payload[0].value} ${tooltipText}`}</Typography>
            </Paper>
        );
    }
    return null;
};

const getStatSettings = (selectedStat) => {
    let ticks = [10, 20, 30];
    let thresholds = [35, 25, 10, 5];
    let tooltipText = "";
    let tooltipPrefix= "";
    switch(selectedStat) {
        case "average":
            ticks = [50, 100, 150];
            thresholds = [120, 100, 80, 50];
            tooltipText = "Points";
            break;
        case "price":
        case "actualValue":
            ticks = [10, 20, 30];
            thresholds = [35, 25, 10, 5];
            tooltipPrefix = "$";
            break;
        case "priceOverUnder":
            ticks = [-20, 0, 20];
            thresholds = [-20, -10, 10, 20];
            tooltipPrefix = "$";
            break;
        case "disposals":
            ticks = [10, 20, 30];
            thresholds = [30, 25, 15, 10];
            tooltipText = "Disposals";
            break;
        case "games":
            ticks = [8, 16, 24];
            thresholds = [20, 15, 10, 5];
            tooltipText = "Games";
            break;
        case "clearances":
            ticks = [4, 8, 12]
            thresholds = [10, 8, 4, 2];
            tooltipText = "Clearances";
            break;
        case "goals":
            ticks = [2, 4, 6]
            thresholds = [5, 3, 2, 1];
            tooltipText = "Goals";
            break;
        case "intercepts":
            ticks = [5, 10, 15]
            thresholds = [8, 6, 4, 2];
            tooltipText = "Intercepts";
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
        tooltipPrefix: tooltipPrefix,
    };
}

function CareerSummaryGraph(props) {
    const { classes } = props;
    const [selectedStat, setSelectedStat] = useState("average");
    const [statSettings, setStatSettings] = useState(getStatSettings("average"));
    const [seasonSummaryList, setSeasonSummaryList] = useState(null);

    useEffect(() => {
        let mounted = true;
        DraftService.getAllSeasonSummariesByPlayerId(props.playerId)
            .then(seasonSummaryData => {
                if(mounted) {
                    const fullSeasonSummaryList = getFullSeasonSummaryList(seasonSummaryData.data);
                    setSeasonSummaryList(fullSeasonSummaryList);
                }
            })
        return () => mounted = false;
    }, [props.playerId])

    // Used to add in any missing years to ensure at least full set of years from 2007 - 2021.
    const getFullSeasonSummaryList = (seasonSummaryList) => {
        const fullSeasonSummaryList = [];
        const firstYear = 2007;
        const lastYear = 2021;
        for(let i = firstYear; i < lastYear; i++) {
            // If stats exist for the year, use them.
            let currentYear = seasonSummaryList.find(seasonSummary => seasonSummary.year === i + 1);
            // If not, add empty stats for that year.
            if(!currentYear) {
                currentYear = {
                    year: i + 1,
                    playerId: null,
                    games: null,
                    average: null,
                    disposals: null,
                    disposalEfficiency: null,
                    tackles: null,
                    hardnessRating: null,
                    hitouts: null,
                    clearances: null,
                    centerClearances: null,
                    intercepts: null,
                    goals: null,
                    behinds: null,
                }
            }
            currentYear.priceTeamTuple = [currentYear.price, currentYear.team];
            fullSeasonSummaryList.push(currentYear);
        }
        console.log(fullSeasonSummaryList);
        return fullSeasonSummaryList;
    }

    if(!seasonSummaryList || seasonSummaryList.length < 1) {
        return null;
    }

    const handleChange = (event) => {
        setSelectedStat(event.target.value);
        setStatSettings(getStatSettings(event.target.value));
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
                        <MenuItem value={"average"}>Average - Career</MenuItem>
                        <MenuItem value={"price"}>Draft $ - Career</MenuItem>
                        <MenuItem value={"actualValue"}>Value - Career</MenuItem>
                        <MenuItem value={"priceOverUnder"}>$ Over/Under - Career</MenuItem>
                        <MenuItem value={"disposals"}>Disposals - Career</MenuItem>
                        <MenuItem value={"games"}>Games - Career</MenuItem>
                        <MenuItem value={"clearances"}>Clearances - Career</MenuItem>
                        <MenuItem value={"centerClearances"}>Center Clearances - Career</MenuItem>
                        <MenuItem value={"goals"}>Goals - Career</MenuItem>
                        <MenuItem value={"intercepts"}>Intercepts - Career</MenuItem>
                        <MenuItem value={"hitouts"}>Hitouts - Career</MenuItem>
                        <MenuItem value={"reboundFiftys"}>Rebound 50s - Career</MenuItem>
                        <MenuItem value={"insideFiftys"}>Inside 50s - Career</MenuItem>
                        <MenuItem value={"clangers"}>Clangers - Career</MenuItem>
                        <MenuItem value={"hardnessRating"}>Hardness - Career</MenuItem>
                        <MenuItem value={"timeOnGround"}>Time On Ground - Career</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        width={500}
                        height={200}
                        data={seasonSummaryList}
                        margin={{
                            top: 5,
                            right: 10,
                            bottom: 5,
                            left: -10,
                        }}
                    >
                        <CartesianGrid stroke="grey" strokeDasharray="2 2" vertical={false}/>
                        <XAxis dataKey="year" tick={false} height={5} />
                        <YAxis ticks={statSettings.ticks} tick={{ fontSize: "0.8vw" }}/>
                        <Tooltip content={
                            selectedStat === "price"
                                ? (
                                    <CustomTooltip
                                        tooltipText={statSettings.tooltipText}
                                        tooltipPrefix={statSettings.tooltipPrefix}
                                    />
                                )
                                : (
                                    <CustomTooltip
                                        tooltipText={statSettings.tooltipText}
                                        tooltipPrefix={statSettings.tooltipPrefix}
                                    />
                                )

                        } position={{ x: 50, y: 0 }}/>
                        <Bar dataKey={selectedStat}
                             barSize={10}
                             fill="#4df3cc"
                        >
                            {selectedStat === "priceOverUnder"
                            ? (
                                    seasonSummaryList.map((entry, index) => (
                                            <Cell key={index} fill={
                                                entry[selectedStat] > 0
                                                    ? 'var(--terrible)'
                                                    : entry[selectedStat] < 0
                                                        ? 'var(--great)'
                                                        : 'var(--average)'
                                            }/>
                                        ))
                                )
                            : (
                                    seasonSummaryList.map((entry, index) => (
                                            <Cell key={index} fill={
                                                entry[selectedStat] >= statSettings.thresholds[0] ? 'var(--great)'
                                                    : entry[selectedStat] >= statSettings.thresholds[1] ? 'var(--good)'
                                                        : entry[selectedStat] >= statSettings.thresholds[2] ? 'var(--average)'
                                                            : entry[selectedStat] >= statSettings.thresholds[3] ? 'var(--poor)'
                                                                : 'var(--terrible)'
                                            }/>
                                        ))
                                )
                            }
                        </Bar>
                    </ComposedChart>
                </ResponsiveContainer>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(CareerSummaryGraph);
