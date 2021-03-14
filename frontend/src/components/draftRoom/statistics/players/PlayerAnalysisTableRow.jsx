import {Tooltip} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        width: "100%",
    },
    rootContainerGrey: {
        width: "100%",
        color: "grey",
        fontWeight: "rgba(220,220,220, 0.3)",
    },
    loadingDiv: {
        width: "100%",
    },
    addToBlockButton: {
        maxHeight: "25px",
        minHeight: "25px",
        minWidth: "25px",
        maxWidth: "25px",
    }
}));

export default function PlayerAnalysisTableRow(props) {
    const classes = useStyles();

    if(!props.player) {
        return (
            <div className="loadingDiv">
                <Typography>Loading Players...</Typography>
            </div>
        )
    }

    return (
            <Grid container className={props.player.available ? classes.rootContainer : classes.rootContainerGrey} direction={"row"} justify={"flex-start"} alignItems="center">
                <div className="tinyWidthDiv">
                    <Typography>{props.player.id}</Typography>
                </div>
                <div className={"largeWidthDiv"}>
                    <Typography>{props.player.fullName}</Typography>
                </div>
                <div className={"smallWidthDiv"}>
                    <Typography>{props.player.aflTeam}</Typography>
                </div>
                <div className={"smallWidthDiv"}>
                    <Typography>{props.player.fullPosition}</Typography>
                </div>
                <div className="tinyWidthDiv">
                    <Typography>{props.player.average}</Typography>
                </div>
                <div className="tinyWidthDiv">
                    <Typography>{props.player.games}</Typography>
                </div>
                <div className="tinyWidthDiv">
                    <Typography>{props.player.disposals}</Typography>
                </div>
                <div className="tinyWidthDiv">
                    <Typography>{props.player.disposalEfficiency}</Typography>
                </div>
                <div className="tinyWidthDiv">
                    <Typography>{props.player.tackles}</Typography>
                </div>
                <div className="tinyWidthDiv">
                    <Tooltip title={props.player.draftTeamName !== null ? props.player.draftTeamName : ""}>
                        <Typography><span>$</span>{props.player.price}</Typography>
                    </Tooltip>
                </div>
            </Grid>
    )

}
