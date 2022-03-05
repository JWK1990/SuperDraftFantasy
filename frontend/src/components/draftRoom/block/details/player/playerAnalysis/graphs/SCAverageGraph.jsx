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
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
                <Typography variant={"subtitle2"}>{`Round ${label} - ${payload[0].value} Points`}</Typography>
            </Paper>
        );
    }

    return null;
};

export default function SCAverageGraph(props) {
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

    const positionAverage = getPositionAverage(props.primaryPosition, props.dataKey);

    return (
        <Grid container spacing={2} style={{height: "calc(var(--draft-room-block-height) - 16px)"}}>
            <Grid item xs={12}>
                <Typography variant={"subtitle2"} align={"center"} style={{paddingLeft: "50px"}}>SC Scores 2021</Typography>
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
                        <YAxis ticks={[50, 100, 150]} tick={{ fontSize: 10 }}/>
                        <Tooltip content={<CustomTooltip />} position={{ x: 50, y: 0 }}/>
                        <Bar dataKey={"average"}
                             barSize={10}
                             fill="#4df3cc"
                        >
                            {games.map((entry, index) => (
                                <Cell key={index} fill={
                                    entry.average >= 120 ? 'var(--great)'
                                        : entry.average >= 100 ? 'var(--good)'
                                            : entry.average >= 80 ? 'var(--average)'
                                                : entry.average >= 50 ? 'var(--poor)'
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
