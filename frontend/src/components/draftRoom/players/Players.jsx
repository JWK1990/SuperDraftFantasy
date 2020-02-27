import React, { Component } from "react";
import MaterialTable from "material-table";

function DraftRoomPlayers(props) {
    console.log('Players: ', props.players);
        return (
            <div style={{ maxWidth: "100%" }}>
                <MaterialTable
                    columns={[
                        { title: "ID", field: "id", type: "numeric" },
                        { title: "Name", field: "firstName" },
                        { title: "Team", field: "aflTeamId"},
                        { title: "Average", field: "average", type: "numeric" },
                        { title: "Position", field: "position" },
                    ]}
                    data={props.players}
                    title="Players"
                />
            </div>
        );
}

export default DraftRoomPlayers;