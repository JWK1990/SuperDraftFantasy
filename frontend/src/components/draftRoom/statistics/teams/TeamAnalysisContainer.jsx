import React from 'react'
import {draftTeamsNameSelector} from "../../../../store/selectors/DraftSelectors";
import {connect} from "react-redux";
import {MenuItem, TextField} from "@material-ui/core";
import TeamViewField from "./fieldView/TeamViewField";
import {changeDraftStatisticsTeamIdAction} from "../../../../store/actions/NavigationActions";
import {currentDraftStatisticsTeamIdSelector} from "../../../../store/selectors/NavigationSelectors";

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
        if(!this.props.selectedTeamId) {
            return null;
        }
        return (
            <>
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
                <TeamViewField />
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(TeamAnalysisContainer);
