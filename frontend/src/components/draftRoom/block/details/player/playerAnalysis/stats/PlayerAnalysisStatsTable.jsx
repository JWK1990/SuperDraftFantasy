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
    mainTable: {
        paddingTop: 20,
        overflowX: 'auto',
    },
    positionTable: {
        paddingTop: 5,
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

    return (
        <MuiThemeProvider theme={theme}>
            <TableContainer component={Paper} className={classes.mainTable}>
                <Table aria-label="Player Stat Bar" size={"small"}>
                    <TableHead>
                        <TableRow>
                            <TableCell>DI</TableCell>
                            <TableCell>KI</TableCell>
                            <TableCell>HB</TableCell>
                            <TableCell>MA</TableCell>
                            <TableCell>TK</TableCell>
                            <TableCell>GL</TableCell>
                            <TableCell>CLR</TableCell>
                            <TableCell>CP%</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{playerDetails.disposals}</TableCell>
                            <TableCell>{playerDetails.kicks}</TableCell>
                            <TableCell>{playerDetails.handballs}</TableCell>
                            <TableCell>{playerDetails.marks}</TableCell>
                            <TableCell>{playerDetails.tackles}</TableCell>
                            <TableCell>{playerDetails.goals}</TableCell>
                            <TableCell>{playerDetails.clearances}</TableCell>
                            <TableCell>{Math.round((playerDetails.contestedPossessions/playerDetails.disposals) * 100)}%</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell>DE</TableCell>
                            <TableCell>MTG</TableCell>
                            <TableCell>I50</TableCell>
                            <TableCell>R50</TableCell>
                            <TableCell>CLG</TableCell>
                            <TableCell>CM</TableCell>
                            <TableCell>HO</TableCell>
                            <TableCell>TOG</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{playerDetails.disposalEfficiency}%</TableCell>
                            <TableCell>{playerDetails.metersGained}</TableCell>
                            <TableCell>{playerDetails.insideFiftys}</TableCell>
                            <TableCell>{playerDetails.reboundFiftys}</TableCell>
                            <TableCell>{playerDetails.clangers}</TableCell>
                            <TableCell>{playerDetails.contestedMarks}</TableCell>
                            <TableCell>{playerDetails.hitouts}</TableCell>
                            <TableCell>{Math.round(playerDetails.timeOnGround)}%</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </MuiThemeProvider>
    )

}
