import React from "react";
import TeamStatsTable from "./TeamStatsTable";
import StatTabPanel from "../../../../../shared/StatTabPanel";

class TeamStatsTableContainer extends React.Component {

    tabList = [
        {label: "Average", component: <TeamStatsTable />},
        {label: "Spend", component: <p> Stat 2 </p>},
        {label: "Dollars", component: <p> Stat 3 </p>},
    ]

    render() {
        return (
            <StatTabPanel
                tabList={this.tabList}
            />
        )
    }

}

export default TeamStatsTableContainer;
