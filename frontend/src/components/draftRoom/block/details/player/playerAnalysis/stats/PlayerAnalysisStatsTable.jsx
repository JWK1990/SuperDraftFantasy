import React from "react";
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

    if(!props.player) {
        return null;
    }

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
                            <TableCell>I50</TableCell>
                            <TableCell>CL</TableCell>
                            <TableCell>TOG%</TableCell>
                            <TableCell>CP</TableCell>
                            <TableCell>UP</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className={classes.rowHeader}>2020</TableCell>
                            <TableCell>{props.player.kicks}</TableCell>
                            <TableCell>{props.player.marks}</TableCell>
                            <TableCell>{props.player.tackles}</TableCell>
                            <TableCell>{props.player.insideFiftys}</TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>4</TableCell>
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
                        <TableRow>
                            <TableCell className={classes.rowHeader}>PS</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>8</TableCell>
                            <TableCell>7</TableCell>
                            <TableCell>5</TableCell>
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
