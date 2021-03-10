import React, {forwardRef} from "react";
import DraftRoomPlayersSelected from "./selected/Selected";
import {
    currentTeamIdSelector,
    draftSelector,
    draftTeamsSelector,
    isSlotAvailableSelector
} from "../../../../store/selectors/DraftSelectors";
import {stompClientSelector} from "../../../../store/selectors/WebSocketSelectors";
import {connect} from "react-redux";
import {updatePlayerAvailabilityAction, updateTeamAction} from "../../../../store/actions";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import {isBiddingUnderwaySelector, isOnTheBlockSelector,} from "../../../../store/selectors/BlockSelectors";
import DraftRoomUtils from "../../../../utils/DraftRoomUtils";
import withStyles from "@material-ui/core/styles/withStyles";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};

const styles = {
    root: {},
}

class ExpandedPlayerContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showAddToBlock: false,
        };
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/teams', this.receiveTeam);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("Should Component Update: ", nextProps.draft.status, this.props.draft.status);
        return nextProps.isOnTheBlock !== this.props.isOnTheBlock ||
            nextProps.draft.status !== this.props.draft.status ||
            nextProps.slotAvailability !== this.props.slotAvailability ||
            nextState.positionFilter !== this.state.positionFilter
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps.draft.status, this.props.draft.status);
        if (prevProps.isOnTheBlock !== this.props.isOnTheBlock
            || prevProps.draft.status !== this.props.draft.status
            || prevProps.isBiddingUnderway !== this.props.isBiddingUnderway
        ) {
            console.log("Show Add To Block: ", this.props.isOnTheBlock, this.props.draft.status === "IN_PROGRESS", !this.props.isBiddingUnderway);
            this.setState({
                showAddToBlock: this.props.isOnTheBlock && this.props.draft.status === "IN_PROGRESS" && !this.props.isBiddingUnderway
            })
        }
    }

    receiveTeam = (payload) => {
        const team = JSON.parse(payload.body);
        this.props.updateTeam(team);
        const draftedPlayer = team.teamPlayerJoins[team.teamPlayerJoins.length - 1].player;
        this.props.updatePlayerAvailabilityAction(draftedPlayer)
    };

    sendAddToBlock = (selectedPlayerId, initialBid) => {
        if (this.props.stompClient) {
            const addToBlockDetails = {
                draftId: this.props.draft.id,
                playerId: this.props.player.id,
                bidderTeamId: this.props.currentTeamId,
                myTeamPosition: null,
                price: initialBid,
                onTheBlockTimer: this.props.draft.onTheBlockTimer,
                bidTimer: this.props.draft.bidTimer,
            };
            this.props.stompClient.send("/app/addToBlock", {}, JSON.stringify(addToBlockDetails));
        }
    };

    render() {
        const {classes} = this.props;

        return (
            <DraftRoomPlayersSelected
                player={this.props.player}
                sendAddToBlock={this.sendAddToBlock}
                hideAddToBlock={!this.props.player.available || !this.state.showAddToBlock}
                isSlotAvailableForPlayer={
                    DraftRoomUtils.isSlotAvailableForPlayer(
                        this.props.slotAvailability,
                        this.props.player.primaryPosition,
                        this.props.player.secondaryPosition
                    )
                }
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        stompClient: stompClientSelector(state),
        draft: draftSelector(state),
        currentTeamId: currentTeamIdSelector(state),
        teams: draftTeamsSelector(state),
        isOnTheBlock: isOnTheBlockSelector(state),
        slotAvailability: {
            def: isSlotAvailableSelector(state, "def"),
            mid: isSlotAvailableSelector(state, "mid"),
            ruc: isSlotAvailableSelector(state, "ruc"),
            fwd: isSlotAvailableSelector(state, "fwd"),
            bench: isSlotAvailableSelector(state, "bench"),
        },
        isBiddingUnderway: isBiddingUnderwaySelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
    updateTeam: (team) => dispatch(updateTeamAction(team)),
    updatePlayerAvailabilityAction: (player) => dispatch(updatePlayerAvailabilityAction(player)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ExpandedPlayerContainer));
