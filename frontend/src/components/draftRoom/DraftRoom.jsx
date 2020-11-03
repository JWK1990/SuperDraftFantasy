import React from "react";
import DraftRoomBlock from "./block/Block";
import MyTeam from "./myTeam/MyTeam";
import {getDraftAction, updateTeamAction, connectWebSocketAction, getPlayersByDraftAction} from "../../store/actions";
import {connect} from "react-redux";
import {userSelector} from "../../store/selectors/UserSelectors"
import {currentTeamSelector, draftSelector, onTheBlockTeamSelector} from "../../store/selectors/DraftSelectors"
import {playersSelector} from "../../store/selectors/PlayersSelectors";
import DraftRoomTeams from "./teams/Teams";
import Grid from "@material-ui/core/Grid";
import {stompClientSelector} from "../../store/selectors/WebSocketSelectors";

// let stompClient = null;

class DraftRoom extends React.Component {

    // TODO: Update to draftId.
    draftId = 3;

    constructor(props) {
        super(props);
        this.state = {
            errorText: '',
            isStompClientConnected: false,
            isPlayerDataLoaded: false,
            isDraftDataLoaded: false,
        };
    }

    componentDidMount() {
        this.props.connectWebSocket();
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
        if(this.props.stompClient != null && this.props.stompClient !== prevProps.stompClient) {
            if(this.props.stompClient.connected) {
                this.setState({isStompClientConnected: true})
            }
        }
    }

    // disconnect = () => {
    //     if (stompClient !== null) {
    //         stompClient.disconnect();
    //     }
    // };

    receiveTeam = (payload) => {
        const team = JSON.parse(payload.body);
        console.log('Team Received: ', team)
        this.props.updateTeam(team);
    };

    render() {

        console.log("P: ", this.props.stompClient);

        if (!this.state.isStompClientConnected || !this.state.isDraftDataLoaded || !this.state.isPlayerDataLoaded) {
            return <div />
        }

        return (
            <div>
                <Grid container>

                    <Grid item xs={2}>
                        <div>
                            <p>Draft Details: {this.props.draft.name}</p>
                            <p>Current OTB Coach: {this.props.onTheBlockTeam ? this.props.onTheBlockTeam.name : "TBA"}</p>
                        </div>
                    </Grid>
                    <Grid item xs={10}>
                        <DraftRoomBlock
                            stompClient={this.props.stompClient}
                            draft={this.props.draft}
                            players={this.props.players}
                            currentTeam={this.props.currentTeam}
                        />
                    </Grid>

                    <Grid item xs={2}>
                        <DraftRoomTeams
                            stompClient={this.props.stompClient}
                            teams={this.props.draft.teams}
                            draftId={this.props.draft.id}
                            draftStatus={this.props.draft.status}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        {/*<StatisticsContainer*/}
                        {/*    stompClient={this.props.stompClient}*/}
                        {/*    players={this.props.players}*/}
                        {/*    draft={this.props.draft}*/}
                        {/*    currentTeamId={this.props.currentTeam.id}*/}
                        {/*/>*/}
                    </Grid>
                    <Grid item xs={2}>
                        <MyTeam
                            roster={this.props.draft.roster}
                            currentTeam={this.props.currentTeam}
                        />
                    </Grid>

                </Grid>
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
        onTheBlockTeam: onTheBlockTeamSelector(state),
        stompClient: stompClientSelector(state)
    };
};

const mapDispatchToProps = dispatch => ({
    getDraft: (draftId) => dispatch(getDraftAction(draftId)),
    getPlayers: (draftId) => dispatch(getPlayersByDraftAction(draftId)),
    updateTeam: (team) => dispatch(updateTeamAction(team)),
    connectWebSocket: () => dispatch(connectWebSocketAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftRoom);
