import StatTabPanel from "../../../../../../shared/StatTabPanel";
import React from "react";
import BlockPlayerOverviewStats from "./BlockPlayerOverviewStats";
import BlockPlayerYearStats from "./BlockPlayerYearStats";
import BlockPlayerCareerStats from "./BlockPlayerCareerStats";

export default function BlockPlayerStatTabPanel(props) {

    const tabList = [
        {label: "Overview", component:<BlockPlayerOverviewStats player={props.player}/>},
        {label: "2019", component: <BlockPlayerYearStats player={props.player}/>},
        {label: "Career", component: <BlockPlayerCareerStats player={props.player}/>},
    ]

    return (
        <StatTabPanel
            tabList={tabList}
        />
    )
}
