import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Paper, Tooltip} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        width: "100%",
        // Padding of 16px matches padding on Accordion Rows to align the Header Grid.
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottom: "solid 1px grey",
    },
    headerText: {
        fontWeight: 500,
    }
}));

export default function PlayerAnalysisTableHeader() {
    const classes = useStyles();

    return (
        <Paper>
            <Grid container className={classes.rootContainer} direction={"row"} justify={"flex-start"} alignItems="center">
                <div className="tinyWidthDiv">
                    <Typography className={classes.headerText}>Rank</Typography>
                </div>
                <div className={"largeWidthDiv"}>
                    <Typography className={classes.headerText}>Name</Typography>
                </div>
                <div className={"smallWidthDiv"}>
                    <Typography className={classes.headerText}>Team</Typography>
                </div>
                <div className={"smallWidthDiv"}>
                    <Typography className={classes.headerText}>Position</Typography>
                </div>
                <div className="tinyWidthDiv">
                    <Typography className={classes.headerText}>SC</Typography>
                </div>
                <div className="tinyWidthDiv">
                    <Typography className={classes.headerText}>GM</Typography>
                </div>
                <div className="tinyWidthDiv">
                    <Typography className={classes.headerText}>D</Typography>
                </div>
                <div className="tinyWidthDiv">
                    <Typography className={classes.headerText}>DE%</Typography>
                </div>
                <div className="tinyWidthDiv">
                    <Typography className={classes.headerText}>T</Typography>
                </div>
                <div className="tinyWidthDiv">
                    <Tooltip title={"Coach"}>
                        <Typography className={classes.headerText}>$</Typography>
                    </Tooltip>
                </div>
            </Grid>
        </Paper>
    )

}
