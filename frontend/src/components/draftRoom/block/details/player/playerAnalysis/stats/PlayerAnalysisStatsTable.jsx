import React, {useRef} from "react";
import StatBar from "../../../../../../shared/StatBar";
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
        paddingTop: 10,
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

    // Adds the ability to horizontally scrolls with the mousewheel.
    // TODO: Make overflow of body hidden to stop is scrolling the body also.
    const scrollRef = useRef(null);

    const onWheel = e => {
        console.log(e, scrollRef.current);
        if(e.deltaY === 0) return;
        e.preventDefault();
        const container = scrollRef.current;
        const containerScrollPosition = scrollRef.current.scrollLeft;

        container.scrollTo({
            top: 0,
            left: containerScrollPosition + e.deltaY,
        });
    };

    return (
        <MuiThemeProvider theme={theme}>
            <TableContainer component={Paper} className={classes.tableContainer} ref={scrollRef} onWheel={onWheel}>
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
                            <TableCell>1</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>8</TableCell>
                            <TableCell>7</TableCell>
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
                    </TableBody>
                </Table>
            </TableContainer>
        </MuiThemeProvider>
    )

}
