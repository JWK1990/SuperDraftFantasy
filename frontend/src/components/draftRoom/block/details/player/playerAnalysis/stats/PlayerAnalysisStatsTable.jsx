import React, {useEffect, useState} from "react";
import {
    createMuiTheme,
    MuiThemeProvider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DraftService from "../../../../../../../services/DraftService";

const theme = createMuiTheme({
    overrides: {
        MuiTableCell: {
            sizeSmall: {
                padding: 8,
                textAlign: "center",
            },
        }
    }
});

const useStyles = makeStyles(() => ({
    tableContainer: {
        paddingTop: 20,
        overflowX: 'auto',
    },
    rowHeader: {
        color: "var(--text-black)",
        fontWeight: 500,
    },
    cell: {
        textAlign: "center",
        padding: 0,
    },
}));

export default function PlayerAnalysisStatsTable(props) {
    const classes = useStyles();
    const [playerDetails, setPlayerDetails] = useState(null);

    useEffect(() => {
        let mounted = true;
        DraftService.getSeasonSummaryByPlayerIdAndYear(props.playerId, 2020)
            .then(playerDetails => {
                if(mounted) {
                    setPlayerDetails(playerDetails.data);
                }
            })
        return () => mounted = false;
    }, [props.playerId])

    if(!playerDetails) {
        return null;
    }
    console.log("PlayerId:", props.playerId);
    console.log(playerDetails);

    return (
        <MuiThemeProvider theme={theme}>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table aria-label="Player Stat Bar" size={"small"}>
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            <TableCell>K</TableCell>
                            <TableCell>M</TableCell>
                            <TableCell>T</TableCell>
                            <TableCell>CP%</TableCell>
                            <TableCell>I50</TableCell>
                            <TableCell>CL</TableCell>
                            <TableCell>TOG%</TableCell>
                            <TableCell>FD</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className={classes.rowHeader}>2020</TableCell>
                            <TableCell>{playerDetails.kicks}</TableCell>
                            <TableCell>{playerDetails.marks}</TableCell>
                            <TableCell>{playerDetails.tackles}</TableCell>
                            <TableCell>{Math.round((playerDetails.contestedPossessions/playerDetails.disposals) * 100)}%</TableCell>
                            <TableCell>{playerDetails.insideFiftys}</TableCell>
                            <TableCell>{playerDetails.clangers}</TableCell>
                            <TableCell>{Math.round(playerDetails.timeOnGround)}%</TableCell>
                            <TableCell>{Math.round((playerDetails.freesFor - playerDetails.freesAgainst) * 10)/10}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.rowHeader}>Career</TableCell>
                            <TableCell>70</TableCell>
                            <TableCell>10</TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>7</TableCell>
                            <TableCell>8</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>4</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </MuiThemeProvider>
    )

}
