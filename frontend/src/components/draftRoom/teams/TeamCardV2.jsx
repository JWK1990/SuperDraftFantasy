import React from 'react';
import {makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {createMuiTheme} from "@material-ui/core";
import {connect} from "react-redux";
import {draftTeamSelector} from "../../../store/selectors/DraftSelectors";
import TeamLogoFetcher from "../../shared/imageFetchers/TeamLogoFetcher";
import {leadBidderTeamIdSelector, onTheBlockTeamIdSelector} from "../../../store/selectors/BlockSelectors";
import Box from "@material-ui/core/Box";

const theme = createMuiTheme({
    typography: {
        button: {
            textTransform: "none"
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        // Ensures that each card takes up the max available height.
        // This reduces the empty vertical space between the cards.
        display: 'flex',
        height: "100%",
        backgroundColor: "rgba(109, 130, 153, 0.2)"
    },
    emptySlot: {
        display: 'flex',
        width: "100%",
        backgroundColor: "lightgrey",
        border: "dashed 1px grey"
    },
    // TODO: Work out how to have images stretch to 100% of the Grid Item height whilst inside the Button.
    teamLogo: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        overflow: "hidden",
        position: "relative",
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
        textAlign: "left",
    },
    userName: {
        fontSize: "0.8vw",
        padding: "0 5px 5px 5px",
        textAlign: "left",
    },
    teamDetails: {
        fontSize: "0.8vw",
        padding: "0 5px 0 5px",
        textAlign: "left",
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
    },
    gridItem: {
        padding: 2,
    },
    selected: {
        backgroundColor: "rgba(102, 255, 0, 0.75)",
    },
    leadBidder: {
        backgroundColor: "rgba(0, 182, 18, 0.5)",
    },
    onTheBlock: {
        backgroundColor: "rgba(252, 209, 22, 0.5)",
    },
}));

function TeamCardV2(props) {

    const classes = useStyles();

    if(props.team == null) {
        return <Paper elevation={3} className={classes.emptySlot}>
            <Box margin={"auto"}>VACANT</Box>
        </Paper>
    }

    const teamLogo = TeamLogoFetcher.getTeamLogo(props.team.id);

    // TODO: Add ellipsis to text that goes too wide.
    return (
        <MuiThemeProvider theme={theme}>
            <Grid item xs={12} className={classes.gridItem}>
                <Paper elevation={1}
                       className={[
                           classes.root,
                           props.isSelected ? classes.selected : '',
                           props.leadBidderTeamId === props.team.id
                               ? classes.leadBidder
                               : props.onTheBlockTeamId === props.team.id
                                   ? classes.onTheBlock
                                   : '',
                       ].join(' ')}
                >
                    <Button
                        style={{width: "100%", height: "100%", padding: "0px"}}
                        onClick={() => props.handleTeamClick(props.team.id)}
                    >
                        <Grid container spacing={1} alignItems={"center"}>
                                <Grid item xs={1} className={classes.teamLogo}>
                                    {
                                        teamLogo == null
                                            ? <></>
                                            : (
                                                <img
                                                    className={classes.teamLogo}
                                                    src={TeamLogoFetcher.getTeamLogo(props.team.id)}
                                                    title={"Team Logo"}
                                                    alt={"Team Logo"}
                                                />
                                            )
                                    }
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
                    </Button>
                </Paper>
            </Grid>
        </MuiThemeProvider>
    );
}

const mapStateToProps = (state, props) => {
    return {
        team: draftTeamSelector(state, props.teamId),
        leadBidderTeamId: leadBidderTeamIdSelector(state),
        onTheBlockTeamId: onTheBlockTeamIdSelector(state),
    };
};

export default connect(mapStateToProps)(TeamCardV2);
