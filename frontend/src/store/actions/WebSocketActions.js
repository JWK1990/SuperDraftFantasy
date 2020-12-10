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
        // The below sockJsProtocols have been added so that we only use the below 2 transport types.
        // This was added as we were getting errors in the Network tab for the other protocols in Production (incl WebSockets).
        // The supported Browsers for these transports can be seen in the below article.
        // WebSockets has also been disabled in the Backend. The long term solution is to get Websockets to work in Production.
        // https://github.com/sockjs/sockjs-client#supported-transports-by-browser-html-served-from-http-or-https.
        const sockJsProtocols = ["xhr-streaming", "xhr-polling"];
        const sockJS = new SockJS(ConfigurationHelper.getWebsocketUrl(), null, {transports: sockJsProtocols});
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
