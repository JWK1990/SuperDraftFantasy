import React, {Component} from "react";
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";
import DraftRoomPlayersSelected from "./selected/Selected";

class DraftRoomPlayers extends Component {

        constructor(props) {
            super(props);
            this.state = {
                selectedPlayer: '',
            };
        }

        getIsAddToBlockDisabled = (player) => {
            const benchSlotVacant = this.props.vacantPositions["BENCH"];
            const primarySlotVacant = this.props.vacantPositions[player.primaryPosition];
            const secondarySlotVacant = this.props.vacantPositions[player.secondaryPosition];

            return !benchSlotVacant && !primarySlotVacant && !secondarySlotVacant;
        }

        toggleAndSetSelected = (togglePanel, rowData) => {
            togglePanel();
            this.setState({selectedPlayer: rowData});
        }

        render() {
            return (
                <Container component="main" maxWidth="xl">
                    <div style={{ maxWidth: "100%" }}>
                        <MaterialTable
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
                                    icon: 'save',
                                    tooltip: 'Add To Block',
                                    onClick: (event, rowData) => alert("You Added  " + rowData.firstName + " to the Block."),
                                    hidden: this.getIsAddToBlockDisabled(rowData)
                                })
                            ]}
                            detailPanel={rowData => {
                                return (
                                    <DraftRoomPlayersSelected
                                        selected={rowData}
                                        sendAddToBlock={this.props.sendAddToBlock}
                                        isAddToBlockDisabled = {false}
                                    />
                                )
                            }}
                            onRowClick={(event, rowData, togglePanel) => this.toggleAndSetSelected(togglePanel, rowData)}
                            options={{detailPanelType: "single"}}
                        />
                    </div>
                </Container>
            );
        }
}

export default DraftRoomPlayers;