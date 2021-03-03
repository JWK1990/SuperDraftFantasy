import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import WillDayImage from "../../../../../../images/WillDay.jpeg";
import CircularStatIcon from "../../../../../shared/circularStatBar/CircularStatIcon";
import TeamStatsBarChart from "../../../../statistics/teams/teamStats/graphs/TeamStatsBarChart";
import StatTabPanel from "../../../../../shared/StatTabPanel";
import BlockPlayerStatTabPanel from "./stats/BlockPlayerStatTabPanel";

const useStyles = makeStyles((theme) => ({
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
    playerImage: {
        width: 170,
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

export default function BlockPlayerCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={4}>
            <CardMedia
                className={classes.playerImage}
                image={WillDayImage}
                title="Purchase Review Player Image."
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
                    <BlockPlayerStatTabPanel player={props.player}/>
                </div>
            </div>
        </Card>
    );
}
