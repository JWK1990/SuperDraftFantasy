import React from "react";
import DraftHistory from "./DraftHistory";
import StatTabPanel from "../../shared/StatTabPanel";
import DraftOverview from "./DraftOverview";
import {isCurrentUserCommissionerSelector} from "../../../store/selectors/DraftSelectors";
import {connect} from "react-redux";

function DraftDetailsContainer(props) {

    const tabList = [
        {label: "Overview", component: <DraftOverview />},
        {label: "History", component: <DraftHistory />},
    ]

    return props.isUserCommissioner
        ? <StatTabPanel tabList={tabList}/>
        : <DraftHistory/>

}

const mapStateToProps = (state) => ({
    isUserCommissioner: isCurrentUserCommissionerSelector(state),
})

export default connect(mapStateToProps)(DraftDetailsContainer);
