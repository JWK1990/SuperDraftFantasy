import React from "react";
import DraftService from "./DraftService";
import DraftRoomPlayers from "./players/Players";
import DraftRoomBlock from "./block/Block";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import AuthService from '../login/AuthService';

let stompClient = null;

class DraftRoom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCoachId: '',
            draftDetails: '',
            players: [],
            block: {
                player: '',
                team: '',
                bidPrice: '',
                endTime: ''
            },
            stompClient: '',
            errorText: '',
            timeRemaining: '',
        };
        this.getDraft = this.getDraft.bind(this);
    }

    componentDidMount() {
        this.connect();
        this.getDraft();
        this.getPlayers();
    }

    connect = () => {
        const sockJS = new SockJS("http://localhost:8080/api-superdraftfantasy/superdraftfantasy-websocket");
        stompClient = Stomp.over(sockJS);
        stompClient.connect({}, this.onConnected, this.onError);
    };

    onConnected = () => {
        stompClient.subscribe('/bidding/addsToBlock', this.onAddToBlockReceived);
        stompClient.subscribe('/bidding/bids', this.onBidReceived);
        this.setState({stompClient: stompClient});
    };

    sendAddToBlock = () => {
        if (stompClient) {
            const addToBlockDetails = {
                playerId: 1,
                teamId: this.state.currentCoachId,
                bidPrice: 100,
                additionalTime: 20,
            };
            stompClient.send("/app/addToBlock", {}, JSON.stringify(addToBlockDetails));
        }
    };

    sendBid = () => {
        if (stompClient) {
            const bidDetails = {
                teamId: this.state.currentCoachId,
                bidPrice: this.state.block.bidPrice + 1,
                additionalTime: 10
            };
            stompClient.send("/app/bid", {}, JSON.stringify(bidDetails));
        }
    };

    onAddToBlockReceived = (payload) => {
        const addToBlockDetails = JSON.parse(payload.body);
        const block = {
            player: this.getPlayerDetails(addToBlockDetails.playerId),
            team: this.getTeamDetails(addToBlockDetails.teamId),
            bidPrice: addToBlockDetails.bidPrice,
            endTime: addToBlockDetails.endTime
        };
        this.setState({block: block});
        console.log('EndTime:', new Date(this.state.block.endTime));
        console.log(Date.now());
        this.interval = setInterval(() => this.setState({
            timeRemaining: Math.round((new Date(this.state.block.endTime).getTime() - Date.now())/1000)}), 1000);
    };

    getPlayerDetails = (playerId) => {
        return this.state.players.find(player => player.id === playerId);
    };

    getTeamDetails = (teamId) => {
        return this.state.draftDetails.coaches.find(coach => coach.id === teamId);
    };

    onBidReceived = (payload) => {
        const bidDetails = JSON.parse(payload.body);
        const block = {
            player: this.state.block.player,
            teamId: bidDetails.teamId,
            bidPrice: bidDetails.bidPrice,
            endTime: bidDetails.endTime
        }
        this.setState({block: block});
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

    getDraft = () => {
        DraftService.getDraft(1)
            .then(response => {
                if(response.status === 200) {
                    console.log("Draft Received.");
                    this.setState({draftDetails: response.data})
                    this.setCurrentCoachId(response.data);
                } else {
                    this.setState({errorText: response.data.message});
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    getPlayers = () => {
        DraftService.getPlayers()
            .then(response => {
                if(response.status === 200) {
                    this.setState({players: response.data})
                } else {
                    this.setState({errorText: response.data.message});
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    setCurrentCoachId = () => {
        const coachId = this.state.draftDetails.coaches.find(coach => coach.user.username === AuthService.getCurrentUser()).id;
        this.setState({currentCoachId: coachId});
    };

    render() {
        return (
            <div>
                <div>
                    <p>Draft Details: {this.state.draftDetails.name}</p>
                </div>
                <DraftRoomBlock block={this.state.block} sendBid={this.sendBid} sendAddToBlock={this.sendAddToBlock}/>
                <DraftRoomPlayers players={this.state.players}/>
                <p>Timer: {this.state.timeRemaining} </p>
            </div>
        )
    }

};

export default DraftRoom;