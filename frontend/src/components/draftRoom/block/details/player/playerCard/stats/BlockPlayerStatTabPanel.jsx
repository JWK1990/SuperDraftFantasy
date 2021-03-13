import StatTabPanel from "../../../../../../shared/StatTabPanel";
import React from "react";
import BlockPlayerYearStats from "./BlockPlayerYearStats";
import BlockPlayerCareerStats from "./BlockPlayerCareerStats";

export default function BlockPlayerStatTabPanel(props) {

    const tabList = [
        {label: "2020", component: <BlockPlayerYearStats player={props.player}/>},
        {label: "Career", component: <BlockPlayerCareerStats player={props.player}/>},
    ]

    return (
        <StatTabPanel
            tabList={tabList}
        />
    )
}
