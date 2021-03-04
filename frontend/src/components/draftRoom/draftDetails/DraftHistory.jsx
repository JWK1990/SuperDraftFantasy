import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {List} from "@material-ui/core";
import DraftHistoryListItem from "./DraftHistoryListItem";

const useStyles = makeStyles((theme) => ({
    draftHistoryRootDiv: {
        width: "100%",
        height: "100%",
        overflow: "auto",
        '& .MuiListItemIcon-root': {
            minWidth: 40,
        }
    },
    playerName: {
        fontWeight: 500,
        fontSize: 16,
    }
}));

export default function DraftHistory(props) {
    const classes = useStyles();

    return (
        <div className={classes.draftHistoryRootDiv}>
            <List dense>
                {props.draftedPlayersList.map((draftedPlayer, index) => (
                    <DraftHistoryListItem draftedPlayer={draftedPlayer} key={draftedPlayer.player.id + "-" + index}/>
                ))}
            </List>
        </div>
    )

}
