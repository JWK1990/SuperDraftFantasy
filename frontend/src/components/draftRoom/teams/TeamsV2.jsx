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
import TeamListContainer from "../myTeam/TeamListContainer";

const styles = {
    mainContainer: {
        height: "100%",
    },
    selectedTeamContainer: {
        height: "100%",
        minHeight: "var(--draft-room-player-list-height)",
    },
    // Added in order to make TeamListContainer stretch to remaining space.
    // https://stackoverflow.com/questions/65815511/make-child-of-material-ui-grid-item-stretch-to-fit-the-remaining-height-of-the-p.
    gridItem: {
        display: "flex",
        flexDirection: "column"
    },
    fullHeightCard: {
        display: 'flex',
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
            sortableTeamList: getSortableTeamList(props.teams, props.draft.numOfTeams),
            selectedTeamId: null,
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

    handleTeamClick = (teamId) => {
        const updatedTeamId = !this.state.selectedTeamId ? teamId: null;
        this.setState({selectedTeamId: updatedTeamId});
    }

    render() {
        const {classes} = this.props;
        if(this.state.selectedTeamId === null) {
            return (
                <Grid container item className={classes.mainContainer}>
                    {
                        this.state.sortableTeamList.map((slot, index) => {
                            return (
                                <TeamCardV2
                                    key={index}
                                    teamId={slot.content.team.id}
                                    numOfPlayersRequired={this.props.numOfPlayersRequired}
                                    handleTeamClick={this.handleTeamClick}
                                    isSelected={false}
                                />
                            )
                        })
                    }
                </Grid>
            );
        } else {
            return (
                <Grid container justify="space-between" alignItems="stretch" className={classes.selectedTeamContainer}>
                    <Grid item xs={12} className={classes.gridItem}>
                        {
                            /* This div is required in order to limit the height of the TeamCard.
                            It follows the stackoverflow example above except we use the div instead of Typography.
                            */
                        }
                        <div>
                            <TeamCardV2
                                teamId={this.state.selectedTeamId}
                                numOfPlayersRequired={this.props.numOfPlayersRequired}
                                handleTeamClick={this.handleTeamClick}
                                isSelected={true}
                            />
                        </div>
                        <TeamListContainer
                            teamId={this.state.selectedTeamId}
                            isDisabled={true}
                        />
                    </Grid>
                </Grid>
            )
        }

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
