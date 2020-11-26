import React from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function StatBar(props) {
    const classes = useStyles();

    return (
        <TableContainer /*component={Paper}*/>
            <Table className={classes.table} aria-label="Player Stat Bar">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">K</TableCell>
                        <TableCell align="right">HB</TableCell>
                        <TableCell align="right">M</TableCell>
                        <TableCell align="right">T</TableCell>
                        <TableCell align="right">G</TableCell>
                        <TableCell align="right">I50</TableCell>
                        <TableCell align="right">CL</TableCell>
                        <TableCell align="right">TOG%</TableCell>
                        <TableCell align="right">CP</TableCell>
                        <TableCell align="right">UP</TableCell>
                        <TableCell align="right">DE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow>
                            <TableCell align="right">26</TableCell>
                            <TableCell align="right">14</TableCell>
                            <TableCell align="right">8</TableCell>
                            <TableCell align="right">5</TableCell>
                            <TableCell align="right">3.2</TableCell>
                            <TableCell align="right">7</TableCell>
                            <TableCell align="right">5</TableCell>
                            <TableCell align="right">80%</TableCell>
                            <TableCell align="right">5.5</TableCell>
                            <TableCell align="right">7.9</TableCell>
                            <TableCell align="right">75%</TableCell>
                        </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
