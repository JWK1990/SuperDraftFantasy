import StatTabPanel from "../../../../../../shared/StatTabPanel";
import React from "react";
import BlockPlayerYearStats from "./BlockPlayerYearStats";

export default function BlockPlayerStatTabPanel(props) {

    const tabList = [
        {label: "2020 Stats", component: <BlockPlayerYearStats player={props.player}/>},
    ]

    return (
        <StatTabPanel
            tabList={tabList}
        />
    )
}
