import React from "react";
import Container from "@material-ui/core/Container";
import {connect} from "react-redux";
import {myDraftsSelector} from "../../store/selectors/DraftSelectors";
import {getMyDraftsAction} from "../../store/actions";
import {Redirect} from "react-router-dom";
import CsvParserUtils from "../../utils/CsvParserUtils";
import Button from "@material-ui/core/Button";
import ImportedPlayerListUtils from "../../utils/ImportedPlayerListUtils";
import {userIdSelector} from "../../store/selectors/UserSelectors";
import {CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import draftService from "../../services/DraftService";

class MyDrafts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDraft: '',
            redirectPath: null,
            isUploading: false,
        };
    }

    fileUploadRef = React.createRef();

    componentDidMount() {
        this.props.getDrafts();
    }

    toggleAndSetSelected = (togglePanel, rowData) => {
        togglePanel();
        if(this.state.selectedDraft === rowData) {
            this.setState({selectedDraft: ''});
        } else {
            this.setState({selectedDraft: rowData});
        }
    }

    uploadPlayerList(file, draftId) {
        this.setState({isUploading: true});
        CsvParserUtils.parseCsvFilesToJson(file)
            .then(uploadedData => {
                const watchlist = [];
                const myBudgets = [];
                uploadedData.forEach(player => {
                    if(player.watchlist || player.watchlist === "TRUE") {
                        watchlist.push(player.id);
                    }
                    if(player.my_budget && player.my_budget > 0) {
                        myBudgets.push({
                            id: player.id,
                            myBudget: player.my_budget,
                        });
                    }
                });
                ImportedPlayerListUtils.setMyBudgets(myBudgets);
                this.updateWatchlist(watchlist, draftId);
                // We clear the value here to ensure that a new file can be uploaded without refreshing the page.
                this.fileUploadRef.current.value = '';
                // We use a setTimeout of 2 seconds here to at least show the loading spinner for a little bit.
                setTimeout(() => {
                    this.setState({isUploading: false});
                }, 2000)
            });
    }

    updateWatchlist(watchlist, draftId) {
        const currentTeamId = this.getCurrentTeamIdForDraft(draftId);
        if(currentTeamId) {
            draftService.addPlayerListToWatchlistForTeamId(watchlist, currentTeamId);
        }
    }

    getCurrentTeamIdForDraft(draftId) {
        let currentTeamId = null;
        const currentDraft = this.props.myDrafts.find(draft => draft.id === draftId);
        if(currentDraft) {
            const currentTeam = currentDraft.teams.find(team => team.user.id === this.props.currentUserId);
            if(currentTeam) {
                currentTeamId = currentTeam.id;
            }
        }
        return currentTeamId;
    }

    openDraft(draftId) {
        this.setState({redirectPath: `/draftRoom?id=${draftId}`})
    }

    render() {
        if(this.state.redirectPath) {
            return <Redirect to={this.state.redirectPath}  />
        }

        if(!this.props.myDrafts) {
            return null;
        }

        return (
            <Container component="main" style={{paddingTop: 20}}>
                <TableContainer component={Paper}>
                    <Table aria-label="My Drafts Table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">ID</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right"># Teams</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Budget</TableCell>
                                <TableCell align="right">OTB Timer</TableCell>
                                <TableCell align="right">Bid Timer</TableCell>
                                <TableCell align="right">Upload Player List</TableCell>
                                <TableCell align="right">Open Draft</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.props.myDrafts.map((draft, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell align="right">{draft.id}</TableCell>
                                            <TableCell align="right">{draft.name}</TableCell>
                                            <TableCell align="right">{draft.numOfTeams}</TableCell>
                                            <TableCell align="right">{draft.status}</TableCell>
                                            <TableCell align="right">{draft.budget}</TableCell>
                                            <TableCell align="right">{draft.onTheBlockTimer}</TableCell>
                                            <TableCell align="right">{draft.bidTimer}</TableCell>
                                            <TableCell align="right">
                                                <Button
                                                    variant="contained"
                                                    component="label"
                                                    color="primary"
                                                >
                                                    {
                                                        this.state.isUploading
                                                            ? (
                                                                <CircularProgress
                                                                    size={20}
                                                                    style={{color: "rgb(8,255,8)"}}
                                                                />
                                                            )
                                                            : 'Upload'
                                                    }
                                                    <input
                                                        type="file"
                                                        hidden
                                                        onChange={(event) => this.uploadPlayerList(event.target.files, draft.id)}
                                                        ref={this.fileUploadRef}
                                                    />
                                                </Button>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Button
                                                    color={"primary"}
                                                    variant="contained"
                                                    component="label"
                                                    onClick={() => this.openDraft(draft.id)}
                                                >
                                                    Open
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        myDrafts: myDraftsSelector(state),
        currentUserId: userIdSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
    getDrafts: () => dispatch(getMyDraftsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyDrafts);
