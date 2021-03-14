import React from "react";
import StatSelector from "../../../../../../shared/StatSelector";
import {connect} from "react-redux";
import {
    currentBlockGraphPeriodSelector,
    currentBlockGraphStatSelector
} from "../../../../../../../store/selectors/NavigationSelectors";
import {changeBlockGraphPeriod, changeBlockGraphStat} from "../../../../../../../store/actions/NavigationActions";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import SeasonSummariesGraph from "./SeasonSummariesGraph";
import GamesGraph from "./GamesGraph";

const styles = {
    graphDiv: {
        // Height of the On The Block section minus the Tab Panel and Selectors at the top.
        height: "calc(var(--player-card-height) - 60px)",
    }
}

const periodOptionsList = [
    {id: 1, name: "2020"},
    {id: 2, name: "Career"},
];

const statOptionsList2020 = [
    {id: 1, name: "average"},
    {id: 2, name: "disposals"},
    {id: 3, name: "disposalEfficiency"},
    {id: 4, name: "tackles"},
    {id: 5, name: "hitouts"},
    {id: 6, name: "goals"},
    {id: 7, name: "clearances"},
    {id: 8, name: "metersGained"},
    {id: 9, name: "hardnessRating"},
];

const statOptionsListCareer= [
    {id: 1, name: "average"},
    {id: 2, name: "games"},
    {id: 3, name: "disposals"},
    {id: 4, name: "price"},
    {id: 5, name: "disposalEfficiency"},
    {id: 6, name: "kicks"},
    {id: 7, name: "handballs"},
    {id: 8, name: "tackles"},
    {id: 9, name: "hitouts"},
    {id: 10, name: "timeOnGround"},
    {id: 11, name: "marks"},
    {id: 12, name: "goals"},
    {id: 13, name: "goalAssists"},
    {id: 14, name: "clangers"},
    {id: 15, name: "clearances"},
    {id: 16, name: "contestedPossessions"},
    {id: 17, name: "uncontestedPossessions"},
    {id: 18, name: "onePercenters"},
    {id: 19, name: "metersGained"},
    {id: 20, name: "turnovers"},
    {id: 21, name: "intercepts"},
];

class PlayerAnalysisGraphsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            statOptionsList: statOptionsList2020,
            selectedStatOption: "average",
        };
    }

    componentWillMount() {
        // If no Team is selected, set to the first Team in the list.
        if(!this.props.selectedBlockGraphStat) {
            this.props.changeBlockGraphStat(statOptionsList2020[0].id);
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
        if(this.props.selectedBlockGraphPeriod === "2020") {
            this.setState({statOptionsList: statOptionsList2020});
        } else {
            this.setState({statOptionsListCareer: statOptionsListCareer});
        }
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
                            optionList={this.state.statOptionsList}
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
                    {this.props.selectedBlockGraphPeriod === "2020"
                    ? <GamesGraph
                            playerId={this.props.playerId}
                            primaryPosition={this.props.primaryPosition}
                            dataKey={this.props.selectedBlockGraphStat}
                        />
                        : <SeasonSummariesGraph
                            playerId={this.props.playerId}
                            primaryPosition={this.props.primaryPosition}
                            dataKey={this.props.selectedBlockGraphStat}
                        />
                    }
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
