import * as SockJS from "sockjs-client";
import ConfigurationHelper from "../../utils/ConfigurationUtils";
import * as Stomp from "stompjs";

export const CONNECT_WEBSOCKET_STARTED = 'CONNECT_WEBSOCKET_STARTED';
export const CONNECT_WEBSOCKET_SUCCESS = 'CONNECT_WEBSOCKET_SUCCESS';
export const CONNECT_WEBSOCKET_FAILURE = 'CONNECT_WEBSOCKET_FAILURE';

let stompClient = null;

export const connectWebSocketAction = () => {
    return dispatch => {
        const onSuccessfulConnection = () => {
            dispatch(connectWebSocketSuccessAction());
        }
        const onFailedConnection = error => {
            dispatch(connectWebSocketFailureAction(error));
        }
        
        dispatch(connectWebSocketStartedAction());

        const sockJS = new SockJS(ConfigurationHelper.getWebsocketUrl());
        stompClient = Stomp.over(sockJS);
        stompClient.debug = null;
        stompClient.connect(
            {},
            onSuccessfulConnection,
            onFailedConnection
        )
    }
}

export const connectWebSocketStartedAction = () => ({
    type: CONNECT_WEBSOCKET_STARTED
});

export const connectWebSocketSuccessAction = () => ({
    type: CONNECT_WEBSOCKET_SUCCESS,
    payload: stompClient
});

export const connectWebSocketFailureAction = error => ({
    type: CONNECT_WEBSOCKET_FAILURE,
    payload: error
});
