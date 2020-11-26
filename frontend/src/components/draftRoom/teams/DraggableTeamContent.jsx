import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: "100%",
        height: "100%",
    },
    teamLogo: {
        width: 50,
        height: 50,
    },
    teamDetailsDiv: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
    },
    teamDetailsContent: {
        flex: '1 0 auto',
        paddingTop: 5,
        paddingBottom: 5,
    },
    budgetDiv: {
        display: 'flex',
        justifyContent: 'right',
    },
    budgetContent: {
        flex: '1 0 auto',
        textAlign: "center",
    },
}));

export default function DraggableTeamContent(props) {

    const classes = useStyles();

    // TODO: Add ellipsis to text that goes too wide.
    return (
        <Paper elevation={10} className={classes.root}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.teamLogo}
                    image={require("../../../images/AustralianFlagLogo.jpg")}
                    title="Team Logo"
                />
                <div className={classes.teamDetailsDiv}>
                    <CardContent className={classes.teamDetailsContent}>
                        <Typography component="h5" variant="h5">
                            {props.team.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {props.team.user.username}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            ${props.team.budget} remaining - {props.team.teamPlayerJoins.length}/{props.numOfPlayersRequired} players
                        </Typography>
                    </CardContent>
                </div>
                <div className={classes.budgetDiv}>
                    <CardContent className={classes.budgetContent}>
                        <Typography variant="subtitle1" color="textSecondary">
                            Max Bid
                        </Typography>
                        <Typography component="h5" variant="h5">
                            ${props.team.maxBid}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </Paper>
    );
}
