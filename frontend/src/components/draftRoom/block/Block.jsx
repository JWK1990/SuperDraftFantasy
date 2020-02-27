import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
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
}));

function DraftRoomBlock(props) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Container component="main" maxWidth="lg">
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        <p>{props.block ? props.block.playerId : "TBA"} </p>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        <p>{props.block ? props.block.teamId : "TBA"} </p>
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton aria-label="previous" onClick={() => props.sendAddToBlock()} >
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon} onClick={() => props.sendBid()} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image="frontend/src/images/logo.svg"
                title="Player Picture"
            />
        </Container>
    );
}

export default DraftRoomBlock;