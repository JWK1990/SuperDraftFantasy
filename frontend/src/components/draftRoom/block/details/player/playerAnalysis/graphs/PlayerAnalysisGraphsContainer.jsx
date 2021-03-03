import React from "react";
import StatSelector from "../../../../../../shared/StatSelector";
import {connect} from "react-redux";
import {
    currentBlockGraphPeriodSelector,
    currentBlockGraphStatSelector
} from "../../../../../../../store/selectors/NavigationSelectors";
import {changeBlockGraphPeriod, changeBlockGraphStat} from "../../../../../../../store/actions/NavigationActions";
import Box from "@material-ui/core/Box";

const statOptionsList = [
    {id: 1, name: "Ave"},
    {id: 2, name: "Disp"},
    {id: 3, name: "Price"},
];

const periodOptionsList = [
    {id: 1, name: "2020"},
    {id: 2, name: "Career"},
    {id: 3, name: "Pre-Season"},
];

class PlayerAnalysisGraphsContainer extends React.Component {

    componentWillMount() {
        // If no Team is selected, set to the first Team in the list.
        if(!this.props.selectedBlockGraphStat) {
            this.props.changeBlockGraphStat(statOptionsList[0].id);
        }
        if(!this.props.selectedBlockGraphPeriod) {
            this.props.changeBlockGraphPeriod(periodOptionsList[0].id);
        }
    }

    handleStatChange = (event) => {
        this.props.changeBlockGraphStat(event.target.value);
    }

    handlePeriodChange = (event) => {
        this.props.changeBlockGraphPeriod(event.target.value);
    }

    render() {

        if(!this.props.selectedBlockGraphStat || !this.props.selectedBlockGraphPeriod) {
            return null;
        }

        return (
            <>
                <Box textAlign={"center"} paddingLeft={4} paddingRight={4}>
                        <StatSelector
                            id="player-analysis-graph-stat-select"
                            value={this.props.selectedBlockGraphStat}
                            onChange={this.handleStatChange}
                            helperText=""
                            optionList={statOptionsList}
                        />
                        <StatSelector
                            id="player-analysis-graph-period-select"
                            value={this.props.selectedBlockGraphPeriod}
                            onChange={this.handlePeriodChange}
                            helperText=""
                            optionList={periodOptionsList}
                        />
                </Box>

            </>

        )

    }
}

const mapStateToProps = state => {
    return {
        selectedBlockGraphStat: currentBlockGraphStatSelector(state),
        selectedBlockGraphPeriod: currentBlockGraphPeriodSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
    changeBlockGraphStat: statId => dispatch(changeBlockGraphStat(statId)),
    changeBlockGraphPeriod: periodId => dispatch(changeBlockGraphPeriod(periodId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerAnalysisGraphsContainer);
