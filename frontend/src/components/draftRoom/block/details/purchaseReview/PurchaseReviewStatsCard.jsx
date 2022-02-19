import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TeamLogo from "../../../../../images/AustralianFlagLogo.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: 'var(--player-card-height)',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: 1,
    },
    content: {
        flex: '1 0 auto',
    },
    teamImage: {
        width: 50,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    dollarSymbol: {
        fontSize: 14,
        color: "grey",
    },
}));

export default function PurchaseReviewStatsCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={4}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="subtitle2" align="center" color="textSecondary">
                        Sold To:
                    </Typography>
                    <img className={classes.teamImage} src={TeamLogo} alt="Purchase Review Team Logo."/>
                    <Typography variant="subtitle2" align="center" color="textSecondary">
                        Sold For:
                    </Typography>
                    <Typography variant="h4" align="left" color="textPrimary">
                        <sup className={classes.dollarSymbol}>$</sup>
                        10
                    </Typography>
                    <Typography variant="subtitle2" align="center" color="textSecondary">
                        Rank:
                    </Typography>
                    <Typography variant="h4" align="left" color="textPrimary">
                        <sup className={classes.dollarSymbol}>#</sup>
                        20
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
}
