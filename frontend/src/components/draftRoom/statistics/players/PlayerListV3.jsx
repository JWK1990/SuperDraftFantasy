import React from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import PlayerAnalysisTableRow from "./PlayerAnalysisTableRow";
import Grid from "@material-ui/core/Grid";
import DraftService from "../../../../services/DraftService";
import Paper from "@material-ui/core/Paper";
import PlayerFilter from "./PlayerFilter";

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
                <Grid item xs={12}>
                    <PlayerFilter/>
                </Grid>
                <Grid item xs={12} style={{height: "calc(100vh - 240px)"}}>
                    <TableContainer component={Paper} style={{maxHeight: "100%", overflowY: "scroll"}}>
                        <Table stickyHeader aria-label="players table">
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

export default PlayerListV3;
