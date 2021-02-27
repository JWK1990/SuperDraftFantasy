import React from "react";
import TeamStatsTable from "./TeamStatsTable";
import StatTabPanel from "../../../../../shared/StatTabPanel";

class TeamStatsTableContainer extends React.Component {

    tabList = [
        {label: "Overview", component: <TeamStatsTable />},
        {label: "Rankings", component: <p> Show Rankings Compared To Other Coaches In Key Stats. </p>},
        {label: "Log", component: <p> Show History Of Players Drafted Or Bids. </p>},
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
