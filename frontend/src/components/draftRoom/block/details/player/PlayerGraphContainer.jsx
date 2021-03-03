import React from "react";
import StatTabPanel from "../../../../shared/StatTabPanel";
import TeamStatsBarChart from "../../../statistics/teams/teamStats/graphs/TeamStatsBarChart";

class PlayerGraphContainer extends React.Component {

    tabList = [
        {label: "1", component: <TeamStatsBarChart height={200}/>},
        {label: "2", component: <p>LineChart</p>},
        {label: "3", component: <p>CombinedChart</p>},
    ]

    render() {
        return (
            <StatTabPanel
                tabList={this.tabList}
            />
        )
    }

}

export default PlayerGraphContainer;
