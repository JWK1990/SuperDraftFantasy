import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import PlayerAnalysisTabPanel from "./PlayerAnalysisTabPanel";
import PlayerAnalysisGraphsContainer from "./graphs/PlayerAnalysisGraphsContainer";
import GamesGraph from "./graphs/GamesGraph";
import SCAverageGraph from "./graphs/SCAverageGraph";

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

    return (
        <Card className={classes.root} elevation={4}>
            <SCAverageGraph
                playerId={props.player.id}
                primaryPosition={props.player.primaryPosition}
            />
        </Card>
    )

}
