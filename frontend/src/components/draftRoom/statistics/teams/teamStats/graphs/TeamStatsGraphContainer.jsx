import React from "react";
import TeamStatsBarChart from "./TeamStatsBarChart";
import StatTabPanel from "../../../../../shared/StatTabPanel";

class TeamStatsGraphContainer extends React.Component {

    tabList = [
        {label: "BarChart", component: <TeamStatsBarChart height={320}/>},
        {label: "LineChart", component: <p>LineChart</p>},
        {label: "CombinedChart", component: <p>CombinedChart</p>},
    ]

    render() {
        return (
            <StatTabPanel
                tabList={this.tabList}
            />
        )
    }

}

export default TeamStatsGraphContainer;
