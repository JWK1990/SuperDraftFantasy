import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        width: "100%",
    },
    rootContainerGrey: {
        width: "100%",
        color: "grey",
        fontWeight: "rgba(220,220,220, 0.3)",
    },
    loadingDiv: {
        width: "100%",
    },
    addToBlockButton: {
        maxHeight: "25px",
        minHeight: "25px",
        minWidth: "25px",
        maxWidth: "25px",
    }
}));

export default function PlayerAnalysisTableRow(props) {
    const classes = useStyles();
    console.log(props.player);
    return (
        <TableRow key={props.player.id}>
            <TableCell component="th" scope="row">{props.player.id}</TableCell>
            <TableCell align="left">{props.player.fullName}</TableCell>
            <TableCell align="center">{props.player.fullPosition}</TableCell>
            <TableCell align="center">{props.player.aflTeam}</TableCell>
            <TableCell align="center">{props.player.average}</TableCell>
            <TableCell align="center">{props.player.disposals} &nbsp;({props.player.disposalEfficiency}%)</TableCell>
            <TableCell align="center">{props.player.age}</TableCell>
            <TableCell align="center">{props.player.price}</TableCell>
            <TableCell align="center">{props.player.price}</TableCell>
        </TableRow>
    )

}
