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
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    // TODO: Potentially hardcode height here to make height consistent when stats change.
    rootContainer: {
        paddingTop: 0,
    },
    rowHeader: {
        borderRight: "1px solid black",
        color: "rgba(0, 0, 0, 0.87)",
        fontWeight: 500,
    },
    defHeader: {
        color: "rgba(var(--def-color-primary), 0.8)",
    },
    defColumn: {
        backgroundColor: "rgba(var(--def-color-secondary), 0.2)",
    },
    midHeader: {
        color: "rgba(var(--mid-color-primary), 0.8)",
    },
    midColumn: {
        backgroundColor: "rgba(var(--mid-color-secondary), 0.2)",
    },
    rucHeader: {
        color: "rgba(var(--ruc-color-primary), 0.8)",
    },
    rucColumn: {
        backgroundColor: "rgba(var(--ruc-color-secondary), 0.2)",
    },
    fwdHeader: {
        color: "rgba(var(--fwd-color-primary), 0.8)",
    },
    fwdColumn: {
        backgroundColor: "rgba(var(--fwd-color-secondary), 0.2)",
    },
    summaryColumn: {
        color: "rgba(0, 0, 0, 0.87)",
        fontWeight: 500,
    }
}

const theme = createMuiTheme({
    overrides: {
        MuiTableCell: {
            root: {
                textAlign: "center",
            },
            head: {
                borderBottom: "1px solid black",
                width: "40px",
                textAlign: "center",
            }
        },
    }
});

class TeamStatsTable extends React.Component {

    render(){
        const {classes} = this.props;

        return(
            <MuiThemeProvider theme={theme}>
                <TableContainer component={Paper} className={classes.rootContainer}>
                    <Table className={classes.teamStatsTable} aria-label="Player Stat Bar">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.rowHeader}/>
                                <TableCell className={[classes.defHeader, classes.defColumn].join(" ")}>DEF</TableCell>
                                <TableCell className={[classes.midHeader, classes.midColumn].join(" ")}>MID</TableCell>
                                <TableCell className={[classes.rucHeader, classes.rucColumn].join(" ")}>RUC</TableCell>
                                <TableCell className={[classes.fwdHeader, classes.fwdColumn].join(" ")}>FWD</TableCell>
                                <TableCell>ALL</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell className={classes.rowHeader}>#</TableCell>
                                <TableCell className={classes.defColumn}>1</TableCell>
                                <TableCell className={classes.midColumn}>2</TableCell>
                                <TableCell className={classes.rucColumn}>8</TableCell>
                                <TableCell className={classes.fwdColumn}>7</TableCell>
                                <TableCell className={classes.summaryColumn}>5</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.rowHeader}>$</TableCell>
                                <TableCell className={classes.defColumn}>$70</TableCell>
                                <TableCell className={classes.midColumn}>$10</TableCell>
                                <TableCell className={classes.rucColumn}>$5</TableCell>
                                <TableCell className={classes.fwdColumn}>$7</TableCell>
                                <TableCell className={classes.summaryColumn}>$8</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.rowHeader}>Points</TableCell>
                                <TableCell className={classes.defColumn}>26 (#1)</TableCell>
                                <TableCell className={classes.midColumn}>50 (#3)</TableCell>
                                <TableCell className={classes.rucColumn}>110 (#2)</TableCell>
                                <TableCell className={classes.fwdColumn}>100 (#1)</TableCell>
                                <TableCell className={classes.summaryColumn}>40 (#1)</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(TeamStatsTable);
