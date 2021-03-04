import React from "react";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import BlockPlayerCard from "./playerCard/BlockPlayerCard";
import PlayerAnalysisCard from "./playerAnalysis/PlayerAnalysisCard";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    paperRoot: {
        height: "100%",
        paddingTop: 10,
        paddingRight: 10,
    },
    rootContainer: {
        height: "100%",
    },
    detailsContainer: {
        height: "100%",
    },
    playerImage: {
        width: "228px",
        height: "100%",
    },
}));

export default function BlockPlayer(props) {
    const classes = useStyles();
    console.log("Block Player Props: ", props);

    return (
        <Paper elevation={2} className={classes.paperRoot}>
            <Grid container className={classes.rootContainer} spacing={0} direction="row" justify="flex-start" alignItems="center">
                <Grid item xs={7}>
                    <BlockPlayerCard player={props.player}/>
                </Grid>
                <Grid item xs={5}>
                    <PlayerAnalysisCard player={props.player}/>
                </Grid>
            </Grid>
        </Paper>
    )

}
