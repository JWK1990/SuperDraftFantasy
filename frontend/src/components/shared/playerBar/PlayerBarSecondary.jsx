import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularStatBar from "../circularStatBar/CircularStatBar";
import Card from "@material-ui/core/Card";
import StatBar from "../StatBar";
import Grid from "@material-ui/core/Grid";
import WillDayImage from '../../../images/WillDay.jpeg';
import CircularStatBarSecondary from "../circularStatBar/CircularStatBarSecondary";
import CircularStatIcon from "../circularStatBar/CircularStatIcon";
import {Paper} from "@material-ui/core";

/*
const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        height: "100%",
        width: "100%",
    },
    cardIconDiv: {
        display: 'flex',
        flexDirection: 'column',
    },
    playerIcon: {
        width: 320,
        height: "100%",
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    playerHeader: {
        paddingLeft: 40,
    }
}));
*/

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        height: "100%",
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
            <Grid container className={classes.rootContainer} spacing={1} direction="row" justify="space-between" alignItems="stretch">
                <Grid item xs={4}>
                    <img src={WillDayImage} className={classes.playerImage}/>
                </Grid>
                <Grid item xs={8}>
                    <Grid container className={classes.detailsContainer} spacing={1} direction="row" justify="space-between" alignItems="center">
                        <Grid item xs={12}>
                            <div className={classes.playerTextDiv}>
                                <Typography variant="h4" color="textPrimary">
                                    {props.player ? props.player.firstName + " " + props.player.lastName : null}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {props.player.secondaryPosition ?
                                        props.player.primaryPosition + "/" + props.player.secondaryPosition
                                        : props.player.primaryPosition
                                    }
                                </Typography>
                            </div>

                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1} direction="row">
                                <Grid item>
                                    <CircularStatIcon
                                        statName="SC"
                                        statValue= {props.player.average}
                                        maxStatValue= {150}
                                        showHeader={true}
                                    />
                                </Grid>
                                <Grid item>
                                    <CircularStatIcon
                                        statName="Rank"
                                        statValue= {props.player.average}
                                        maxStatValue= {200}
                                        showHeader={true}
                                    />
                                </Grid>
                                <Grid item>
                                    <CircularStatIcon
                                        statName="Games"
                                        statValue= {props.player.average}
                                        maxStatValue= {170}
                                        showHeader={true}
                                    />
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


/*        <Card className={classes.card}>
            <div className={classes.cardIconDiv}>
                <CardMedia
                    className={classes.playerIcon}
                    image={require("../../../images/WillDay.jpeg")}
                    title="On The Block Player"
                />
            </div>

            <div className={classes.cardTextDiv}>
                <CardContent>
                    <Typography component="h4" variant="h4">
                        {props.player ? props.player.firstName + " " + props.player.lastName : null}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.player.secondaryPosition ?
                            props.player.primaryPosition + "/" + props.player.secondaryPosition
                            : props.player.primaryPosition
                        }
                    </Typography>
                </CardContent>
                <CircularStatBar player={props.player} />
                <StatBar player={props.player}/>
            </div>
        </Card>*/
    );
}
