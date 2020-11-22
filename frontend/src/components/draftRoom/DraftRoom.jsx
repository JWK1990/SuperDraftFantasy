import React from "react";
import DraftRoomBlock from "./block/Block";
import MyTeam from "./myTeam/MyTeam";
import {connectWebSocketAction, getDraftAction, getPlayersByDraftAction} from "../../store/actions";
import {connect} from "react-redux";
import {draftSelector} from "../../store/selectors/DraftSelectors"
import {playersSelector} from "../../store/selectors/PlayersSelectors";
import DraftRoomTeams from "./teams/Teams";
import Grid from "@material-ui/core/Grid";
import {stompClientSelector} from "../../store/selectors/WebSocketSelectors";
import StatisticsContainer from "./players/StatisticsContainer";
import ConfigurationUtils from "../../utils/ConfigurationUtils";
import {withStyles} from "@material-ui/core";
import CommissionerControls from "./commissionerControls/CommissionerControls";

const styles = {
    firstRowGridContainer: {
        justify: "space-between",
        alignItems: "stretch",
        height: "20vh",
        overflow: "hidden",
    },
    secondRowGridContainer: {
        justify: "space-between",
        alignItems: "stretch",
        height: "80vh",
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
        };
    }

    componentDidMount() {
        this.props.connectWebSocket();
        this.props.getDraft(this.draftId);
        this.props.getPlayers(this.draftId);
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
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

    componentWillUnmount() {
        if (this.props.stompClient !== null) {
            console.log("Stomp Client Disconnected.");
            this.props.stompClient.disconnect();
        }
    }

    render() {
        const {classes} = this.props;

        if (!this.state.isStompClientConnected
            || !this.state.isDraftDataLoaded
            || !this.state.isPlayerDataLoaded
        ) {
            return <div />
        }

        return (
            <div>
                <Grid
                    container
                    className={classes.firstRowGridContainer}
                >
                    <Grid item xs={2}>
                        <CommissionerControls/>
                    </Grid>
                    <Grid item xs={8}>
                        <DraftRoomBlock/>
                    </Grid>
                    <Grid item xs={2}
                          className={classes.firstRow}
                    >
                        MyList Placeholder.
                    </Grid>
                </Grid>

                <Grid
                    container
                    className={classes.secondRowGridContainer}
                >
                    <Grid item xs={2}>
                        <DraftRoomTeams/>
                    </Grid>
                    <Grid item xs={8}>
                        <StatisticsContainer/>
                    </Grid>
                    <Grid item xs={2}>
                        <MyTeam/>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        players: playersSelector(state),
        draft: draftSelector(state),
        stompClient: stompClientSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
    getDraft: (draftId) => dispatch(getDraftAction(draftId)),
    getPlayers: (draftId) => dispatch(getPlayersByDraftAction(draftId)),
    connectWebSocket: () => dispatch(connectWebSocketAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DraftRoom));
