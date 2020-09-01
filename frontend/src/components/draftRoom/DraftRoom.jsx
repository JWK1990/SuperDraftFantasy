import React from "react";
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
    draftId = 9;

    initialBlock = {
        player: '',
        bidder: '',
        price: '',
        onTheBlockTimeRemaining: '',
        bidTimeRemaining: '',
        isBidDisabled: true,
    }

    constructor(props) {
        super(props);
        this.state = {
            block: this.initialBlock,
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

    onConnected = () => {
        stompClient.subscribe('/draft/rounds', this.receiveStartNextRound);
        stompClient.subscribe('/draft/stopDrafts', this.receiveStopDraft);
        stompClient.subscribe('/draft/addToBlocks', this.receiveAddToBlock);
        stompClient.subscribe('/draft/bids', this.receiveBid);
        stompClient.subscribe('/draft/teams', this.receiveTeam);
        this.setState({stompClient: stompClient});
    };

    sendStartDraft = () => {
        if(stompClient) {
            const startDraftDetails = {
                draftId: this.props.draft.id,
                playerId: null,
                teamId: null,
                price: 1,
                onTheBlockTimer: this.props.draft.onTheBlockTimer,
                bidTimer: this.props.draft.bidTimer
            };
            stompClient.send("/app/startDraft", {}, JSON.stringify(startDraftDetails));
        }
    }

    sendStopDraft = () => {
        if(stompClient) {
            console.log('Send Stop Draft.');
            stompClient.send("/app/stopDraft", {}, this.props.draft.id);
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

    receiveStartNextRound = (payload) => {
        console.log('Start Next Round Received: ', payload);
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        const startNextRoundDetails = JSON.parse(payload.body);
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                player: '',
                team: this.getTeamDetailsById(startNextRoundDetails.teamId),
                price: '',
                isBidDisabled: true,
            }
        }));
        this.setAddToBlockTimer(startNextRoundDetails.endTime);
    };

    receiveStopDraft = () => {
        console.log('StopDraft Received.');
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                addToBlockTimeRemaining: '',
                bidTimeRemaining: '',
            }
        }));
    }

    receiveAddToBlock = (payload) => {
        console.log('AddToBlock Received ', payload);
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        const addToBlockDetails = JSON.parse(payload.body);
        const player = this.getPlayerDetailsById(addToBlockDetails.playerId);
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                player: player,
                bidder: this.getTeamDetailsById(addToBlockDetails.teamId),
                price: addToBlockDetails.price,
                isBidDisabled: this.getIsBidDisabled(addToBlockDetails.price, player),
            }
        }));
        this.setBidTimer(addToBlockDetails.endTime);
    };

    receiveBid = (payload) => {
        clearInterval(this.addToBlockTimerInterval);
        clearInterval(this.bidTimerInterval);
        const bidDetails = JSON.parse(payload.body);
        const player = this.state.block.player;
        const price = bidDetails.price;
        this.setState(prevState => ({
            ...prevState,
            block: {
                ...prevState.block,
                bidder: this.getTeamDetailsById(bidDetails.teamId),
                price: price,
                isBidDisabled: this.getIsBidDisabled(price, player),
            }
        }));
        this.setBidTimer(bidDetails.endTime);
    };

    receiveTeam = (payload) => {
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

    getPlayerDetailsById = (playerId) => {
        return this.props.players.find(player => player.id === playerId);
    };

    getTeamDetailsById = (teamId) => {
        return this.props.draft.teams.find(team => team.id === teamId);
    };

    getCurrentTeamPlayerCount = () => {
        return this.props.currentTeam.teamPlayerJoins.length;
    }

    getCurrentCoachMaxBid = () => {
        return this.props.currentTeam.maxBid;
    }

    getNumOfSlotsPerTeam = () => {
        const roster = this.props.draft.roster;
        return roster.def + roster.mid + roster.ruc + roster.fwd + roster.bench;
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
        // const benchSlotAvailable = this.state.vacantPositions["BENCH"];
        // const primarySlotAvailable = this.state.vacantPositions[player.primaryPosition];
        // const secondarySlotAvailable = player.secondaryPosition ? this.state.vacantPositions[player.secondaryPosition] : false;
        // return benchSlotAvailable || primarySlotAvailable || secondarySlotAvailable;
        return true;
    };

    getIsTeamFull = () => {
        const currentTeamPlayerCount = this.getCurrentTeamPlayerCount();
        const numOfSlotsPerTeam = this.getNumOfSlotsPerTeam();
        return currentTeamPlayerCount >= numOfSlotsPerTeam;
    };

    render() {
        if (!this.state.isDraftDataLoaded || !this.state.isPlayerDataLoaded) {
            return <div />
        }

        return (
            <div>
                <div>
                    <p>Draft Details: {this.props.draft.name}</p>
                    <p>Current OTB Coach: {this.props.onTheBlockTeam ? this.props.onTheBlockTeam.name : "TBA"}</p>
                </div>
                <DraftRoomBlock
                    block={this.state.block}
                    sendBid={this.sendBid}
                    sendStartDraft={this.sendStartDraft}
                    sendStopDraft={this.sendStopDraft}
                />
                <DraftRoomPlayers
                    players={this.props.players}
                    sendAddToBlock={this.sendAddToBlock}
                />
                <MyTeam 
                    roster={this.props.draft.roster}
                    currentTeam={this.props.currentTeam}
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
    getPlayers: (draftId) => dispatch(getPlayersByDraftAction(draftId)),
    updateTeam: (team) => dispatch(updateTeamAction(team))
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftRoom);
