import React from "react";
import Typography from "@material-ui/core/Typography";
import ScoreLogo from "../../../../../images/APlusSymbol.svg";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";

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
    scoreImageDiv: {
        display: 'flex',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    scoreImage: {
        width: 100,
    },
}));

export default function PurchaseReviewRatingCard(props) {
    const classes = useStyles();
    console.log("Purcahse REview Rating:", props.purchaseReviewRating);

    return (
        <Card className={classes.root} elevation={4}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="subtitle2" align="center" color="textSecondary">
                        Rating:
                    </Typography>
                    <Typography>{props.purchaseReviewRating}</Typography>
                    <div className={classes.scoreImageDiv}>
                        <img className={classes.scoreImage} src={ScoreLogo} alt="Purchase Review Score."/>
                    </div>
                </CardContent>
            </div>
        </Card>
    )

}
