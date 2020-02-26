import React from 'react';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

let stompClient = null;

class WebSocket extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: '',
            bids: [],
        };
    }

    connect = () => {
        const sockJS = new SockJS("http://localhost:8080/api-superdraftfantasy/superdraftfantasy-websocket");
        stompClient = Stomp.over(sockJS);
        stompClient.connect({}, this.onConnected, this.onError);
    };

    onConnected = () => {
        stompClient.subscribe('/bidding/bids', this.onMessageReceived);
    };

    sendMessage = () => {
        if (stompClient) {
            const chatMessage = {
                bidder: "Test Bidder",
                bid: 10,
            };
            // send public message
            stompClient.send("/app/bid", {}, JSON.stringify(chatMessage));
        }
    };

    onMessageReceived = (payload) => {
        this.state.bids.push(payload);
        console.log('Bid Received: ', this.state.bids);
    };

    onError = (error) => {
        this.setState({
            error: 'Could not connect you to the Draft Room Server. Please refresh this page and try again!'
        })
    };

    disconnect = () => {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        console.log("Disconnected");
    };


    render() {
        return (
            <div>
                <button onClick={this.connect} />
                <button onClick={this.sendMessage} />
            </div>
        );
    }
}

export default WebSocket;