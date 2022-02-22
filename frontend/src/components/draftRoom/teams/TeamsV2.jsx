import React from "react";
import {reorderTeamListAction} from "../../../store/actions";
import {connect} from "react-redux";
import {
    draftSelector,
    draftStatusSelector,
    draftTeamsSelector,
    numOfPlayersRequiredSelector
} from "../../../store/selectors/DraftSelectors";
import {stompClientSelector} from "../../../store/selectors/WebSocketSelectors";
import {onTheBlockTeamIdSelector} from "../../../store/selectors/BlockSelectors";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import TeamCardV2 from "./TeamCardV2";

const styles = {
    mainContainer: {
        height: "100%",
    },
}

const getSortableTeamList = (teamList, numOfSlots) => {
    teamList.sort((teamA, teamB) => teamA.orderIndex - teamB.orderIndex);
    return Array.from({ length: numOfSlots }, (v, k) => k).map(k => ({
        id: `item-${teamList[k] ?
            teamList[k].orderIndex
            : k}`,
        content: teamList[k] ?
            {id: teamList[k].id, team: teamList[k], isVacant: false, isLoading: false}
            : {id: k+1, team: "VACANT", isVacant: true, isLoading: false}
    }));
}

class TeamsV2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sortableTeamList: getSortableTeamList(props.teams, props.draft.numOfTeams)
        };
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/reorderTeamLists', this.receiveReorderTeamList);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.teams !== this.props.teams) {
            this.setState({sortableTeamList: getSortableTeamList(this.props.teams, this.props.draft.numOfTeams)});
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container item className={classes.mainContainer}>
                {
                    this.state.sortableTeamList.map((slot, index) => {
                        return (
                            <TeamCardV2
                                key={index}
                                team={slot.content.team}
                                numOfPlayersRequired={this.props.numOfPlayersRequired}
                            />
                        )
                    })
                }
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        stompClient: stompClientSelector(state),
        draft: draftSelector(state),
        draftStatus: draftStatusSelector(state),
        teams: draftTeamsSelector(state),
        numOfPlayersRequired: numOfPlayersRequiredSelector(state),
        onTheBlockTeamId: onTheBlockTeamIdSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
    updateTeamOrder: (teamList) => dispatch(reorderTeamListAction(teamList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)((TeamsV2)));
