import {
    GET_DRAFT_FAILURE,
    GET_DRAFT_STARTED,
    GET_DRAFT_SUCCESS,
    UPDATE_TEAM,
    REORDER_TEAM_LIST,
    GET_MY_DRAFTS_STARTED,
    GET_MY_DRAFTS_FAILURE,
    GET_MY_DRAFTS_SUCCESS,
    CREATE_DRAFT_STARTED,
    CREATE_DRAFT_FAILURE,
    CREATE_DRAFT_SUCCESS,
    JOIN_DRAFT_STARTED,
    JOIN_DRAFT_SUCCESS,
    JOIN_DRAFT_FAILURE,
    START_DRAFT_STARTED,
    START_DRAFT_FAILURE,
    START_DRAFT_SUCCESS,
    STOP_DRAFT_STARTED,
    STOP_DRAFT_FAILURE,
    STOP_DRAFT_SUCCESS,
    UPDATE_MY_TEAM_POSITION_FAILURE,
    UPDATE_MY_TEAM_POSITION_STARTED,
    UPDATE_MY_TEAM_POSITION_SUCCESS
} from "../actions";
import {initialDraftState} from "../state/DraftState";

export function draftReducer(state = initialDraftState, action) {
    switch(action.type) {

        case CREATE_DRAFT_STARTED:
        case GET_DRAFT_STARTED:
        case JOIN_DRAFT_STARTED:
        case GET_MY_DRAFTS_STARTED:
        case START_DRAFT_STARTED:
        case STOP_DRAFT_STARTED:
        case UPDATE_MY_TEAM_POSITION_STARTED:
            return {
                ...state,
                loading: true
            };

        case CREATE_DRAFT_SUCCESS:
        case JOIN_DRAFT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            }

        case GET_DRAFT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            };

        case START_DRAFT_SUCCESS:
        case STOP_DRAFT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: {
                    ...state.data,
                    status: action.payload
                }
            }

        case GET_MY_DRAFTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                myDrafts: action.payload
            };

        case UPDATE_TEAM:
            const updatedTeams = [...state.data.teams];
            let updatedTeamIndex = updatedTeams.findIndex(team => team.id === action.payload.id);
            updatedTeams[updatedTeamIndex] = action.payload;
            return {
                ...state,
                loading: false,
                error: null,
                data: {
                    ...state.data,
                    teams: updatedTeams,
                }
            }

        case REORDER_TEAM_LIST:
            return {
                ...state,
                loading: false,
                error: null,
                data: {
                    ...state.data,
                    teams: state.data.teams.map((team) => (
                        team.orderIndex === action.payload.indexOf(team.id)
                            ? team
                            : {...team, orderIndex: action.payload.indexOf(team.id)}
                    ))
                }
            }

        case UPDATE_MY_TEAM_POSITION_SUCCESS:
            const teams = [...state.data.teams];
            const teamIndex = teams.findIndex(team => team.id === action.payload.teamId);
            const teamPlayerJoinIndex = teams[teamIndex].teamPlayerJoins.findIndex(
                teamPlayerJoin => teamPlayerJoin.player.id === action.payload.playerId
            );
            teams[teamIndex].teamPlayerJoins[teamPlayerJoinIndex].myTeamPosition = action.payload.myTeamPosition;
            return {
                ...state,
                loading: false,
                error: null,
                data: {
                    ...state.data,
                    teams: teams,
                }
            }


        case CREATE_DRAFT_FAILURE:
        case GET_DRAFT_FAILURE:
        case JOIN_DRAFT_FAILURE:
        case GET_MY_DRAFTS_FAILURE:
        case START_DRAFT_FAILURE:
        case STOP_DRAFT_FAILURE:
        case UPDATE_MY_TEAM_POSITION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}
