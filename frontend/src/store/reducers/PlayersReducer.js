import {GET_PLAYERS_BY_DRAFT_FAILURE, GET_PLAYERS_BY_DRAFT_STARTED, GET_PLAYERS_BY_DRAFT_SUCCESS} from "../actions/PlayerActions";
import {initialPlayersState} from "../state/PlayersState";

export function playersReducer(state = initialPlayersState, action) {
    switch(action.type) {

        case GET_PLAYERS_BY_DRAFT_STARTED:
            return {
                ...state,
                loading: true
            };

        case GET_PLAYERS_BY_DRAFT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            };

        case GET_PLAYERS_BY_DRAFT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    };
}
