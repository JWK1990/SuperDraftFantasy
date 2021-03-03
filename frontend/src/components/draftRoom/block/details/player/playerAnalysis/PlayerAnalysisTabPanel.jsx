import React from "react";
import PlayerAnalysisStatsTable from "./stats/PlayerAnalysisStatsTable";
import StatTabPanel from "../../../../../shared/StatTabPanel";


export default function PlayerAnalysisTabPanel(props) {

    const tabList = [
        {label: "Stats", component:<PlayerAnalysisStatsTable player={props.player}/>},
        {label: "Graphs", component: <PlayerAnalysisStatsTable player={props.player}/>},
    ]

    return (
        <StatTabPanel
            tabList={tabList}
        />
    )
}
