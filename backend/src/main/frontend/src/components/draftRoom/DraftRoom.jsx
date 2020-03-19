import React from "react";
import DraftService from "../../services/DraftService";
import DraftRoomPlayers from "./players/Players";
import DraftRoomBlock from "./block/Block";
import MyTeam from "./teams/MyTeam";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import AuthService from '../../services/AuthService';
import ConfigurationHelper from '../../helpers/ConfigHelper.js';
import {userSelector} from "../../store/selectors/UserSelector";

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
        maxBid: '',
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
            currentCoachId: '',
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
        const sockJS = new SockJS(ConfigurationHelper.getWebsocketUrl());
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
                teamId: this.state.currentCoachId,
                bidPrice: initialBid,
                additionalTime: this.state.draftDetails.bidTimer,
            };
            stompClient.send("/app/addToBlock", {}, JSON.stringify(addToBlockDetails));
        }
    };

    sendBid = () => {
        if (stompClient) {
            const bidDetails = {
                teamId: this.state.currentCoachId,
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
                isBidDisabled: true,
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
        const player = this.getPlayerDetails(addToBlockDetails.playerId);
        const bidPrice = addToBlockDetails.bidPrice;
        console.log("Add to block bidDisabled: ", this.getIsBidDisabled(bidPrice, player));    
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                player: player,
                bidder: this.getTeamDetails(addToBlockDetails.teamId),
                bidPrice: bidPrice,
                isBidDisabled: this.getIsBidDisabled(bidPrice, player),
            }
        }));
        this.setBidTimer(addToBlockDetails.endTime);
    };

    onBidReceived = (payload) => {
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        const bidDetails = JSON.parse(payload.body);
        const player = this.state.block.player;
        const bidPrice = bidDetails.bidPrice;
        console.log("On bid recevied is bid disabled: ", !this.getIsBudgetAvailableForPlayer(bidPrice))
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                bidder: this.getTeamDetails(bidDetails.teamId),
                bidPrice: bidPrice,
                isBidDisabled: this.getIsBidDisabled(bidPrice, player),
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
                if(this.state.currentCoachId == this.state.block.onTheBlockCoach) {
                    this.sendAddToBlock(this.state.bestAvailablePlayerId, 1);
                }
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
        this.setPlayersAvailability(playersList, this.state.coaches);
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
            coach.team.maxBid = this.getMaxBid(coach.team);
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
    }

    getMaxBid = (team) => {
        const numOfPlayersRequired = this.getNumOfSlotsPerTeam();
        const numOfPlayersDrafted = team.players.length;
        return team.budget - (numOfPlayersRequired - numOfPlayersDrafted -1);
    }

    setMaxBids = () => {
        const updatedCoachList = this.state.coaches; 
        updatedCoachList.forEach(coach => {
            const team = coach.team;
            team.maxBid = this.getMaxBid(team);
        })
        this.setState({coaches: updatedCoachList});
    }

    getPlayers = () => {
        DraftService.getPlayers()
            .then(response => {
                if(response.status === 200) {
                    const playersList = response.data;
                    this.setPlayersAvailability(playersList, this.state.coaches);
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
                    this.updatePlayerAvailability(playerId);
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
        updatedTeam.maxBid = this.getMaxBid(updatedTeam);
        updatedCoaches[indexOfWinningCoach].team = updatedTeam;
        this.setState({coaches: updatedCoaches});
    };

    setCurrentCoach = () => {
        const currentCoachId = this.state.coaches.find(coach => coach.username == AuthService.getCurrentUser()).id;
        this.setState({currentCoachId: currentCoachId});
    };

    getCurrentCoachPlayers = () => {
        const currentCoachId = this.state.currentCoachId;
        return this.state.coaches.find(coach => coach.id == currentCoachId).team.players;
    }

    getCurrentCoachPlayerCount = () => {
        const currentCoachId = this.state.currentCoachId;
        return this.state.coaches.find(coach => coach.id == currentCoachId).team.players.length;
    }

    getCurrentCoachMaxBid = () => {
        const currentCoachId = this.state.currentCoachId;
        return this.state.coaches.find(coach => coach.id == currentCoachId).team.maxBid;
    }

    getNumOfSlotsPerTeam = () => {
        const roster = this.state.draftDetails.roster;
        return roster.def + roster.mid + roster.ruc + roster.fwd + roster.bench;
    }

    // 1. Sets/Updates the current coach's vacantPositions state.
    // 2. Sets/Updates the isBidDisabled state.
    // 3. Updates the bestAvailablePlayerId state.
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
            this.setState({isBidDisabled: this.getIsBidDisabled()});
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
        if(this.getIsTeamFull()){
            return;
        }
        const updatedBestAvailablePlayerId = this.state.players.find(player => {
            return player.isAvailable && this.getIsSlotAvailableForPlayer(player);
        }).id;

        this.setState({bestAvailablePlayerId: updatedBestAvailablePlayerId});
    }

    getIsBidDisabled = (bidPrice, player) => {
        console.log("Coach Max Bid: ", this.getCurrentCoachMaxBid());
        console.log("Draft Budget: ", this.state.draftDetails.budget);
        console.log("Bid Price: ", bidPrice);
        console.log("Player: ", player);
        if(bidPrice && player) {
            return !this.getIsBudgetAvailableForPlayer(bidPrice) || !this.getIsSlotAvailableForPlayer(player);
        }
        return true;
    }

    getIsBudgetAvailableForPlayer = (bidPrice) => {
        if(this.getIsTeamFull()) {
            return false;
        }
        const currentCoachMaxBid = this.getCurrentCoachMaxBid();
        const nextBidPrice = bidPrice + 1;
        return currentCoachMaxBid >= nextBidPrice;
    }

    getIsSlotAvailableForPlayer = (player) => {
        if(this.getIsTeamFull()) {
            return false;
        }
        const benchSlotAvailable = this.state.vacantPositions["BENCH"];
        const primarySlotAvailable = this.state.vacantPositions[player.primaryPosition];
        const secondarySlotAvailable = player.secondaryPosition ? this.state.vacantPositions[player.secondaryPosition] : false;
        return benchSlotAvailable || primarySlotAvailable || secondarySlotAvailable;
    };

    getIsTeamFull = () => {
        const currentCoachPlayerCount = this.getCurrentCoachPlayerCount();
        const numOfSlotsPerTeam = this.getNumOfSlotsPerTeam();
        return currentCoachPlayerCount >= numOfSlotsPerTeam;
    };

    setPlayersAvailability = (playerList, coachList) => {        
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

    updatePlayerAvailability = (playerId) => {
        let playerToUpdate = this.state.players.find(player => player.id == playerId);
        playerToUpdate.isAvailable = false;
        this.setState({playerToUpdate});
    }
    
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
                    playerList={this.getCurrentCoachPlayers()}
                    roster={this.state.draftDetails.roster}
                    teamId={this.state.currentCoachId}
                    setVacantPositions={this.setVacantPositions}
                />
            </div>
        )
    }

};

const mapStateToProps = state => {
    return {
        user: userSelector(state)
    }
}


export default DraftRoom;
