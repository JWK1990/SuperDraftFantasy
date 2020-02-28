import React from "react";
import DraftService from "./DraftService";
import DraftRoomPlayers from "./players/Players";
import DraftRoomBlock from "./block/Block";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import AuthService from '../login/AuthService';

let stompClient = null;

class DraftRoom extends React.Component {

    initialDraftDetails = {
        id: '',
        name: '',
        numOfTeam: '',
        roster: '',
        status: '',
        budget: '',
        onTheBlockTimer: '',
        bidTimer: '',
        coaches: [],
    }

    initialBlock = {
        player: '',
        team: '',
        bidPrice: '',
        onTheBlockTimeRemaining: '',
        bidTimeRemaining: '',
    }

    constructor(props) {
        super(props);
        this.state = {
            currentCoachId: '',
            draftDetails: this.initialDraftDetails,
            players: [],
            block: this.initialBlock,
            stompClient: '',
            errorText: '',
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
        stompClient.debug = null;
        stompClient.connect({}, this.onConnected, this.onError);
    };

    onConnected = () => {
        stompClient.subscribe('/bidding/rounds', this.onStartNextRoundReceived);
        stompClient.subscribe('/bidding/adds', this.onAddToBlockReceived);
        stompClient.subscribe('/bidding/bids', this.onBidReceived);
        this.setState({stompClient: stompClient});
    };

    sendStartNextRound = () => {
        // TODO: Add condition to check if Draft is still active.
        if (stompClient) {
            stompClient.send("/app/startNextRound", {}, JSON.stringify({additionalTime: 20}));
        }
    }

    sendAddToBlock = (selectedPlayerId, initialBid) => {
        if (stompClient) {
            const addToBlockDetails = {
                playerId: selectedPlayerId,
                teamId: this.state.currentCoachId,
                bidPrice: initialBid,
                additionalTime: 10,
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

    onStartNextRoundReceived = (payload) => {
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        const startNextRoundDetails = JSON.parse(payload.body);
        this.setState(prevState => ({
            ...prevState,
            block: {
                player: '',
                team: this.getTeamDetails(startNextRoundDetails.teamId),
                bidPrice: '',
            }
        }));
        this.setAddToBlockTimer(startNextRoundDetails.endTime);
    };

    onAddToBlockReceived = (payload) => {
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        const addToBlockDetails = JSON.parse(payload.body);
        this.setState(prevState => ({
            ...prevState,
            block: {
                player: this.getPlayerDetails(addToBlockDetails.playerId),
                team: this.getTeamDetails(addToBlockDetails.teamId),
                bidPrice: addToBlockDetails.bidPrice,
            }
        }));
        this.setBidTimer(addToBlockDetails.endTime);
    };

    onBidReceived = (payload) => {
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        const bidDetails = JSON.parse(payload.body);
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                team: this.getTeamDetails(bidDetails.teamId),
                bidPrice: bidDetails.bidPrice,
            }
        }));
        this.setBidTimer(bidDetails.endTime);
    };

    setAddToBlockTimer = (endTime) => {
        this.addToBlockTimerInterval = setInterval(() => {
            this.setState(prevState => ({
                ...prevState,
                block: {
                    ...prevState.block,
                    addToBlockTimeRemaining: Math.round((new Date(endTime).getTime() - Date.now())/1000),
                    bidTimeRemaining: '',
                }
            }));
            if(this.state.block.addToBlockTimeRemaining <= 0) {
                clearInterval(this.addToBlockTimerInterval);
                this.sendAddToBlock(null, null);
            }
        }, 1000);
    };

    setBidTimer = (endTime) => {
        this.bidTimerInterval = setInterval(() => {
            this.setState(prevState => ({
                ...prevState,
                block: {
                    ...prevState.block,
                    addToBlockTimeRemaining: '',
                    bidTimeRemaining: Math.round((new Date(endTime).getTime() - Date.now())/1000)
                }
            }));
            if(this.state.block.bidTimeRemaining <= 0) {
                clearInterval(this.bidTimerInterval);
                this.draftPlayer(this.state.block.team.id, this.state.block.player.id);
                this.sendStartNextRound();
            }
        }, 1000);
    };

    getPlayerDetails = (playerId) => {
        return this.state.players.find(player => player.id === playerId);
    };

    getTeamDetails = (teamId) => {
        return this.state.draftDetails.coaches.find(coach => coach.id === teamId);
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
    };

    getDraft = () => {
        DraftService.getDraft(2)
            .then(response => {
                if(response.status === 200) {
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

    draftPlayer = (teamId, playerId) => {
        DraftService.draftPlayer(teamId, playerId)
            .then(response => {
                if(response.status === 200) {
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
                <DraftRoomBlock block={this.state.block} sendBid={this.sendBid}/>
                <DraftRoomPlayers players={this.state.players} sendAddToBlock={this.sendAddToBlock}/>
            </div>
        )
    }

};

export default DraftRoom;