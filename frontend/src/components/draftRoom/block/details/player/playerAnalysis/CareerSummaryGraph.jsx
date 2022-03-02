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
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PlayerStatFetcher from "../../../../../shared/statFetchers/PlayerStatFetcher";
import DraftService from "../../../../../../services/DraftService";

function getPositionAverage(position, dataKey) {
    let positionAverage = null;
    if(dataKey === "average") {
        positionAverage = PlayerStatFetcher.getPositionAve(position);
    } else if(dataKey === "disposals") {
        positionAverage = PlayerStatFetcher.getPositionDisposalsAverage(position);
    }
    return positionAverage;
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <Paper style={{width: "160px", textAlign: "center"}}>
                <Typography variant={"subtitle2"}>{`Year ${label} - ${payload[0].value} Points`}</Typography>
            </Paper>
        );
    }

    return null;
};

export default function CareerSummaryGraph(props) {
    const [seasonSummaryList, setSeasonSummaryList] = useState(null);

    useEffect(() => {
        let mounted = true;
        DraftService.getAllSeasonSummariesByPlayerId(props.playerId)
            .then(seasonSummaryData => {
                console.log(seasonSummaryData.data);
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
            fullSeasonSummaryList.push(currentYear);
        }
        return fullSeasonSummaryList;
    }

    if(!seasonSummaryList || seasonSummaryList.length < 1) {
        return null;
    }

    const positionAverage = getPositionAverage(props.primaryPosition, props.dataKey);

    return (
        <Grid container spacing={2} style={{height: "calc(var(--draft-room-block-height) - 16px)"}}>
            <Grid item xs={12}>
                <Typography variant={"subtitle2"} align={"center"} style={{paddingLeft: "50px"}}>{props.title}</Typography>
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
                        <YAxis ticks={[50, 100, 150]} tick={{ fontSize: 10 }}/>
                        <Tooltip content={<CustomTooltip />} position={{ x: 50, y: 0 }}/>
                        <Bar dataKey={props.dataKey}
                             barSize={10}
                             fill="#4df3cc"
                        >
                            {seasonSummaryList.map((entry, index) => (
                                <Cell key={index} fill={
                                    entry.average >= 150 ? 'gold'
                                        : entry.average >= 100 ? 'green'
                                            : entry.average >= 80 ? 'lightblue'
                                                : entry.average >= 50 ? 'yellow'
                                                    : 'red'

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
