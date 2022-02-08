import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: "100%",
    },
    teamLogo: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    teamDetailsDiv: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
    },
    budgetDiv: {
        display: 'flex',
        justifyContent: 'right',
    },
    budgetContent: {
        flex: '1 0 auto',
        textAlign: "center",
    },
    teamName: {
        fontSize: "1vw",
        fontWeight: "bold",
        padding: "0 5px 0 5px",
    },
    userName: {
        fontSize: "0.8vw",
        padding: "0 5px 5px 5px",
    },
    teamDetails: {
        fontSize: "0.8vw",
        padding: "0 5px 0 5px",
    },
    maxBidHeading: {
        fontSize: "0.7vw",
        textAlign: "center",
        padding: "0 5px 0 5px",
    },
    maxBid: {
        fontSize: "1.5vw",
        textAlign: "center",
        padding: "5px 0 5px 0",
    }
}));

export default function TeamCardV2(props) {

    const classes = useStyles();
    if(props.team === "VACANT") {
        return <Paper elevation={1} className={classes.root}> &nbsp; </Paper>
    }
    // TODO: Add ellipsis to text that goes too wide.
    return (
        <Paper elevation={3} className={classes.root}>
            <Grid container spacing={1} alignItems={"center"}>
                <Grid item xs={1} className={classes.teamLogo}>
                    <img
                        className={classes.teamLogo}
                        src={require("../../../images/AustralianFlagLogo.jpg")}
                        title="Team Logo"
                    />
                </Grid>
                <Grid item xs={8}>
                    <Typography className={classes.teamName}>
                        {props.team.name}
                    </Typography>
                    <Typography color="textSecondary" className={classes.userName}>
                        {props.team.user.username}
                    </Typography>
                    <Typography color="textSecondary" className={classes.teamDetails}>
                        {props.team.teamPlayerJoins.length}/{props.numOfPlayersRequired} - ${props.team.budget} remaining
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography color="textSecondary" className={classes.maxBidHeading}>
                        Max Bid
                    </Typography>
                    <Typography className={classes.maxBid}>
                        ${props.team.maxBid}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
        /*
        <Paper elevation={5} className={classes.root}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.teamLogo}
                    image={require("../../../images/AustralianFlagLogo.jpg")}
                    title="Team Logo"
                />
                <div className={classes.teamDetailsDiv}>
                    <CardContent className={classes.teamDetailsContent}>
                        <Typography className={classes.teamName}>
                            {props.team.name}
                        </Typography>
                        <Typography color="textSecondary" className={classes.userName}>
                            {props.team.user.username}
                        </Typography>
                        <Typography color="textSecondary" className={classes.details}>
                            ${props.team.budget} remaining
                        </Typography>
                        <Typography color="textSecondary" className={classes.details}>
                            {props.team.teamPlayerJoins.length}/{props.numOfPlayersRequired} players
                        </Typography>
                    </CardContent>
                </div>
                <div className={classes.budgetDiv}>
                    <CardContent className={classes.budgetContent}>
                        <Typography color="textSecondary" className={classes.details}>
                            Max Bid
                        </Typography>
                        <Typography className={classes.maxBid}>
                            ${props.team.maxBid}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </Paper>
        */
    );
}
