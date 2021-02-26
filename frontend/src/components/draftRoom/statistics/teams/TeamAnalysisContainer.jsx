import React from 'react'
import {draftTeamsNameSelector} from "../../../../store/selectors/DraftSelectors";
import {connect} from "react-redux";
import {MenuItem, TextField} from "@material-ui/core";
import TeamViewField from "./fieldView/TeamViewField";
import {changeDraftStatisticsTeamIdAction} from "../../../../store/actions/NavigationActions";
import {currentDraftStatisticsTeamIdSelector} from "../../../../store/selectors/NavigationSelectors";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const styles = {
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
                <Grid container spacing={0} direction="row" justify="space-between" alignItems="stretch">
                    <Grid item xs={12}>
                        <div className="teamSelect centered-div">
                            <TextField
                                id="draft-team-analysis-select"
                                select
                                value={this.props.selectedTeamId}
                                onChange={this.handleTeamChange}
                                helperText="Select Team To Analyse."
                            >
                                {this.props.teamNameList.map((team) => (
                                    <MenuItem key={team.id} value={team.id}>
                                        {team.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                    </Grid>
                    {/* Change the below width to change the size of the TeamFieldView. */}
                    <Grid item xs={4}>
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
