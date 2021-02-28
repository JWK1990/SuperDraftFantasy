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
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularStatIcon from "./CircularStatIcon";
import CardContent from "@material-ui/core/CardContent";

const theme = createMuiTheme({
    overrides: {
        MuiTableCell: {
            root: {
                border: 0,
                textAlign: "left",
                padding: 0,
            },
            head: {
                border: 0,
                paddingBottom: 0,
            },
            body: {
                border: 0,
            }
        },
    }
});

const useStyles = makeStyles((theme) => ({
    // TODO: Potentially make images 100% width in GlobalStyles.
    scoreImage: {
        width: "100%",
    },
    teamImage: {
        width: "100%",
    },
    borderlessCell: {
        border: 0,
    },
    dollarSymbol: {
        fontSize: 14,
        color: "grey",
    }
}));

export default function CircularStatBarSecondary(props) {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <TableContainer>
                <Table aria-label="Stat Bar Secondary">
                    <TableHead>
                        <TableRow>
                            {props.statIcons.map((statIcon, index) => (
                                <TableCell key={index}>{statIcon.label}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {props.statIcons.map((statIcon, index) => (
                                <TableCell key={index}>{statIcon.component}</TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </MuiThemeProvider>
    )
}
