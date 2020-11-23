import React, {forwardRef} from "react";
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";
import DraftRoomPlayersSelected from "./selected/Selected";
import {playersSelector} from "../../../store/selectors/PlayersSelectors";
import {currentTeamIdSelector, draftSelector, draftTeamsSelector} from "../../../store/selectors/DraftSelectors";
import {stompClientSelector} from "../../../store/selectors/WebSocketSelectors";
import {connect} from "react-redux";
import {updatePlayerAvailabilityAction, updateTeamAction} from "../../../store/actions";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {
    AddBox, ArrowDownward,
    Check, ChevronLeft,
    ChevronRight,
    Clear,
    DeleteOutline,
    Edit,
    FilterList,
    FirstPage, LastPage, Remove,
    SaveAlt, Search, ViewColumn
} from "@material-ui/icons";

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

class DraftRoomPlayers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPlayer: '',
        };
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/teams', this.receiveTeam);
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
                teamId: this.props.currentTeamId,
                price: initialBid,
                onTheBlockTimer: this.props.draft.onTheBlockTimer,
                bidTimer: this.props.draft.bidTimer
            };
            this.props.stompClient.send("/app/receiveAddToBlock", {}, JSON.stringify(addToBlockDetails));
            console.log('Add To Block Sent: ', addToBlockDetails);
        }
    };

    getIsAddToBlockDisabled = (player) => {
        // const benchSlotVacant = this.props.vacantPositions["BENCH"];
        // const primarySlotVacant = this.props.vacantPositions[player.primaryPosition];
        // const secondarySlotVacant = this.props.vacantPositions[player.secondaryPosition];
        // return !player.available || (!benchSlotVacant && !primarySlotVacant && !secondarySlotVacant);
        return false;
    }

    toggleAndSetSelected = (togglePanel, rowData) => {
        togglePanel();
        if(this.state.selectedPlayer === rowData) {
            this.setState({selectedPlayer: ''});
        } else {
            this.setState({selectedPlayer: rowData});
        }
    }

    render() {
        return (
            <Container component="main" maxWidth="xl">
                <div style={{ maxWidth: "100%" }}>
                    <MaterialTable
                        icons={tableIcons}
                        title="Players"
                        columns={[
                            { title: "ID", field: "id", type: "numeric", searchable: false },
                            { title: "Name", field: "firstName" },
                            { title: "Team", field: "aflTeamId", searchable: false},
                            { title: "Average", field: "average", type: "numeric", searchable: false },
                            { title: "Position1", field: "primaryPosition", searchable: false },
                            { title: "Position2", field: "secondaryPosition", searchable: false },
                        ]}
                        data={this.props.players}
                        actions={[
                            rowData => ({
                                icon: () => <AddCircleOutlineIcon />,
                                tooltip: 'Add To Block',
                                onClick: (event, rowData) => this.sendAddToBlock(rowData.id, 1),
                                hidden: this.getIsAddToBlockDisabled(rowData)
                            })
                        ]}
                        detailPanel={rowData => {
                            return (
                                <DraftRoomPlayersSelected
                                    selected={rowData}
                                    sendAddToBlock={this.sendAddToBlock}
                                    isAddToBlockDisabled = {this.getIsAddToBlockDisabled(this.state.selectedPlayer)}
                                />
                            )
                        }}
                        onRowClick={(event, rowData, togglePanel) => this.toggleAndSetSelected(togglePanel, rowData)}
                        options={{
                            detailPanelType: "single",
                            paging: false,
                            maxBodyHeight: "calc(100vh - 238px - 150px)",
                            headerStyle: { position: 'sticky', top: 0 },
                            rowStyle: rowData => ({
                                backgroundColor: rowData.id === this.state.selectedPlayer.id
                                    ? '#0000FF'
                                    : (!rowData.available)
                                        ? '#EEE'
                                        : '#FFFFFF'
                            })
                        }}
                    />
                </div>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        stompClient: stompClientSelector(state),
        players: playersSelector(state),
        draft: draftSelector(state),
        currentTeamId: currentTeamIdSelector(state),
        teams: draftTeamsSelector(state)
    };
};

const mapDispatchToProps = dispatch => ({
    updateTeam: (team) => dispatch(updateTeamAction(team)),
    updatePlayerAvailabilityAction: (player) => dispatch(updatePlayerAvailabilityAction(player)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftRoomPlayers);
