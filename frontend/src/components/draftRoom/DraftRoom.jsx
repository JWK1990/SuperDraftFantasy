import React from "react";
import DraftRoomBlock from "./block/Block";
import {connectWebSocketAction, getDraftAction} from "../../store/actions";
import {connect} from "react-redux";
import {draftSelector} from "../../store/selectors/DraftSelectors"
import Grid from "@material-ui/core/Grid";
import {stompClientSelector} from "../../store/selectors/WebSocketSelectors";
import ConfigurationUtils from "../../utils/ConfigurationUtils";
import {withStyles} from "@material-ui/core";
import DraftDetailsContainer from "./draftDetails/DraftDetailsContainer";
import TeamsV2 from "./teams/TeamsV2";
import UpdatedPlayerListContainer from "./statistics/players/UpdatedPlayerListContainer";
import TeamListContainer from "./myTeam/TeamListContainer";
import {userIdSelector} from "../../store/selectors/UserSelectors";

const styles = {
    rootContainer: {
        height: "100%",
        width: "100%",
        overflow: "hidden",
    },
};

class DraftRoom extends React.Component {

    draftId = ConfigurationUtils.getUrlParam("id");

    constructor(props) {
        super(props);
        this.state = {
            errorText: '',
            isStompClientConnected: false,
            isPlayerDataLoaded: false,
            isDraftDataLoaded: false,
            currentTeamId: null,
        };
    }

    componentDidMount() {
        this.props.connectWebSocket();
        this.props.getDraft(this.draftId);
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.draft !== prevProps.draft && this.props.userId !== null) {
            this.setState({isDraftDataLoaded: true});
            const currentTeam = this.props.draft.teams.find(team => team.user.id === this.props.userId);
            this.setState({currentTeamId: currentTeam.id})
        }
        if(this.props.stompClient != null && this.props.stompClient !== prevProps.stompClient) {
            if(this.props.stompClient.connected) {
                this.setState({isStompClientConnected: true})
            }
        }
    }

    componentWillUnmount() {
        if (this.props.stompClient !== null) {
            console.log("Stomp Client Disconnected.");
            this.props.stompClient.disconnect();
        }
    }

    render() {
        const {classes} = this.props;

        if (!this.state.isStompClientConnected || !this.state.isDraftDataLoaded || !this.state.currentTeamId) {
            return <div />
        }

        return (
            <Grid container spacing={1} className={classes.rootContainer}>
                <Grid container item xs={2} style={{height: "100%", maxHeight: "100vh", overflow: "auto"}}>
                    <Grid item xs={12}>
                        <DraftDetailsContainer/>
                    </Grid>
                    <Grid item xs={12}>
                        <TeamsV2/>
                    </Grid>
                </Grid>
                <Grid container item xs={8} style={{height: "100%", maxHeight: "100vh"}}>
                    <Grid item xs={12}>
                        <DraftRoomBlock/>
                    </Grid>
                    <Grid item xs={12}>
                        <UpdatedPlayerListContainer/>
                    </Grid>
                </Grid>
                <Grid container item xs={2} style={{height: "100%", maxHeight: "100vh", overflow: "auto"}}>
                    <Grid item xs={12}>
                        <TeamListContainer teamId={this.state.currentTeamId} isDisabled={false}/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}

const mapStateToProps = state => {
    return {
        draft: draftSelector(state),
        stompClient: stompClientSelector(state),
        userId: userIdSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
    getDraft: (draftId) => dispatch(getDraftAction(draftId)),
    connectWebSocket: () => dispatch(connectWebSocketAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DraftRoom));
