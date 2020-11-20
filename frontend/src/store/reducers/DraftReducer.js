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
    STOP_DRAFT_SUCCESS
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

        case CREATE_DRAFT_FAILURE:
        case GET_DRAFT_FAILURE:
        case JOIN_DRAFT_FAILURE:
        case GET_MY_DRAFTS_FAILURE:
        case START_DRAFT_FAILURE:
        case STOP_DRAFT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case UPDATE_TEAM:
            const teamId = action.payload.id;
            return {
                ...state,
                loading: false,
                error: null,
                data: {
                    ...state.data,
                    teams: state.data.teams.map((team) => (
                        team.id === teamId ? action.payload : team
                    ))
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

        default:
            return state;
    }
}
