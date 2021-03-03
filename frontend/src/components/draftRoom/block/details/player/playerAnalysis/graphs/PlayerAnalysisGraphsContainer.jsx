import React from "react";
import StatSelector from "../../../../../../shared/StatSelector";
import {connect} from "react-redux";
import {
    currentBlockGraphPeriodSelector,
    currentBlockGraphStatSelector
} from "../../../../../../../store/selectors/NavigationSelectors";
import {changeBlockGraphPeriod, changeBlockGraphStat} from "../../../../../../../store/actions/NavigationActions";
import Box from "@material-ui/core/Box";
import TeamStatsBarChart from "../../../../../statistics/teams/teamStats/graphs/TeamStatsBarChart";
import PlayerAnalysisGraph from "./PlayerAnalysisGraph";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    graphDiv: {
        // Height of the On The Block section minus the Tab Panel and Selectors at the top.
        height: "calc(var(--player-card-height) - 60px)",
    }
}

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
                        />
                        <StatSelector
                            id="player-analysis-graph-period-select"
                            value={this.props.selectedBlockGraphPeriod}
                            onChange={this.handlePeriodChange}
                            helperText=""
                            optionList={periodOptionsList}
                        />
                </Box>
                <div className={classes.graphDiv}>
                    <PlayerAnalysisGraph
                        player={this.props.player}
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
