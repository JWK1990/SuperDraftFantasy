import {initialWebSocketState} from "../state/WebSocketState";
import {
    CONNECT_WEBSOCKET_FAILURE,
    CONNECT_WEBSOCKET_STARTED,
    CONNECT_WEBSOCKET_SUCCESS
} from "../actions/WebSocketActions";

export function webSocketReducer(state = initialWebSocketState, action) {
    switch(action.type) {

        case CONNECT_WEBSOCKET_STARTED:
            return {
                ...state,
                loading: true
            };

        case CONNECT_WEBSOCKET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            };

        case CONNECT_WEBSOCKET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: null
            };

        default:
            return state;
    };
}
