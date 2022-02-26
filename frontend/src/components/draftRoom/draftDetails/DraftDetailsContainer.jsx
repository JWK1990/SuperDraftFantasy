import React from "react";
import DraftHistory from "./DraftHistory";
import StatTabPanel from "../../shared/StatTabPanel";
import DraftOverview from "./DraftOverview";

export default function DraftDetailsContainer() {

    const tabList = [
        {label: "Overview", component: <DraftOverview />},
        {label: "History", component: <DraftHistory />},
    ]

    return (
        <StatTabPanel tabList={tabList}/>
    )

}
