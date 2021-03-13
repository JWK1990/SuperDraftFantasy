import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import PurchaseReviewSymbolFetcher from "../../../../shared/imageFetchers/PurchaseReviewSymbolFetcher";

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
        color: "red",
    },
}));

function getPurchaseReviewSymbol(rating) {
    return PurchaseReviewSymbolFetcher.getPurchaseReviewSymbol(rating);
}

export default function PurchaseReviewRatingCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={4}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="subtitle2" align="center" color="textSecondary">
                        Rating:
                    </Typography>
                    <div className={classes.scoreImageDiv}>
                        {props.purchaseReviewRating != null
                            ? <img className={classes.scoreImage}
                                   src={getPurchaseReviewSymbol(props.purchaseReviewRating)}
                                   alt="Purchase Review Score."/>
                            : null
                        }
                    </div>
                </CardContent>
            </div>
        </Card>
    )

}
