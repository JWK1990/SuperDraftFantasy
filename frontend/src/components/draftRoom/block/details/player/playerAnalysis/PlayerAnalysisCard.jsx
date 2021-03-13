import React, {useEffect, useState} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import PlayerAnalysisTabPanel from "./PlayerAnalysisTabPanel";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: 'var(--player-card-height)',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: "100%",
    },
    content: {
        width: "100%",
    },
    scoreImageDiv: {
        display: 'flex',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    scoreImage: {
        width: 100,
    },
}));

export default function PlayerAnalysisCard(props) {
    const classes = useStyles();
    console.log("Props: ", props);

    return (
        <Card className={classes.root} elevation={4}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <PlayerAnalysisTabPanel
                        playerId={props.player.id}
                        primaryPosition={props.player.primaryPosition}
                    />
                </CardContent>
            </div>
        </Card>
    )

}
