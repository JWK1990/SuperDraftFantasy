import React from "react";
import StatSelector from "../../../../../../shared/StatSelector";
import {connect} from "react-redux";
import {
    currentBlockGraphPeriodSelector,
    currentBlockGraphStatSelector
} from "../../../../../../../store/selectors/NavigationSelectors";
import {changeBlockGraphPeriod, changeBlockGraphStat} from "../../../../../../../store/actions/NavigationActions";
import Box from "@material-ui/core/Box";
import PlayerAnalysisGraph from "./PlayerAnalysisGraph";
import withStyles from "@material-ui/core/styles/withStyles";
import SeasonSummariesGraph from "./SeasonSummariesGraph";

const styles = {
    graphDiv: {
        // Height of the On The Block section minus the Tab Panel and Selectors at the top.
        height: "calc(var(--player-card-height) - 60px)",
    }
}

const statOptionsList = [
    {id: 1, name: "average"},
    {id: 2, name: "disposals"},
    {id: 3, name: "price"},
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
        const {classes} = this.props;

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
                            useNameAsValue={true}
                        />
                        <StatSelector
                            id="player-analysis-graph-period-select"
                            value={this.props.selectedBlockGraphPeriod}
                            onChange={this.handlePeriodChange}
                            helperText=""
                            optionList={periodOptionsList}
                            useNameAsValue={true}
                        />
                </Box>
                <div className={classes.graphDiv}>
                    <SeasonSummariesGraph
                        playerId={this.props.playerId}
                        primaryPosition={this.props.primaryPosition}
                        dataKey={this.props.selectedBlockGraphStat}
                    />
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PlayerAnalysisGraphsContainer));
