import React from "react";
import DraftService from "../../services/DraftService";
import DraftRoomPlayers from "./players/Players";
import DraftRoomBlock from "./block/Block";
import MyTeam from "./teams/MyTeam";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import ConfigurationHelper from '../../utils/ConfigurationUtils.js';
import {getDraftAction, updateTeamAction} from "../../store/actions";
import {connect} from "react-redux";
import {userSelector} from "../../store/selectors/UserSelectors"
import {currentTeamSelector, draftSelector, onTheBlockTeamSelector} from "../../store/selectors/DraftSelectors"
import {getPlayersByDraftAction} from "../../store/actions/PlayerActions";
import {playersSelector} from "../../store/selectors/PlayersSelectors";

let stompClient = null;

class DraftRoom extends React.Component {

    // TODO: Update to draftId.
    draftId = 12;

    initialBlock = {
        player: '',
        bidder: '',
        price: '',
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
            block: this.initialBlock,
            vacantPositions: this.initialVacantPositions,
            bestAvailablePlayerId: 1,
            stompClient: '',
            errorText: '',
            isPlayerDataLoaded: false,
            isDraftDataLoaded: false,
        };
    }

    componentDidMount() {
        this.connect();
        // TODO: Replace with draftId.
        this.props.getDraft(this.draftId);
        this.props.getPlayers(this.draftId);
    }

    async componentDidUpdate(prevProps) {
        if(this.props.players !== prevProps.players) {
            this.setState({isPlayerDataLoaded: true});
        }
        if(this.props.draft !== prevProps.draft) {
            this.setState({isDraftDataLoaded: true});
        }
    }

    connect = () => {
        const sockJS = new SockJS(ConfigurationHelper.getWebsocketUrl());
        stompClient = Stomp.over(sockJS);
        stompClient.debug = null;
        stompClient.connect({}, this.onConnected, this.onError);
    };

    onConnected = () => {
        stompClient.subscribe('/draft/rounds', this.onStartNextRoundReceived);
        stompClient.subscribe('/draft/addToBlocks', this.onAddToBlockReceived);
        stompClient.subscribe('/draft/bids', this.onBidReceived);
        stompClient.subscribe('/draft/teams', this.onTeamReceived);
        this.setState({stompClient: stompClient});
    };

    sendStartNextRound = () => {
        // TODO: Add condition to check if Draft is still active.
        if (stompClient) {
            stompClient.send("/app/startNextRound", {}, JSON.stringify({onTheBlockTimer: this.props.draft.onTheBlockTimer}));
        }
    }

    sendAddToBlock = (selectedPlayerId, initialBid) => {
        if (stompClient) {
            const addToBlockDetails = {
                draftId: this.props.draft.id,
                playerId: selectedPlayerId,
                teamId: this.props.currentTeam.id,
                price: initialBid,
                onTheBlockTimer: this.props.draft.onTheBlockTimer,
                bidTimer: this.props.draft.bidTimer
            };
            stompClient.send("/app/addToBlock", {}, JSON.stringify(addToBlockDetails));
            console.log('Add To Block Sent: ', addToBlockDetails);
        }
    };

    sendBid = () => {
        if (stompClient) {
            const bidDetails = {
                draftId: this.props.draft.id,
                playerId: this.state.block.player.id,
                teamId: this.props.currentTeam.id,
                price: this.state.block.price + 1,
                onTheBlockTimer: this.props.draft.onTheBlockTimer,
                bidTimer: this.props.draft.bidTimer,
            };
            stompClient.send("/app/bid", {}, JSON.stringify(bidDetails));
            console.log('Bid Send: ', bidDetails);
        }
    };

    onStartNextRoundReceived = (payload) => {
        console.log('Start Next Round Received: ', payload);
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        const startNextRoundDetails = JSON.parse(payload.body);
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                player: '',
                team: this.getTeamDetails(startNextRoundDetails.teamId),
                price: '',
                isBidDisabled: true,
            }
        }));
        this.setAddToBlockTimer(startNextRoundDetails.endTime);
    };



    onAddToBlockReceived = (payload) => {
        console.log('AddToBlock Received ', payload);
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        const addToBlockDetails = JSON.parse(payload.body);
        const player = this.getPlayerDetails(addToBlockDetails.playerId);
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                player: player,
                bidder: this.getTeamDetails(addToBlockDetails.teamId),
                price: addToBlockDetails.price,
                isBidDisabled: this.getIsBidDisabled(addToBlockDetails.price, player),
            }
        }));
        this.setBidTimer(addToBlockDetails.endTime);
    };

    onBidReceived = (payload) => {
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        const bidDetails = JSON.parse(payload.body);
        const player = this.state.block.player;
        const price = bidDetails.price;
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                bidder: this.getTeamDetails(bidDetails.teamId),
                price: price,
                isBidDisabled: this.getIsBidDisabled(price, player),
            }
        }));
        this.setBidTimer(bidDetails.endTime);
    };

    onTeamReceived = (payload) => {
        const team = JSON.parse(payload.body);
        console.log('Team Received: ', team)
        this.props.updateTeam(team);
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
                // if(this.props.currentTeam.id === this.props.onTheBlockTeam) {
                //     this.sendAddToBlock(this.state.bestAvailablePlayerId, 1);
                // }
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
                // this.draftPlayer(this.state.block.bidder.id, this.state.block.player.id, this.state.block.price);
            }
        }, 1000);
    };

    getPlayerDetails = (playerId) => {
        return this.props.players.find(player => player.id === playerId);
    };

    getTeamDetails = (teamId) => {
        return this.props.draft.teams.find(team => team.id === teamId);
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

    getMaxBid = (team) => {
        const numOfPlayersRequired = this.getNumOfSlotsPerTeam();
        const numOfPlayersDrafted = team.players.length;
        return team.budget - (numOfPlayersRequired - numOfPlayersDrafted - 1);
    }

    // TODO: Move to BE.
    draftPlayer = (teamId, playerId, salePrice) => {
        DraftService.draftPlayer(teamId, playerId, salePrice)
            .then(response => {
                if(response.status === 200) {
                    this.updateTeams(response.data);
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

    updateTeams = (updatedTeam) => {
        let updatedTeams = this.props.draft.teams;
        const indexOfWinningTeam = updatedTeams.findIndex(team => team.id === updatedTeam.id);
        updatedTeam.maxBid = this.getMaxBid(updatedTeam);
        updatedTeams[indexOfWinningTeam].team = updatedTeam;
        this.setState({teams: updatedTeams});
    };

    getCurrentCoachPlayers = () => {
        return this.props.currentTeam.players;
    }

    getCurrentTeamPlayerCount = () => {
        return this.props.currentTeam.players.length;
    }

    getCurrentCoachMaxBid = () => {
        return this.props.currentTeam.maxBid;
    }

    getNumOfSlotsPerTeam = () => {
        const roster = this.props.draft.roster;
        return roster.def + roster.mid + roster.ruc + roster.fwd + roster.bench;
    }

    // 1. Sets/Updates the current team's vacantPositions state.
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
        const updatedBestAvailablePlayerId = this.props.players.find(player => {
            return player.available && this.getIsSlotAvailableForPlayer(player);
        }).id;

        this.setState({bestAvailablePlayerId: updatedBestAvailablePlayerId});
    }

    getIsBidDisabled = (price, player) => {
        if(price && player) {
            return !this.getIsBudgetAvailableForPlayer(price) || !this.getIsSlotAvailableForPlayer(player);
        }
        return true;
    }

    getIsBudgetAvailableForPlayer = (price) => {
        if(this.getIsTeamFull()) {
            return false;
        }
        const currentTeamMaxBid = this.getCurrentCoachMaxBid();
        const nextBidPrice = price + 1;
        return currentTeamMaxBid >= nextBidPrice;
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
        const currentTeamPlayerCount = this.getCurrentTeamPlayerCount();
        const numOfSlotsPerTeam = this.getNumOfSlotsPerTeam();
        return currentTeamPlayerCount >= numOfSlotsPerTeam;
    };

    updatePlayerAvailability = (playerId) => {
        let playerToUpdate = this.props.players.find(player => player.id === playerId);
        playerToUpdate.isAvailable = false;
        this.setState({playerToUpdate});
    }

    render() {
        if (!this.state.isDraftDataLoaded || !this.state.isPlayerDataLoaded) {
            return <div />
        }

        return (
            <div>
                <div>
                    <p>Draft Details: {this.props.draft.name}</p>
                    <p>Current OTB Coach: {this.props.onTheBlockCoach ? this.props.onTheBlockCoach.team.name : "TBA"}</p>
                </div>
                <DraftRoomBlock
                    block={this.state.block}
                    sendBid={this.sendBid}
                    vacantPositions={this.state.vacantPositions}
                />
                <DraftRoomPlayers
                    players={this.props.players}
                    sendAddToBlock={this.sendAddToBlock}
                    vacantPositions={this.state.vacantPositions}
                />
                <MyTeam 
                    playerList={this.getCurrentCoachPlayers()}
                    roster={this.props.draft.roster}
                    teamId={this.props.currentTeam.id}
                    setVacantPositions={this.setVacantPositions}
                />
            </div>
        )
    }

};

const mapStateToProps = state => {
    return {
        user: userSelector(state),
        players: playersSelector(state),
        draft: draftSelector(state),
        currentTeam: currentTeamSelector(state),
        onTheBlockTeam: onTheBlockTeamSelector(state)
    };
};

const mapDispatchToProps = dispatch => ({
    getDraft: (draftId) => dispatch(getDraftAction(draftId)),
    // TODO: Replace with draftId.
    getPlayers: (draftId) => dispatch(getPlayersByDraftAction(draftId)),
    updateTeam: (team) => dispatch(updateTeamAction(team))
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftRoom);
