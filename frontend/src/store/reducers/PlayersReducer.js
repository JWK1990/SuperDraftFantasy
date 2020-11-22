import {
    GET_PLAYERS_BY_DRAFT_FAILURE,
    GET_PLAYERS_BY_DRAFT_STARTED,
    GET_PLAYERS_BY_DRAFT_SUCCESS,
    UPDATE_PLAYER_AVAILABILITY
} from "../actions/PlayerActions";
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

        case UPDATE_PLAYER_AVAILABILITY:
            const updatedPlayers = [...state.data];
            let updatedPlayer = updatedPlayers.find(player => player.id === action.payload.id);
            updatedPlayer.available = false;
            return {
                ...state,
                loading: false,
                error: null,
                data: updatedPlayers,
            };

        default:
            return state;
    }
}
