import React from "react";
import StatSelector from "../../../../../../shared/StatSelector";
import {connect} from "react-redux";
import {currentDraftBlockPlayerAnalysisGraphSelector} from "../../../../../../../store/selectors/NavigationSelectors";
import {changeDraftBlockPlayerAnalysisGraph} from "../../../../../../../store/actions/NavigationActions";

const graphList = [
    {id: 1, name: "Test1"},
    {id: 2, name: "Test2"},
];

class PlayerAnalysisGraphsContainer extends React.Component {

    componentWillMount() {
        // If no Team is selected, set to the first Team in the list.
        if(!this.props.selectedPlayerAnalysisGraph) {
            this.props.changeDraftBlockPlayerAnalysisGraph(graphList[0].id);
        }
    }

    handleTeamChange = (event) => {
        this.props.changeDraftBlockPlayerAnalysisGraph(event.target.value);
    }

    render() {

        if(!this.props.selectedPlayerAnalysisGraph) {
            return null;
        }

        return (
            <StatSelector
                id="player-analysis-graph-select"
                value={this.props.selectedPlayerAnalysisGraph}
                onChange={this.handleTeamChange}
                helperText="Select Team To Analyse."
                optionList={graphList}
            />
        )

    }
}

const mapStateToProps = state => {
    return {
        selectedPlayerAnalysisGraph: currentDraftBlockPlayerAnalysisGraphSelector(state)
    };
};

const mapDispatchToProps = dispatch => ({
    changeDraftBlockPlayerAnalysisGraph: graphId => dispatch(changeDraftBlockPlayerAnalysisGraph(graphId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerAnalysisGraphsContainer);
