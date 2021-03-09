import {Tooltip} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        width: "100%",
    },
    loadingDiv: {
        width: "100%",
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
        <Grid container className={classes.rootContainer} direction={"row"} justify={"flex-start"} alignItems="center">
            <div className="tinyWidthDiv">
                <Typography>{props.player.id}</Typography>
            </div>
            <div className={"largeWidthDiv"}>
                <Typography>{props.player.name}</Typography>
            </div>
            <div className={"smallWidthDiv"}>
                <Typography>Team</Typography>
            </div>
            <div className={"smallWidthDiv"}>
                <Typography>Position</Typography>
            </div>
            <div className="tinyWidthDiv">
                <Typography>SC</Typography>
            </div>
            <div className="tinyWidthDiv">
                <Typography>GM</Typography>
            </div>
            <div className="tinyWidthDiv">
                <Typography>D</Typography>
            </div>
            <div className="tinyWidthDiv">
                <Typography>DE%</Typography>
            </div>
            <div className="tinyWidthDiv">
                <Typography>T</Typography>
            </div>
            <div className="tinyWidthDiv">
                <Tooltip title={"Coach"}>
                    <Typography>$</Typography>
                </Tooltip>
            </div>
        </Grid>
    )

}
