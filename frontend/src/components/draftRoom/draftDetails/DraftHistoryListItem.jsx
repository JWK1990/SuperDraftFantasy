import React from "react";
import {Divider, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    listItem: {
        width: '100%',
    },
    playerName: {
        fontWeight: 500,
        fontSize: 16,
    }
}));

export default function DraftHistoryListItem(props) {
    const classes = useStyles();

    return (
        <>
            <ListItem className={classes.listItem}>
                <ListItemIcon>
                    <FolderIcon />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    primary={
                        <Typography
                            variant="subtitle2"
                            color="textPrimary"
                            className={classes.playerName}
                        >
                            {props.draftedPlayer.player.firstName.substring(0,1)}. {props.draftedPlayer.player.lastName}
                        </Typography>
                    }
                    secondary={
                        <div>
                            <Typography variant="subtitle2" color="textSecondary">
                                {props.draftedPlayer.player.fullPosition} - {props.draftedPlayer.player.average}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                {props.draftedPlayer.team.name}
                            </Typography>
                        </div>
                    }
                />
                <ListItemText
                    primary={
                        <Typography variant="h6" color="textPrimary" align="right">
                            ${props.draftedPlayer.price}
                        </Typography>}
                />
            </ListItem>
            <Divider light />
        </>
    )

}
