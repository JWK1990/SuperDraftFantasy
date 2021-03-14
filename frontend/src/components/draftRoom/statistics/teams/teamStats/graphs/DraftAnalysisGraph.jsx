import React, {useEffect, useState} from "react";
import {Bar, CartesianGrid, ComposedChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import DraftService from "../../../../../../services/DraftService";

/*const useStyles = makeStyles((theme) => ({
    customTooltip: {
        backgroundColor: "grey",
    }
}));*/

export default function DraftAnalysisGraph(props) {
    const [teamStats, setTeamStats] = useState(null);

    useEffect(() => {
        let mounted = true;
        DraftService.getTeamStatsByDraftId(props.draftId)
            .then(teamStats => {
                if(mounted) {
                    // Filters and transform the data into the correct structure for the Recharts Graph below.
                    const teamStatsData = teamStats.data;
                    const mappedTeamStats = teamStatsData.map(team => {
                        return {
                            team: team.name,
                            value: team[props.dataKey][props.statType]
                        }
                    })
                    const sortedMappedTeamStats = mappedTeamStats.sort((a, b) => b.value - a.value);
                    setTeamStats(sortedMappedTeamStats);
                }
            })
        return () => mounted = false;
    }, [props.draftId, props.dataKey, props.statType])

    function getAverage(teamStats) {
        let totalValue = 0;
        teamStats.forEach(team => {
            totalValue += team.value
        });
        return totalValue / teamStats.length;
    }

    if(!teamStats || teamStats.length < 1) {
        return null;
    }

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
        <ResponsiveContainer width="100%" height={700}>
            <ComposedChart
                width={500}
                height={400}
                data={teamStats}
                margin={{
                    top: 5,
                    right: 10,
                    bottom: 5,
                    left: -10,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="team" />
                <YAxis />
                <Tooltip/>
                <Bar dataKey={"value"} barSize={40} fill={"#4df3cc"} />
                <ReferenceLine y={getAverage(teamStats)} stroke="#0066ff" strokeWidth={2}/>
            </ComposedChart>
        </ResponsiveContainer>
    )

}
