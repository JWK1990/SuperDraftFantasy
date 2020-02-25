import React from 'react';
import SockJsClient from 'react-stomp';

class WebSocket extends React.Component {
    constructor(props) {
        super(props);
    }

    sendMessage = (msg) => {
        this.clientRef.sendMessage('/bid', msg);
    }

    render() {
        return (
            <div>
                <SockJsClient url='http://localhost:8080/api-superdraftfantasy/superdraftfantasy-websocket' topics={['/bidding/bids']}
                              onMessage={(msg) => { console.log(msg); }}
                              ref={ (client) => { this.clientRef = client }} />
            </div>
        );
    }
}

export default WebSocket;