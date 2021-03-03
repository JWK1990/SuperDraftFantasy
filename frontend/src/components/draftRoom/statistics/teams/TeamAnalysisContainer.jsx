import React from 'react'
import {draftTeamsNameSelector} from "../../../../store/selectors/DraftSelectors";
import {connect} from "react-redux";
import TeamViewField from "./fieldView/TeamViewField";
import {changeDraftStatisticsTeamIdAction} from "../../../../store/actions/NavigationActions";
import {currentDraftStatisticsTeamIdSelector} from "../../../../store/selectors/NavigationSelectors";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import TeamStatsTableContainer from "./teamStats/table/TeamStatsTableContainer";
import TeamStatsGraphContainer from "./teamStats/graphs/TeamStatsGraphContainer";
import StatSelector from "../../../shared/StatSelector";

const styles = {
    rootContainer: {
        height: "100%",
    },
    teamStatsContainer: {
        width: "100%",
    },
    // Use the below width to control the size of the TeamFieldView.
    teamFieldViewContainer: {
        width: "100%",
    }
}

class TeamAnalysisContainer extends React.Component {

    componentWillMount() {
        // If no Team is selected, set to the first Team in the list.
        if(!this.props.selectedTeamId) {
            this.props.changeDraftStatisticsTeamIdAction(this.props.teamNameList[0].id);
        }
    }

    handleTeamChange = (event) => {
        this.props.changeDraftStatisticsTeamIdAction(event.target.value);
    }

    render() {
        const {classes} = this.props;

        if(!this.props.selectedTeamId) {
            return null;
        }

        return (
            <div className="teamAnalysis">
                <Grid container className="rootContainer" spacing={4} direction="row" justify="space-between" alignItems="stretch">
                    <Grid item xs={12}>
                        <div className="centered-div">
                            <StatSelector
                                id="draft-team-analysis-select"
                                value={this.props.selectedTeamId}
                                onChange={this.handleTeamChange}
                                helperText="Select Team To Analyse."
                                optionList={this.props.teamNameList}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={7}>
                        <Grid container spacing={4} direction="row" justify="space-between" alignItems="stretch">
                            <Grid item xs={12}>
                                <TeamStatsTableContainer />
                            </Grid>
                            <Grid item xs={12}>
                                <TeamStatsGraphContainer />
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Change the below width to change the size of the TeamFieldView. */}
                    <Grid item xs={5}>
                        <div className={classes.teamFieldViewContainer}>
                            <TeamViewField />
                        </div>
                    </Grid>
                </Grid>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        teamNameList: draftTeamsNameSelector(state),
        selectedTeamId: currentDraftStatisticsTeamIdSelector(state)
    };
};

const mapDispatchToProps = dispatch => ({
    changeDraftStatisticsTeamIdAction: teamId => dispatch(changeDraftStatisticsTeamIdAction(teamId))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TeamAnalysisContainer));
