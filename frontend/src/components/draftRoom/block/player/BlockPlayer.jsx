import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularStatBar from "./stats/CircularStatBar";

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        height: "100%",
    },
    cardIconDiv: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardTextDiv: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 20,
    },
    content: {
        flex: '1 0 auto',
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

export default function BlockPlayer(props) {
    const classes = useStyles();
    const theme = useTheme();

    if(!props.player) {
        return <div />;
    }

    return (
        <Card className={classes.card}>
            <div className={classes.cardIconDiv}>
                <CardMedia
                    className={classes.playerIcon}
                    image={require("../../../../images/WillDay.jpeg")}
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
            </div>
        </Card>
    );
}
