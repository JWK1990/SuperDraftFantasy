import {
    createMuiTheme,
    MuiThemeProvider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import TeamLogo from "../../../../../../images/AustralianFlagLogo.jpg";
import ScoreLogo from "../../../../../../images/APlusSymbol.svg";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const theme = createMuiTheme({
    overrides: {
        MuiTableCell: {
            root: {
                border: 0,
                textAlign: "center",
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

export default function RatingsTable() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <TableContainer>
                <Table aria-label="Purchase Review">
                    <TableHead>
                        <TableRow className={classes.headerRow}>
                            <TableCell>Sold To</TableCell>
                            <TableCell>Sold For</TableCell>
                            <TableCell>Rating</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <img className={classes.teamImage} src={TeamLogo} alt="Purchase Review Team Logo."/>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h3" align="center" color="textPrimary">
                                    <sup className={classes.dollarSymbol}>$</sup>
                                    10
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <img className={classes.scoreImage} src={ScoreLogo} alt="Purchase Review Score."/>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </MuiThemeProvider>
    )
}
