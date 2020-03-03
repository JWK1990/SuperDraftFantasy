import React from "react";
import DraftService from "./DraftService";
import DraftRoomPlayers from "./players/Players";
import DraftRoomBlock from "./block/Block";
import MyTeam from "./teams/MyTeam";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import AuthService from '../login/AuthService';
import { appendFileSync } from "fs";

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
        onTheBlockCoachId: '',
    }

    initialCoaches = {
        teamId: '',
        userId: '',
        username: '',
        commissioner: '',
        team: this.initialTeam,
    }

    initialTeam = {
        id: '',
        name: '',
        budget: '',
        players: [],
    }

    initialBlock = {
        onTheBlockCoach: '',
        player: '',
        bidder: '',
        bidPrice: '',
        onTheBlockTimeRemaining: '',
        bidTimeRemaining: '',
        isBidDisabled: true,
    }

    initialVacantPositions = {
        DEF: true,
        MID: true,
        RUC: true,
        FWD: true,
        BENCH: true,
    }

    constructor(props) {
        super(props);
        this.state = {
            currentCoach: '',
            draftDetails: this.initialDraftDetails,
            coaches: this.initialCoaches,
            players: [],
            block: this.initialBlock,
            vacantPositions: this.initialVacantPositions,
            bestAvailablePlayerId: 1,
            stompClient: '',
            errorText: '',
            isDataLoaded: false,
        };
        this.getDraft = this.getDraft.bind(this);
    }

    async componentDidMount() {

        this.connect();

        const draftDetails = await DraftService.getDraft(1);
        const playerDetails = await DraftService.getPlayers();

        this.setInitialState(draftDetails, playerDetails);
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
            stompClient.send("/app/startNextRound", {}, JSON.stringify({additionalTime: this.state.draftDetails.onTheBlockTimer}));
        }
    }

    sendAddToBlock = (selectedPlayerId, initialBid) => {
        if (stompClient) {
            const addToBlockDetails = {
                playerId: selectedPlayerId,
                teamId: this.state.currentCoach.id,
                bidPrice: initialBid,
                additionalTime: this.state.draftDetails.bidTimer,
            };
            stompClient.send("/app/addToBlock", {}, JSON.stringify(addToBlockDetails));
        }
    };

    sendBid = () => {
        if (stompClient) {
            const bidDetails = {
                teamId: this.state.currentCoach.id,
                bidPrice: this.state.block.bidPrice + 1,
                additionalTime: this.state.draftDetails.bidTimer
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
                ...prevState.block,
                player: '',
                team: this.getTeamDetails(startNextRoundDetails.teamId),
                bidPrice: '',
            }
        }));
        this.setOnTheBlockCoach();
        this.setAddToBlockTimer(startNextRoundDetails.endTime);
    };

    setOnTheBlockCoach = () => {
        const coaches = this.state.coaches;
        let draftedPlayerCount = 0;
        coaches.forEach(coach => draftedPlayerCount += coach.team.players.length);
        let currentRound = Math.floor(draftedPlayerCount/coaches.length);
        let currentIndex = Math.ceil(draftedPlayerCount - (currentRound * coaches.length));
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                onTheBlockCoach: coaches[currentIndex].id
            }
        }));
    }

    onAddToBlockReceived = (payload) => {
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        const addToBlockDetails = JSON.parse(payload.body);
        const playerDetails = this.getPlayerDetails(addToBlockDetails.playerId);
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                player: playerDetails,
                bidder: this.getTeamDetails(addToBlockDetails.teamId),
                bidPrice: addToBlockDetails.bidPrice,
                isBidDisabled: !this.isSlotAvailableForPlayer(playerDetails),
            }
        }));
        this.setBidTimer(addToBlockDetails.endTime);
    };

    onBidReceived = (payload) => {
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        const bidDetails = JSON.parse(payload.body);
        const playerDetails = this.state.block.player;
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                bidder: this.getTeamDetails(bidDetails.teamId),
                bidPrice: bidDetails.bidPrice,
                isBidDisabled: !this.isSlotAvailableForPlayer(playerDetails),
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
                this.sendAddToBlock(this.state.bestAvailablePlayerId, 1);
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
                this.draftPlayer(this.state.block.bidder.id, this.state.block.player.id, this.state.block.bidPrice);
            }
        }, 1000);
    };

    getPlayerDetails = (playerId) => {
        return this.state.players.find(player => player.id === playerId);
    };

    getTeamDetails = (teamId) => {
        return this.state.coaches.find(coach => coach.team.id === teamId);
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

    setInitialState = (draftData, playerData) => {
        this.setDraftDetails(draftData.data);
        this.setCoaches(draftData.data.coaches);
        this.setBlock(draftData.data.onTheBlockCoachId);
        this.setCurrentCoach(draftData.data);

        const playersList = playerData.data;
        this.setPlayerAvailability(playersList, this.state.coaches);
        this.setState({players: playersList})

        this.setState({isDataLoaded: true});
    }

    getDraft = () => {
        DraftService.getDraft(1)
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

    setDraftDetails = (draft) => {
        const draftDetails = {
            id: draft.id,
            name: draft.name,
            numOfTeams: draft.numOfTeams,
            roster: draft.roster,
            status: draft.status,
            budget: draft.budget,
            onTheBlockTimer: draft.onTheBlockTimer,
            bidTimer: draft.bidTimer,
        }
        this.setState({draftDetails: draftDetails});
    }

    setCoaches = (coachList) => {
        let coachDetails = [];
        coachList.forEach(coach => {
            const coachToAdd = {
                id: coach.id,
                userId: coach.user.id,
                username: coach.user.username,
                commissioner: coach.type === "COMMISSIONER",
                team: coach.team,
            }
            coachDetails.push(coachToAdd);
        });
        this.setState({coaches: coachDetails});
    }

    setBlock = (onTheBlockCoach) => {
        let updatedBlock = this.state.block;
        updatedBlock.onTheBlockCoach = onTheBlockCoach;
        this.setState({block: updatedBlock});
        console.log('Block Set: ', updatedBlock);
    }

    getPlayers = () => {
        DraftService.getPlayers()
            .then(response => {
                if(response.status === 200) {
                    const playersList = response.data;
                    this.setPlayerAvailability(playersList, this.state.coaches);
                    this.setState({players: playersList})
                } else {
                    this.setState({errorText: response.data.message});
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    draftPlayer = (teamId, playerId, salePrice) => {
        DraftService.draftPlayer(teamId, playerId, salePrice)
            .then(response => {
                if(response.status === 200) {
                    this.updateCoaches(response.data);
                    this.sendStartNextRound();
                } else {
                    this.setState({errorText: response.data.message});
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    updateCoaches = (updatedTeam) => {
        let updatedCoaches = this.state.coaches;
        const indexOfWinningCoach = updatedCoaches.findIndex(coach => coach.team.id == updatedTeam.id);
        updatedCoaches[indexOfWinningCoach].team = updatedTeam;
        this.setState({coaches: updatedCoaches});
    };

    setCurrentCoach = () => {
        const currentCoach = this.state.coaches.find(coach => coach.username === AuthService.getCurrentUser());
        this.setState({currentCoach: currentCoach});
    };

    getCurrentCoachesPlayers = () => {
        return this.state.coaches[0].team.players;
    }

    setVacantPositions = (playerList) => {
        const vacantPositionKeys = Object.keys(this.state.vacantPositions);
        const updatedVacantPositions = this.state.vacantPositions;
        for(let i=0; i < vacantPositionKeys.length; i++) {
            const currentPosition = vacantPositionKeys[i];
            const currentPositionList = playerList[currentPosition];
            if(currentPositionList.findIndex(slot => slot.content.vacant) > -1) {
                updatedVacantPositions[currentPosition] = true;
                this.updateVacantPosition(currentPosition, true);
            } else {
                updatedVacantPositions[currentPosition] = false;
                this.updateVacantPosition(currentPosition, false);
            }
        }
        this.setState({updatedVacantPositions}, () => {
            this.setIsBidDisabled();
            this.setBestAvailablePlayerId();
        });

    };

    updateVacantPosition = (vacantPosition, vacant) => {
        this.setState(prevState => ({
            ...prevState,
            vacantPositions: {
                ...prevState.vacantPositions,
                [vacantPosition]: vacant,
            }
        }))
    }

    setBestAvailablePlayerId = () => {
        const updatedBestAvailablePlayerId = this.state.players.find(player => {
            return player.isAvailable && this.isSlotAvailableForPlayer(player);
        }).id;

        this.setState({bestAvailablePlayerId: updatedBestAvailablePlayerId});
    }

    setIsBidDisabled = () => {
        let currentBlock = this.state.block;
        currentBlock.isBidDisabled = !this.isSlotAvailableForPlayer(currentBlock.player);
        this.setState({currentBlock});
    }

    isSlotAvailableForPlayer = (player) => {
        const benchSlotAvailable = this.state.vacantPositions["BENCH"];
        const primarySlotAvailable = this.state.vacantPositions[player.primaryPosition];
        const secondarySlotAvailable = player.secondaryPosition ? this.state.vacantPositions[player.secondaryPosition] : false;
        return benchSlotAvailable || primarySlotAvailable || secondarySlotAvailable;
    };

    setPlayerAvailability = (playerList, coachList) => {        
        playerList.forEach(player => {
            player.isAvailable = true;
            for(let i= 0; i < coachList.length; i++) {
                const isDrafted = coachList[i].team.players.findIndex(draftedPlayer => draftedPlayer.id == player.id) > -1;
                if(isDrafted) {
                    player.isAvailable = false;
                    break;
                }
            }
        });
        return playerList;
    };
    
    render() {
        if (!this.state.isDataLoaded) {
            return <div />
        }

        return (
            <div>
                <div>
                    <p>Draft Details: {this.state.draftDetails.name}</p>
                    <p>Current OTB Coach: {this.state.block.onTheBlockCoach}</p>
                </div>
                <DraftRoomBlock
                    block={this.state.block}
                    sendBid={this.sendBid}
                    vacantPositions={this.state.vacantPositions}
                />
                <DraftRoomPlayers
                    players={this.state.players}
                    sendAddToBlock={this.sendAddToBlock}
                    vacantPositions={this.state.vacantPositions}
                />
                <MyTeam 
                    playerList={this.state.coaches[4].team.players}
                    roster={this.state.draftDetails.roster}
                    teamId={this.state.currentCoach.id}
                    setVacantPositions={this.setVacantPositions}
                />
            </div>
        )
    }

};

export default DraftRoom;