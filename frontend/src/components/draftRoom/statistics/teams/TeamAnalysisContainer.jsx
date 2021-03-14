import React from 'react'
import {draftIdSelector, draftTeamsNameSelector} from "../../../../store/selectors/DraftSelectors";
import {connect} from "react-redux";
import TeamViewField from "./fieldView/TeamViewField";
import {changeDraftStatisticsTeamIdAction} from "../../../../store/actions/NavigationActions";
import {currentDraftStatisticsTeamIdSelector} from "../../../../store/selectors/NavigationSelectors";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import TeamStatsGraphContainer from "./teamStats/graphs/TeamStatsGraphContainer";
import StatSelector from "../../../shared/StatSelector";

const styles = {
    rootContainer: {
        height: "100%",
        paddingTop: 20,
    },
    teamStatsContainer: {
        width: "100%",
        height: "var(--draft-room-second-row-height)",
    },
    // Use the below width to control the size of the TeamFieldView.
    teamFieldViewContainer: {
        width: "85%",
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
            <div className={classes.rootContainer}>
                <Grid container className={classes.teamStatsContainer} spacing={4} direction="row" justify="space-between" alignItems="stretch">
                    <Grid item xs={7}>
                        <TeamStatsGraphContainer
                            draftId={this.props.draftId}
                        />
                    </Grid>
                    {/* Change the below width to change the size of the TeamFieldView. */}
                    <Grid item xs={5}>
                        <Grid container>
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
                            <Grid item xs={12}>
                                <div className={classes.teamFieldViewContainer}>
                                    <TeamViewField />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        teamNameList: draftTeamsNameSelector(state),
        selectedTeamId: currentDraftStatisticsTeamIdSelector(state),
        draftId: draftIdSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
    changeDraftStatisticsTeamIdAction: teamId => dispatch(changeDraftStatisticsTeamIdAction(teamId))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TeamAnalysisContainer));
