import React from "react";
import DraftService from "../../../../services/DraftService";
import UpdatedPlayerList from "./UpdatedPlayerList";
import PlayerAnalysisTableHeader from "./PlayerAnalysisTableHeader";
import {draftIdSelector} from "../../../../store/selectors/DraftSelectors";
import {connect} from "react-redux";

class UpdatedPlayerListContainer extends React.PureComponent {
    state = {
        hasNextPage: true,
        isNextPageLoading: false,
        items: [],
        expandedPanelIndex: false,
    };

    _loadNextPage = (...args) => {
        this.setState({isNextPageLoading: true}, () => {
            DraftService.getPlayersPageByDraft(this.props.draftId, this.state.items.length/25, 25)
                .then(players => {
                        this.setState(state => ({
                            /* Players are loaded in batches of 25 and therefore hasNextPage is calculated in batches of 25.
                               If the last batch contained the last player, then hasNextPage is false (hence the 778-25).
                            */
                            hasNextPage: state.items.length < (778 - 25),
                            isNextPageLoading: false,
                            items: [...state.items].concat(players.data.content),
                        }));
                    }
                );
        });
    };

    handleChange = (panelId, listRef) => (event, isExpanded) => {
        const previouslyExpandedPanelIndex = this.state.expandedPanelIndex;
        this.setState({expandedPanelIndex: isExpanded ? panelId : false})
        // Required to recalculate the rowHeights when rows are expanded.
        if(listRef.current) {
            // Recalculate rowHeights from the first row that was affected by the expansion change.
            const startIndex = previouslyExpandedPanelIndex < panelId ? previouslyExpandedPanelIndex : panelId;
            listRef.current.resetAfterIndex(startIndex);
        }
    };

    render() {
        const { hasNextPage, isNextPageLoading, items, expandedPanelIndex } = this.state;

        return(
            <>
                <PlayerAnalysisTableHeader />
                <UpdatedPlayerList
                    hasNextPage={hasNextPage}
                    isNextPageLoading={isNextPageLoading}
                    items={items}
                    loadNextPage={this._loadNextPage}
                    expandedPanelIndex={expandedPanelIndex}
                    handleChange={this.handleChange}
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
