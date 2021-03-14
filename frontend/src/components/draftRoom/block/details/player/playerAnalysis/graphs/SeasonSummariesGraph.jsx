import React, {useEffect, useState} from "react";
import {Bar, CartesianGrid, ComposedChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import DraftService from "../../../../../../../services/DraftService";
import PlayerStatFetcher from "../../../../../../shared/statFetchers/PlayerStatFetcher";

/*const useStyles = makeStyles((theme) => ({
    customTooltip: {
        backgroundColor: "grey",
    }
}));*/

function getTicks(seasonSummaries) {
    seasonSummaries.sort(function (a, b) {
        return a.year - b.year
    })

    const minYear = seasonSummaries[0].year;
    const maxYear= seasonSummaries[seasonSummaries.length - 1].year;
    const ticks = [];

    for(let i=0; i <= maxYear - minYear; i++) {
        const tick = minYear + i;
        ticks.push(tick);
    }
    return ticks;
}

function getAverage(seasonSummaries, dataKey) {
    let statTotal = 0;
    seasonSummaries.forEach(seasonSummary => {
        statTotal += seasonSummary[dataKey]
    })
    return Math.round(statTotal/seasonSummaries.length);
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


export default function SeasonSummariesGraph(props) {
    const [seasonSummaries, setSeasonSummaries] = useState(null);

    useEffect(() => {
        let mounted = true;
        DraftService.getAllSeasonSummariesByPlayerId(props.playerId)
            .then(seasonSummaries => {
                if(mounted) {
                    setSeasonSummaries(seasonSummaries.data);
                }
            })
        return () => mounted = false;
    }, [props.playerId])

    if(!seasonSummaries || seasonSummaries.length < 1) {
        return null;
    }

    const statAverage = getAverage(seasonSummaries, props.dataKey);

    const positionAverage = getPositionAverage(props.primaryPosition, props.dataKey);

/*    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className={classes.customTooltip}>
                    <p className={classes.round}>{`Rd ${label} - ${seasonSummaries[label-1].year}`}</p>
                    <p className={classes.scScore}>{`${props.dataKey}: ${payload[0].value}`}</p>
                    <p className={classes.disposals}>{`Disposals: ${seasonSummaries[label-1].Disposals}`}</p>
                </div>
            );
        }
        return null;
    };*/

    return (
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
                width={500}
                height={400}
                data={seasonSummaries}
                margin={{
                    top: 5,
                    right: 10,
                    bottom: 5,
                    left: -10,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="year" ticks={getTicks(seasonSummaries)} />
                <YAxis />
                <Tooltip/>
                <Bar dataKey={props.dataKey} barSize={20} fill="#4df3cc" />
                <ReferenceLine
                    y={statAverage}
                    stroke="#4df3cc"
                    strokeWidth={2}
                />
                {
                    positionAverage != null
                    ? <ReferenceLine y={positionAverage} stroke="#0066ff" strokeWidth={2}/>
                        : null
                }
            </ComposedChart>
        </ResponsiveContainer>
    )

}
