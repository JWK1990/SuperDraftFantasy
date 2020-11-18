import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import CircularStatIcon from "./CircularStatIcon";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: "100%"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    playerIcon: {
        width: 237,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    circleStatic: {
        outline: 1,
    }
}));

export default function BlockPlayer(props) {
    const classes = useStyles();
    const theme = useTheme();

    if(!props.player) {
        return <div/>
    }
    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {props.player.firstName + " " + props.player.lastName}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.player.secondaryPosition ?
                            props.player.primaryPosition + "/" + props.player.secondaryPosition
                            : props.player.primaryPosition
                        }
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </div>
            </div>
            <CardMedia
                className={classes.playerIcon}
                image={require("../../../../images/WillDay.jpeg")}
                title="On The Block Player"
            />
            <div className={classes.details}>
                <CardContent className={classes.controls}>
                    <CircularStatIcon
                        statName="SC"
                        statValue= {95}
                        maxStatValue= {100}
                    />
                    <CircularStatIcon
                        statName="GM"
                        statValue= {14}
                        maxStatValue= {22}
                    />
                    <CircularStatIcon
                        statName="DISP"
                        statValue= {25}
                        maxStatValue= {30}
                    />
                    <CircularStatIcon
                        statName="MK"
                        statValue= {2}
                        maxStatValue= {15}
                    />
                    {
                        {
                            'DEF':
                                <CircularStatIcon
                                    statName="RB50"
                                    statValue= {3}
                                    maxStatValue= {5}/>,
                            'MID':
                                <CircularStatIcon
                                    statName="CL"
                                    statValue= {7}
                                    maxStatValue= {13}/>,
                            'RUC':
                                <CircularStatIcon
                                    statName="HO"
                                    statValue= {25}
                                    maxStatValue= {40}/>,
                            'FWD':
                                <CircularStatIcon
                                    statName="GOALS"
                                    statValue= {3.5}
                                    maxStatValue= {7}/>,
                        }[props.player.primaryPosition]
                    }
                </CardContent>
            </div>
        </Card>
    );
}
