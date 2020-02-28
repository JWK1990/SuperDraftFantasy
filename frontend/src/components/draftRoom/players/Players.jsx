import React from "react";
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";
import DraftRoomPlayersSelected from "./selected/Selected";

function DraftRoomPlayers(props) {
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
                            { title: "Position", field: "position", searchable: false },
                        ]}
                        data={props.players}
                        detailPanel={rowData => {
                            return (
                                <DraftRoomPlayersSelected selected={rowData} sendAddToBlock={props.sendAddToBlock}/>
                            )
                        }}
                        onRowClick={(event, rowData, togglePanel) => togglePanel()}
                        options={{detailPanelType: "single"}}
                    />
                </div>
            </Container>
        );
}

export default DraftRoomPlayers;