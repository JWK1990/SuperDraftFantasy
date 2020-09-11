import {GET_DRAFT_FAILURE, GET_DRAFT_STARTED, GET_DRAFT_SUCCESS, UPDATE_TEAM, REORDER_TEAM_LIST} from "../actions";
import {initialDraftState} from "../state/DraftState";

export function draftReducer(state = initialDraftState, action) {
    switch(action.type) {

        case GET_DRAFT_STARTED:
            return {
                ...state,
                loading: true
            };

        case GET_DRAFT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            };

        case GET_DRAFT_FAILURE:
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
