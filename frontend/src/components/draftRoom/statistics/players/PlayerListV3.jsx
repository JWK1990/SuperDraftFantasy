import React, {Component} from "react";
import {VariableSizeList} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Table,
    TableBody, TableCell,
    TableContainer,
    TableHead, TableRow
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PlayerAnalysisTableRow from "./PlayerAnalysisTableRow";
import ExpandedPlayerContainer from "./ExpandedPlayerContainer";
import DraftRoomPlayersSelected from "./selected/Selected";
import PlayerAnalysisTableHeader from "./PlayerAnalysisTableHeader";
import Grid from "@material-ui/core/Grid";
import DraftService from "../../../../services/DraftService";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import PlayerFilter from "./PlayerFilter";

const styles = {
    table: {
        minWidth: 650,
    },
};

class PlayerListV3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            players: [],
            expandedPanelIndex: null,
        };
    }

    componentDidMount() {
        this.loadNextPage();
    }

    loadNextPage = () => {
        this.setState({isNextPageLoading: true}, () => {
            //const positionFilter = this.getPositionFilterList();
            DraftService.getPlayersPageByDraft(
                3, // this.props.draftId,
                this.state.players.length/25,
                40,
                "", // this.state.lastNameSearch,
                "", // positionFilter,
                true, // this.state.isHideDraftedFilterOn,
            )
                .then(players => {
                        this.setState(state => ({
                            players: [...state.players].concat(players.data.content),
                        }));
                    }
                );
        });
    };

    render() {
        const {classes} = this.props;

        return (
            <Grid container  style={{height: "100%"}}>
                <Grid item xs={12} style={{height: "5%"}}>
                    <PlayerFilter/>
                </Grid>
                <Grid item xs={12} style={{height: "95%"}}>
                    <TableContainer component={Paper} style={{maxHeight: "100%", overflowY: "scroll"}}>
                        <Table className={classes.table} stickyHeader aria-label="players table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="center">Position</TableCell>
                                    <TableCell align="center">Team</TableCell>
                                    <TableCell align="center">SC</TableCell>
                                    <TableCell align="center">Disp (DE)</TableCell>
                                    <TableCell align="center">Age</TableCell>
                                    <TableCell align="center">$ ('20)</TableCell>
                                    <TableCell align="center">$ ('21)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.players.map((player, index) => {
                                        return <PlayerAnalysisTableRow player={player}/>
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        )
    }
}

// Render an item or a loading indicator.
// TODO: Work out how to better handle slotAvailability to allow AddToBlock for each row.
class PlayerRow extends React.Component {

    constructor(props) {
        super(props);
    }


}

export default withStyles(styles)(PlayerListV3);
