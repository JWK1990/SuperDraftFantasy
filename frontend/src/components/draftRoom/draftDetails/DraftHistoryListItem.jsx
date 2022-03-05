import React from "react";
import {Divider, ListItem, ListItemText} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PurchaseReviewSymbolFetcher from "../../shared/imageFetchers/PurchaseReviewSymbolFetcher";

export default function DraftHistoryListItem(props) {

    return (
        <>
            <ListItem>
                <ListItemText
                    style={{width: "10%"}}
                    disableTypography
                    primary={
                        <>
                            <Typography variant="subtitle2" color="textSecondary" display="inline">
                                {props.draftedPlayerIndex}.&nbsp;
                            </Typography>
                        </>
                    }
                />
                <ListItemText
                    style={{width: "70%"}}
                    disableTypography
                    primary={
                        <>
                            <Typography
                                variant="subtitle2"
                                color="textPrimary"
                                display={"inline"}
                            >
                                {props.draftedPlayer.player.firstName.substring(0,1)}. {props.draftedPlayer.player.lastName}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary" display="inline">
                                &nbsp;-&nbsp;{props.draftedPlayer.player.primaryPosition.substring(0,1)}{props.draftedPlayer.player.secondaryPosition !== null ? "/" + props.draftedPlayer.player.secondaryPosition.substring(0,1) : ""} -&nbsp;
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary" display="inline">
                                {props.draftedPlayer.player.scAverage !== null ? props.draftedPlayer.player.scAverage : "N/A"}
                            </Typography>

                            <Typography variant="subtitle2" color="textSecondary">
                                {props.draftedPlayer.team.name}
                            </Typography>
                        </>
                    }
                />
                <ListItemText
                    style={{display:'flex', justifyContent:'flex-end'}}
                    primary={
                        <Typography variant="h6" color="textPrimary" align="right">
                            ${props.draftedPlayer.price}
                        </Typography>
                }
                />
                <ListItemText
                    style={{display:'flex', justifyContent:'flex-end'}}
                    primary={
                        <Typography variant="h6" color="textPrimary" align="right">
                            {PurchaseReviewSymbolFetcher.getPurchaseReviewText(props.draftedPlayer.purchaseReviewRating)}
                        </Typography>
                    }
                />
            </ListItem>
            <Divider light />
        </>
    )

}
