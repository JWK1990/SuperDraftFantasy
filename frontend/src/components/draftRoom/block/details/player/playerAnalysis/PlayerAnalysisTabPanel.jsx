import React from "react";
import PlayerAnalysisStatsTable from "./stats/PlayerAnalysisStatsTable";
import StatTabPanel from "../../../../../shared/StatTabPanel";
import PlayerAnalysisGraphsContainer from "./graphs/PlayerAnalysisGraphsContainer";

export default function PlayerAnalysisTabPanel(props) {

    const tabList = [
        {label: "Stats", component:<PlayerAnalysisStatsTable playerId={props.playerId}/>},
        {label: "Graphs", component: <PlayerAnalysisGraphsContainer playerId={props.playerId} primaryPosition={props.primaryPosition}/>},
    ]

    return (
        <StatTabPanel
            tabList={tabList}
        />
    )
}
