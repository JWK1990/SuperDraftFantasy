import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import WillDayImage from '../../../images/WillDay.jpeg';
import CircularStatIcon from "../circularStatBar/CircularStatIcon";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        height: "100%",
        flexGrow: 1,
        flexShrink: 1,
    },
    detailsContainer: {
        height: "100%",
    },
    playerImage: {
        width: "228px",
    }
}));

export default function PlayerBarSecondary(props) {
    const classes = useStyles();

    if(!props.player) {
        return null;
    }

    return (
        <Grid container className={classes.rootContainer} spacing={1} direction="row" justify="flex-start" alignItems="center">
            <Grid item>
                <img src={WillDayImage} className={classes.playerImage} alt={props.statName}/>
            </Grid>
            <Grid item>
                <Grid container className={classes.detailsContainer} direction={"row"}>
                    <Grid item xs={12}>
                        <Typography variant="h4" color="textPrimary">
                            {props.player ? props.player.firstName + " " + props.player.lastName : null}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {props.player.secondaryPosition ?
                                props.player.primaryPosition + "/" + props.player.secondaryPosition
                                : props.player.primaryPosition
                            }
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box display={"flex"} flexDirection={"row"}>
                            <CircularStatIcon
                                statName="SC"
                                statValue= {props.player.average}
                                maxStatValue= {150}
                                showHeader={true}
                            />
                            <CircularStatIcon
                                statName="Rank"
                                statValue= {props.player.average}
                                maxStatValue= {200}
                                showHeader={true}
                            />
                            <CircularStatIcon
                                statName="Games"
                                statValue= {props.player.average}
                                maxStatValue= {170}
                                showHeader={true}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
