import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PlayerPictureFetcher from "../../../../../shared/imageFetchers/PlayerPictureFetcher";
import BlockPlayerYearStats from "./stats/BlockPlayerYearStats";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: "var(--player-card-height)",
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
    },
    content: {
        flex: '1 0 auto',
    },
    playerImage: {
        width: 188,
    },
    controls: {
        alignItems: 'flex-start',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        height: "100%",
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

function getPlayerPicture(id) {
    return PlayerPictureFetcher.getPlayerPicture(id);
}

export default function BlockPlayerCard(props) {
    const classes = useStyles();

    if(!props.player) {
        return null;
    }

    return (
        <Card className={classes.root} elevation={0}>
            <CardMedia
                className={classes.playerImage}
                image={getPlayerPicture(props.player.id)}
                title={props.player.firstName + " " + props.player.lastName}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" style={{fontWeight: "bold"}}>
                        {props.player ? props.player.firstName + " " + props.player.lastName : null}
                    </Typography>
                    <Typography variant="subtitle1" color="textPrimary">
                        {props.player.secondaryPosition ?
                            props.player.primaryPosition + "/" + props.player.secondaryPosition
                            : props.player.primaryPosition
                        }
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.player.aflTeamId}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <BlockPlayerYearStats player={props.player}/>
                </div>
            </div>
        </Card>
    );
}
