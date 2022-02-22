import React from "react";
import DraftService from "../../../../services/DraftService";
import {draftIdSelector} from "../../../../store/selectors/DraftSelectors";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import PlayerFilter from "./PlayerFilter";
import UpdatedPlayerList from "./UpdatedPlayerList";

class UpdatedPlayerListContainer extends React.PureComponent {
    state = {
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
    };

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
            )
                .then(players => {
                    this.setState(state => ({
                            /* Players are loaded in batches of 25 and therefore hasNextPage is calculated in batches of 25.
                               If the last batch contained the last player, then hasNextPage is false (hence the 778-25).
                            */
                            hasNextPage: state.items.length < (players.data.totalElements - 25),
                            isNextPageLoading: false,
                            items: [...state.items].concat(players.data.content),
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

    handleSwitchChange = (event) => {
        this.setState({
            isHideDraftedFilterOn: event.target.checked,
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
                        triggerPositionFilterChange={this.handlePositionFilterChange}
                        triggerSearchChange={this.handleSearchChange}
                        triggerSwitchChange={this.handleSwitchChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <UpdatedPlayerList
                        hasNextPage={hasNextPage}
                        isNextPageLoading={isNextPageLoading}
                        items={items}
                        loadNextPage={this._loadNextPage}
                        isHideDraftedFilterOn={isHideDraftedFilterOn}
                    />
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        draftId: draftIdSelector(state),
    }
}

export default connect(mapStateToProps)(UpdatedPlayerListContainer);
