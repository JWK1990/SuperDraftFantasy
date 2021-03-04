import React from "react";
import CommissionerControls from "./CommissionerControls";
import DraftHistory from "./DraftHistory";
import {connect} from "react-redux";
import {draftedPlayersSelector, isCurrentUserCommissionerSelector} from "../../../store/selectors/DraftSelectors";
import StatTabPanel from "../../shared/StatTabPanel";
import PlayerAnalysisStatsTable from "../block/details/player/playerAnalysis/stats/PlayerAnalysisStatsTable";
import PlayerAnalysisGraphsContainer from "../block/details/player/playerAnalysis/graphs/PlayerAnalysisGraphsContainer";

class DraftDetailsContainer extends React.Component {

    tabList = [
        {label: "MyTeam", component: <DraftHistory draftedPlayersList={this.props.draftedPlayersList} />},
        {label: "History", component: <DraftHistory draftedPlayersList={this.props.draftedPlayersList} />},
    ]

    render() {
        if(this.props.isUserCommissioner) {
            this.tabList.push({label: "Commissioner", component: <CommissionerControls />});
        }

        return (
            <div className="commissionerControls">
                <StatTabPanel
                    tabList={this.tabList}
                />

            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    draftedPlayersList: draftedPlayersSelector(state),
    isUserCommissioner: isCurrentUserCommissionerSelector(state),
})

export default connect(mapStateToProps)(DraftDetailsContainer);
