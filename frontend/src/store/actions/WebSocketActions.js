import DraftService from "../../services/DraftService";
import * as SockJS from "sockjs-client";
import ConfigurationHelper from "../../utils/ConfigurationUtils";
import * as Stomp from "stompjs";

export const CONNECT_WEBSOCKET_STARTED = 'CONNECT_WEBSOCKET_STARTED';
export const CONNECT_WEBSOCKET_SUCCESS = 'CONNECT_WEBSOCKET_SUCCESS';
export const CONNECT_WEBSOCKET_FAILURE = 'CONNECT_WEBSOCKET_FAILURE';

export const connectWebSocketAction = () => {
    return dispatch => {
        dispatch(connectWebSocketStartedAction());

        const sockJS = new SockJS(ConfigurationHelper.getWebsocketUrl());
        const stompClient = Stomp.over(sockJS);
        stompClient.debug = null;
        stompClient.connect(
            {},
            dispatch(connectWebSocketSuccessAction(stompClient))
        )
    }
}

export const connectWebSocketStartedAction = () => ({
    type: CONNECT_WEBSOCKET_STARTED
});

export const connectWebSocketSuccessAction = stompClient => ({
    type: CONNECT_WEBSOCKET_SUCCESS,
    payload: stompClient
});

export const connectWebSocketFailureAction = error => ({
    type: CONNECT_WEBSOCKET_FAILURE,
    payload: error
});
