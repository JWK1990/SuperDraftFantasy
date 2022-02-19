import React from "react";
import Grid from "@material-ui/core/Grid";
import BlockPlayerCard from "./playerCard/BlockPlayerCard";
import SCAverageGraph from "./playerAnalysis/graphs/SCAverageGraph";

export default function BlockPlayer(props) {
    return (
        <Grid container spacing={0} direction="row"
              justify="flex-start" alignItems="center" style={{height: "100%"}}
        >
            <Grid item xs={7}>
                <BlockPlayerCard player={props.player}/>
            </Grid>
            <Grid item xs={5}>
                <SCAverageGraph
                    playerId={props.player.id}
                    primaryPosition={props.player.primaryPosition}
                />
            </Grid>
        </Grid>
    )

}
