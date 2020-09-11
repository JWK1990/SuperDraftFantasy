import React from "react";
import DraftRoomPlayers from "./players/Players";
import DraftRoomBlock from "./block/Block";
import MyTeam from "./myTeam/MyTeam";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import ConfigurationHelper from '../../utils/ConfigurationUtils.js';
import {getDraftAction, updateTeamAction} from "../../store/actions";
import {connect} from "react-redux";
import {userSelector} from "../../store/selectors/UserSelectors"
import {currentTeamSelector, draftSelector, onTheBlockTeamSelector} from "../../store/selectors/DraftSelectors"
import {getPlayersByDraftAction} from "../../store/actions/PlayerActions";
import {playersSelector} from "../../store/selectors/PlayersSelectors";
import DraftRoomTeams from "./teams/Teams";

let stompClient = null;

class DraftRoom extends React.Component {

    // TODO: Update to draftId.
    draftId = 2;

    constructor(props) {
        super(props);
        this.state = {
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
        stompClient.subscribe('/draft/teams', this.receiveTeam);
        this.setState({stompClient: stompClient});
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

    receiveTeam = (payload) => {
        const team = JSON.parse(payload.body);
        console.log('Team Received: ', team)
        this.props.updateTeam(team);
    };

    render() {
        if (!this.state.stompClient || !this.state.isDraftDataLoaded || !this.state.isPlayerDataLoaded) {
            return <div />
        }

        return (
            <div>
                <div>
                    <p>Draft Details: {this.props.draft.name}</p>
                    <p>Current OTB Coach: {this.props.onTheBlockTeam ? this.props.onTheBlockTeam.name : "TBA"}</p>
                </div>
                <DraftRoomBlock
                    stompClient={this.state.stompClient}
                    draft={this.props.draft}
                    players={this.props.players}
                    currentTeam={this.props.currentTeam}
                />
                <DraftRoomPlayers
                    stompClient={this.state.stompClient}
                    players={this.props.players}
                    draft={this.props.draft}
                    currentTeamId={this.props.currentTeam.id}
                />
                <MyTeam 
                    roster={this.props.draft.roster}
                    currentTeam={this.props.currentTeam}
                />
                <DraftRoomTeams
                    stompClient={this.state.stompClient}
                    teams={this.props.draft.teams}
                    draftId={this.props.draft.id}
                    draftStatus={this.props.draft.status}
                />
            </div>
        )
    }

}

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
