import React from "react";
import DraftService from "../../../../services/DraftService";
import {draftIdSelector} from "../../../../store/selectors/DraftSelectors";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import PlayerFilter from "./PlayerFilter";
import UpdatedPlayerList from "./UpdatedPlayerList";
import {stompClientSelector} from "../../../../store/selectors/WebSocketSelectors";
import ImportedPlayerListUtils from "../../../../utils/ImportedPlayerListUtils";

class UpdatedPlayerListContainer extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            hasNextPage: true,
            isNextPageLoading: false,
            items: [],
            expandedPanelIndex: false,
            lastNameSearch: '',
            positionFilter: '',
            isHideDraftedFilterOn: true,
            typingTimer: null,
            checkedDEF: false,
            checkedMID: false,
            checkedRUC: false,
            checkedFWD: false,
            isShowWatchlistFilterOn: false,
        };
    }

    componentDidMount() {
        this.props.stompClient.subscribe('/draft/purchaseReviews', this.receivePurchaseReview);
    }

    receivePurchaseReview = (payload) => {
        // We manually remove the most recently drafted player from the list if isHideDraftedFilterOn is true.
        if(this.state.isHideDraftedFilterOn) {
            const purchaseReviewPlayer = JSON.parse(payload.body);
            const {items} = this.state;
            const updatedItems = items.filter(item => item.id !== purchaseReviewPlayer.id);
            this.setState({items: updatedItems})
        }
    }

    _loadNextPage = () => {
        this.setState({isNextPageLoading: true}, () => {
            const positionFilter = this.getPositionFilterList();
            DraftService.getPlayersPageByDraft(
                this.props.draftId,
                this.state.items.length/25,
                25,
                this.state.lastNameSearch,
                positionFilter,
                this.state.isHideDraftedFilterOn,
                this.state.isShowWatchlistFilterOn,
                this.props.teamId,
            )
                .then(players => {
                    const playersWithMyBudgetData = this.mapInMyBudgetData(players.data.content);
                    this.setState(state => ({
                            /* Players are loaded in batches of 25 and therefore hasNextPage is calculated in batches of 25.
                               If the last batch contained the last player, then hasNextPage is false (hence the 778-25).
                            */
                            hasNextPage: state.items.length < (players.data.totalElements - 25),
                            isNextPageLoading: false,
                            items: [...state.items].concat(playersWithMyBudgetData),
                        }));
                    }
                );
        });
    };

    getPositionFilterList() {
        let positionFilter = "";
        if(this.state.checkedDEF) {
            positionFilter += "DEF"
        }
        if(this.state.checkedMID) {
            positionFilter += "MID"
        }
        if(this.state.checkedRUC) {
            positionFilter += "RUC"
        }
        if(this.state.checkedFWD) {
            positionFilter += "FWD"
        }
        return positionFilter;
    }

    mapInMyBudgetData(playerList) {
        const updatedPlayerList = [...playerList];
        const myBudgetDataList = ImportedPlayerListUtils.getMyBudgets();
        if(myBudgetDataList && myBudgetDataList.length > 0) {
            myBudgetDataList.forEach(myBudgetData => {
                const playerIndex = playerList.findIndex(player => player.id === myBudgetData.id);
                if(playerIndex > - 1) {
                    updatedPlayerList[playerIndex].budget = myBudgetData.myBudget;
                }
            })
        }
        return updatedPlayerList;
    }

    handleHideDraftedSwitchChange = (event) => {
        this.setState({
            isHideDraftedFilterOn: event.target.checked,
            items: [],
        });
        this._loadNextPage();
    }

    handleShowWatchlistSwitchChange = (event) => {
        this.setState({
            isShowWatchlistFilterOn: event.target.checked,
            items: [],
        });
        this._loadNextPage();
    }

    handleSearchChange = (event) => {
        this.setState({lastNameSearch: event.target.value})
        clearTimeout(this.state.typingTimer);
        const typingTimer = setTimeout(() => {
            this.triggerItemsUpdate();
            }, 500)
        this.setState({typingTimer: typingTimer});
    }

    handlePositionFilterChange = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.checked });
        this.triggerItemsUpdate();
    }

    triggerItemsUpdate = () => {
        this.setState({
            items: [],
        });
        this._loadNextPage();
    }

    render() {
        const { hasNextPage, isNextPageLoading, items, isHideDraftedFilterOn } = this.state;

        return(
            <Grid container>
                <Grid item xs={12}>
                    <PlayerFilter
                        lastNameSearch={this.state.lastNameSearch}
                        checkedDEF={this.state.checkedDEF}
                        checkedMID={this.state.checkedMID}
                        checkedRUC={this.state.checkedRUC}
                        checkedFWD={this.state.checkedFWD}
                        isHideDraftedFilterOn={this.state.isHideDraftedFilterOn}
                        isShowWatchlistFilterOn={this.state.isShowWatchlistFilterOn}
                        triggerPositionFilterChange={this.handlePositionFilterChange}
                        triggerSearchChange={this.handleSearchChange}
                        triggerHideDraftedSwitchChange={this.handleHideDraftedSwitchChange}
                        triggerShowWatchlistSwitchChange={this.handleShowWatchlistSwitchChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <UpdatedPlayerList
                        hasNextPage={hasNextPage}
                        isNextPageLoading={isNextPageLoading}
                        items={items}
                        loadNextPage={this._loadNextPage}
                        isHideDraftedFilterOn={isHideDraftedFilterOn}
                        isShowWatchlistFilterOn={this.state.isShowWatchlistFilterOn}
                        teamId={this.props.teamId}
                    />
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        draftId: draftIdSelector(state),
        stompClient: stompClientSelector(state),
    }
}

export default connect(mapStateToProps)(UpdatedPlayerListContainer);
