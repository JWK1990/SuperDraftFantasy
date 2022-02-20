import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import PurchaseReviewSymbolFetcher from "../../../../shared/imageFetchers/PurchaseReviewSymbolFetcher";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import TeamLogoFetcher from "../../../../shared/imageFetchers/TeamLogoFetcher";
import Test2 from "../../../../../images/Test2.png";

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        height: 'calc(var(--draft-room-block-height) - 20px)',
        // backgroundImage: `url(${Test2})`,
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
    scoreImage: {
        width: "62px",
        height: "62px",
    },
    teamLogo: {
        width: "62px",
        height: "62px",
    },
    smallIcon: {
        fontSize: 14,
        color: "grey",
    },
    textSymbol: {
        fontSize: 20,
        color: "grey",
        fontWeight: "bold",
    },
    price: {
        lineHeight: "50px",
    },
    imageDiv: {
        textAlign: "center",
    }
}));

function getPurchaseReviewSymbol(rating) {
    return PurchaseReviewSymbolFetcher.getPurchaseReviewSymbol(rating);
}

function Tag() {
    return null;
}

export default function PurchaseReviewRatingCard(props) {
    const classes = useStyles();

    console.log("PRP: ", props.player);

    return (
        <Grid container alignItems={"center"} justify={"flex-start"}
              component={Paper} elevation={0} className={classes.rootContainer}
        >
            <Grid item xs={4}>
                <Typography variant={"subtitle2"} align={"center"}>Sold To</Typography>
                <div className={classes.imageDiv}>
                    <img className={classes.teamLogo}
                         src={TeamLogoFetcher.getTeamLogo(props.player.draftTeamId)}
                         alt="Team Logo."
                    />
                </div>
            </Grid>
            <Grid item xs={4}>
                <Typography variant={"subtitle2"} align={"center"}>Sold For</Typography>
                <Typography variant="h3" align={"center"} color="textPrimary" className={classes.price}>
                    <sup className={classes.textSymbol}>$</sup>
                    {props.player.price}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant={"subtitle2"} align={"center"}>$ 🠉🠋</Typography>
                <Typography variant="h3" align={"center"} color="textPrimary" className={classes.price}>
                    {
                        props.player.price > props.player.price2021
                            ? <><sup className={classes.textSymbol} style={{color: "green"}}>🠉</sup>
                                {props.player.price - props.player.price2021}</>
                            : props.player.price < props.player.price2021
                                ? <><sup className={classes.textSymbol} style={{color: "red"}}>🠋</sup>
                                    {props.player.price2021 - props.player.price}</>
                                : <sup className={classes.textSymbol}>-</sup>
                    }
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant={"subtitle2"} align={"center"}>Rank</Typography>
                <Typography variant="h3" align={"center"} color="textPrimary" className={classes.price}>
                    <sup className={classes.textSymbol}># </sup>
                    25 {/* TODO - Add value rank here. */}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                {props.player.purchaseReviewRating != null
                    ? (
                        <>
                            <Typography variant={"subtitle2"} align={"center"}>Moneyball Rating</Typography>
                            <div className={classes.imageDiv}>
                                <img className={classes.scoreImage}
                                     src={getPurchaseReviewSymbol(props.player.purchaseReviewRating)}
                                     alt="Purchase Review Score."
                                />
                            </div>
                        </>
                    )
                    : null }
            </Grid>
            <Grid item xs={4}>
                {props.player.purchaseReviewRating != null
                    ? (
                        <>
                            <Typography variant={"subtitle2"} align={"center"}>PP Rating</Typography>
                            <div className={classes.imageDiv}>
                                <img className={classes.scoreImage}
                                     src={getPurchaseReviewSymbol(props.player.purchaseReviewRating)}
                                     alt="Purchase Review Score."
                                />
                            </div>
                        </>
                    )
                    : null }
                </Grid>
        </Grid>
    )
}
