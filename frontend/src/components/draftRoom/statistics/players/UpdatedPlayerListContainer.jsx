import React from "react";
import DraftService from "../../../../services/DraftService";
import UpdatedPlayerList from "./UpdatedPlayerList";
import {draftIdSelector} from "../../../../store/selectors/DraftSelectors";
import {connect} from "react-redux";
import {FormControlLabel, Paper, Switch} from "@material-ui/core";

class UpdatedPlayerListContainer extends React.PureComponent {
    state = {
        hasNextPage: true,
        isNextPageLoading: false,
        items: [],
        expandedPanelIndex: false,
        lastNameSearch: '',
        positionFilter: '',
        isHideDraftedFilterOn: true,
    };

    _loadNextPage = () => {
        this.setState({isNextPageLoading: true}, () => {
            DraftService.getPlayersPageByDraft(
                this.props.draftId,
                this.state.items.length/25,
                25,
                this.state.lastNameSearch,
                this.state.positionFilter,
                this.state.isHideDraftedFilterOn,
            )
                .then(players => {
                    console.log("Players");
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

    handleExpandedPanelChange = (panelId, listRef) => (event, isExpanded) => {
        const previouslyExpandedPanelIndex = this.state.expandedPanelIndex;
        this.setState({expandedPanelIndex: isExpanded ? panelId : false})
        // Required to recalculate the rowHeights when rows are expanded.
        if(listRef.current) {
            // Recalculate rowHeights from the first row that was affected by the expansion change.
            const startIndex = previouslyExpandedPanelIndex < panelId ? previouslyExpandedPanelIndex : panelId;
            listRef.current.resetAfterIndex(startIndex);
        }
    };

    handleSwitchChange = (event) => {
        this.setState({
            isHideDraftedFilterOn: event.target.checked,
            items: [],
        });
        this._loadNextPage();
    }

    render() {
        const { hasNextPage, isNextPageLoading, items, expandedPanelIndex, isHideDraftedFilterOn } = this.state;

        return(
            <>
                <Paper>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.isHideDraftedFilterOn}
                                onChange={this.handleSwitchChange}
                                name="hideDraftedFilter"
                                color="primary"
                            />
                        }
                        label="Hide Drafted"
                        labelPlacement="start"
                    />
                </Paper>
                <UpdatedPlayerList
                    hasNextPage={hasNextPage}
                    isNextPageLoading={isNextPageLoading}
                    items={items}
                    loadNextPage={this._loadNextPage}
                    expandedPanelIndex={expandedPanelIndex}
                    handleChange={this.handleExpandedPanelChange}
                    isHideDraftedFilterOn={isHideDraftedFilterOn}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        draftId: draftIdSelector(state),
    }
}

export default connect(mapStateToProps)(UpdatedPlayerListContainer);
