import React from "react";
import PlayerAnalysisStatsTable from "./stats/PlayerAnalysisStatsTable";
import StatTabPanel from "../../../../../shared/StatTabPanel";
import PlayerAnalysisGraphsContainer from "./graphs/PlayerAnalysisGraphsContainer";

export default function PlayerAnalysisTabPanel(props) {

    const tabList = [
        {label: "Stats", component:<PlayerAnalysisStatsTable player={props.player}/>},
        {label: "Graphs", component: <PlayerAnalysisGraphsContainer player={props.player}/>},
    ]

    return (
        <StatTabPanel
            tabList={tabList}
        />
    )
}
