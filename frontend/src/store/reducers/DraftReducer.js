import {
    CREATE_DRAFT_FAILURE,
    CREATE_DRAFT_STARTED,
    CREATE_DRAFT_SUCCESS,
    GET_DRAFT_FAILURE,
    GET_DRAFT_STARTED,
    GET_DRAFT_SUCCESS,
    GET_MY_DRAFTS_FAILURE,
    GET_MY_DRAFTS_STARTED,
    GET_MY_DRAFTS_SUCCESS,
    JOIN_DRAFT_FAILURE,
    JOIN_DRAFT_STARTED,
    JOIN_DRAFT_SUCCESS,
    REORDER_TEAM_LIST,
    START_DRAFT_FAILURE,
    START_DRAFT_STARTED,
    STOP_DRAFT_FAILURE,
    STOP_DRAFT_STARTED,
    UPDATE_DRAFT_STATUS,
    UPDATE_MY_TEAM_POSITION_FAILURE,
    UPDATE_MY_TEAM_POSITION_STARTED,
    UPDATE_MY_TEAM_POSITION_SUCCESS,
    UPDATE_TEAM
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

        case UPDATE_DRAFT_STATUS:
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
            return {
                ...state,
                loading: false,
                error: null,
                data: {
                    ...state.data,
                    teams: state.data.teams.map(team => (
                        team.id !== action.payload.id
                            ? team
                            : action.payload
                    )),
                }
            }

        case REORDER_TEAM_LIST:
            return {
                ...state,
                loading: false,
                error: null,
                data: {
                    ...state.data,
                    teams: state.data.teams.map(team => (
                        team.orderIndex === action.payload.indexOf(team.id)
                            ? team
                            : {...team, orderIndex: action.payload.indexOf(team.id)}
                    ))
                }
            }

        case UPDATE_MY_TEAM_POSITION_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: {
                    ...state.data,
                    // Map is used to ensure immutable update.
                    teams: state.data.teams.map((team) => (
                        team.id !== action.payload.teamId
                            ? team
                        : {...team, teamPlayerJoins: team.teamPlayerJoins.map(teamPlayerJoin => (
                            teamPlayerJoin.player.id !== action.payload.playerId
                                ? teamPlayerJoin
                                : {...teamPlayerJoin, myTeamPositionType: action.payload.myTeamPositionType}))
                        }
                    ))
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
