import React from "react";
import TeamStatsBarChart from "./TeamStatsBarChart";
import StatTabPanel from "../../../../../shared/StatTabPanel";
import Box from "@material-ui/core/Box";
import StatSelector from "../../../../../shared/StatSelector";
import GamesGraph from "../../../../block/details/player/playerAnalysis/graphs/GamesGraph";
import SeasonSummariesGraph from "../../../../block/details/player/playerAnalysis/graphs/SeasonSummariesGraph";
import DraftAnalysisGraph from "./DraftAnalysisGraph";
import withStyles from "@material-ui/core/styles/withStyles";


const styles = {
    graphDiv: {
        // Height of the On The Block section minus the Tab Panel and Selectors at the top.
        height: "calc(var(--player-card-height) - 60px)",
    }
}

class TeamStatsGraphContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedStatOption: "supercoach",
            selectedStatTypeOption: "average",
        };
    }

    statOptionsList = [
        {id: 1, name: "supercoach"},
        {id: 2, name: "preSeason"},
        {id: 3, name: "rooster"},
        {id: 4, name: "oversUnders"},
        {id: 5, name: "moneyball"},
        {id: 6, name: "def"},
        {id: 7, name: "mid"},
        {id: 8, name: "ruc"},
        {id: 9, name: "fwd"},
    ];

    statTypeOptionsList = [
        {id: 1, name: "average"},
        {id: 2, name: "count"},
        {id: 3, name: "sum"},
        {id: 4, name: "min"},
        {id: 5, name: "max"},
    ]

    handleStatChange = (event) => {
        this.setState({selectedStatOption: event.target.value});
    }

    handleStatTypeChange = (event) => {
        this.setState({selectedStatTypeOption: event.target.value});
    }

    render() {
        const {classes} = this.props;

        return (
            <>
                <Box textAlign={"center"} paddingLeft={4} paddingRight={4}>
                    <StatSelector
                        id="team-analysis-graph-stat-select"
                        value={this.state.selectedStatOption}
                        onChange={this.handleStatChange}
                        helperText="Select A Stat"
                        optionList={this.statOptionsList}
                        useNameAsValue={true}
                    />
                    <StatSelector
                        id="team-analysis-graph-stat-type-select"
                        value={this.state.selectedStatTypeOption}
                        onChange={this.handleStatTypeChange}
                        helperText="Select A Stat Type"
                        optionList={this.statTypeOptionsList}
                        useNameAsValue={true}
                    />
                </Box>
                <div className={classes.graphDiv}>
                    <DraftAnalysisGraph
                        dataKey={this.state.selectedStatOption}
                        statType={this.state.selectedStatTypeOption}
                        draftId={this.props.draftId}
                    />
                </div>
            </>
        )

    }
}

export default withStyles(styles)(TeamStatsGraphContainer);
