import React, {forwardRef} from "react";
import MaterialTable from "material-table";
import DraftRoomPlayersSelected from "./selected/Selected";
import {playersSelector} from "../../../../store/selectors/PlayersSelectors";
import {
    currentTeamIdSelector,
    draftSelector,
    draftTeamsSelector,
    isSlotAvailableSelector
} from "../../../../store/selectors/DraftSelectors";
import {stompClientSelector} from "../../../../store/selectors/WebSocketSelectors";
import {connect} from "react-redux";
import {updatePlayerAvailabilityAction, updateTeamAction} from "../../../../store/actions";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
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
import {
    isBiddingUnderwaySelector,
    isOnTheBlockSelector,
    onTheBlockTeamIdSelector
} from "../../../../store/selectors/BlockSelectors";
import DraftRoomUtils from "../../../../utils/DraftRoomUtils";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

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

const theme = createMuiTheme({
    overrides: {
        MuiTableCell: {
            root: {
                paddingTop: 5,
                paddingBottom: 5,
            }
        },
        MuiIconButton: {
            root: {
                padding: 2,
            }
        },
        MuiToolbar: {
            regular: {
                '@media (min-width: 600px)': {
                    minHeight: "var(--draft-room-players-search-height)",
                    maxHeight: "var(--draft-room-players-search-height)",
                },
            }
        },
    }
});

class DraftRoomPlayers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPlayer: '',
            showAddToBlock: false,
            positionFilter: 'MID',
        };
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/teams', this.receiveTeam);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.isOnTheBlock !== this.props.isOnTheBlock ||
            nextProps.draft.status !== this.props.draft.status ||
            nextProps.slotAvailability !== this.props.slotAvailability ||
            nextState.positionFilter !== this.state.positionFilter
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.isOnTheBlock !== this.props.isOnTheBlock
            || prevProps.draft.status !== this.props.draft.status
            || prevProps.isBiddingUnderway !== this.props.isBiddingUnderway
        ) {
            this.setState({
                showAddToBlock: this.props.isOnTheBlock && this.props.draft.status === "IN_PROGRESS" && !this.props.isBiddingUnderway
            })
        }
    }

    getFullPosition(player) {
        let fullPosition = player.primaryPosition;
        if(player.secondaryPosition !== null) {
            console.log(player.secondaryPosition);
            fullPosition += (" - " + player.secondaryPosition);
        }
        return fullPosition;
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
                playerId: selectedPlayerId,
                onTheBlockTeamId: this.props.onTheBlockTeamId,
                bidderTeamId: this.props.currentTeamId,
                myTeamPosition: null,
                price: initialBid,
                onTheBlockTimer: this.props.draft.onTheBlockTimer,
                bidTimer: this.props.draft.bidTimer,
            };
            this.props.stompClient.send("/app/addToBlock", {}, JSON.stringify(addToBlockDetails));
        }
    };

    toggleAndSetSelected = (event, togglePanel, rowData) => {
        togglePanel();
        if(this.state.selectedPlayer === rowData) {
            this.setState({selectedPlayer: ''});
        } else {
            this.setState({selectedPlayer: rowData});
        }
    }

    render() {
        // TODO: Consider refactoring to basic React Material Table.
        // Currently, every table row is re-rendered when the table changes.
        // This means that isSlotAvailableForPlayer is called for every row unnecessarily under the actions section every time a row is expanded.
        // Also, as the selected row is maintain via the state (rather than a CSS property), the entire component is re-rendered every time this value changes.
        // Therefore, isSlotAvailableForPlayer is called twice as much as required.
        return (
            <MuiThemeProvider theme={theme}>
                <div style={{ maxWidth: "100%" }}>
                    <MaterialTable
                        icons={tableIcons}
                        title=""
                        columns={[
                            { title: "ID", field: "id", type: "numeric", filtering: false, align: "left", width: null },
                            { title: "Name", field: "fullName", filtering: true, align: "left" },
                            { title: "Team", field: "aflTeamId", filtering: false, align: "left" },
                            { title: "Average", field: "average", type: "numeric", filtering: false, align: "left" },
                            { title: "Position", field:"fullPosition", align: "left",
                                customFilterAndSearch: (term, rowData) => rowData.fullPosition.includes(this.state.positionFilter),
                            }
                        ]}
                        data={this.props.players}
                        // TODO: When we pass rowData into our action, it causes all rows to be re-rendered every time a row is toggled or untoggled.
                        // Unsure if there is a way around this. Maybe can look into it.
                        actions={[
                            rowData => ({
                                icon: () => <AddCircleOutlineIcon/>,
                                tooltip: 'Add To Block',
                                onClick: (event, rowData) => this.sendAddToBlock(rowData.id, 1),
                                hidden: !rowData.available || !this.state.showAddToBlock,
                                disabled: !DraftRoomUtils.isSlotAvailableForPlayer(
                                    this.props.slotAvailability,
                                    rowData.primaryPosition,
                                    rowData.secondaryPosition
                                ),

                            })
                        ]}
                        detailPanel={rowData => {
                            return (
                                <DraftRoomPlayersSelected
                                    player={rowData}
                                    sendAddToBlock={this.sendAddToBlock}
                                    hideAddToBlock = {!rowData.available || !this.state.showAddToBlock}
                                    isSlotAvailableForPlayer = {DraftRoomUtils.isSlotAvailableForPlayer(
                                        this.props.slotAvailability,
                                        rowData.primaryPosition,
                                        rowData.secondaryPosition
                                    )}
                                />
                            )
                        }}
                        // TODO: As we change the State here in order to maintain the rowStyle background color when a player is selected, the entire table is re-rendered.
                        // Therefore isSlotAvailableForPlayer is called twice as much as necessary.
                        // Would be simpler if the active CSS property was set on the selected row, then we wouldn't have to maintain via State.
                        // Maybe could check if this would work with a Material UI Table.
                        onRowClick={(event, rowData, togglePanel) => this.toggleAndSetSelected(event, togglePanel, rowData)}
                        options={{
                            detailPanelType: "single",
                            paging: false,
                            headerStyle: { position: 'sticky', top: 0 },
                            filtering: true,
                            maxBodyHeight: "var(--draft-room-players-list-height)",
                            rowStyle: rowData => ({
                                backgroundColor: rowData.id === this.state.selectedPlayer.id
                                    ? "var(--highlight-color)"
                                    : (!rowData.available)
                                        ? "var(--disabled-color)"
                                        : '#FFFFFF',
                                fontSize: "14px",
                            }),
                            search: false,
                        }}
                        localization={{
                            header: {actions: ''}
                        }}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = state => {
    return {
        stompClient: stompClientSelector(state),
        players: playersSelector(state),
        draft: draftSelector(state),
        currentTeamId: currentTeamIdSelector(state),
        teams: draftTeamsSelector(state),
        onTheBlockTeamId: onTheBlockTeamIdSelector(state),
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

export default connect(mapStateToProps, mapDispatchToProps)(DraftRoomPlayers);
