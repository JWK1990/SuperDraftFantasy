import React from "react";
import DraftService from "../../../../services/DraftService";
import UpdatedPlayerList from "./UpdatedPlayerList";

class UpdatedPlayerListContainer extends React.PureComponent {
    state = {
        hasNextPage: true,
        isNextPageLoading: false,
        items: [],
        expandedPanelIndex: false,
    };

    _loadNextPage = (...args) => {
        console.log("loadNextPage", ...args);
        this.setState({isNextPageLoading: true}, () => {
            DraftService.getPlayersByDraft(1, 0, 20)
                .then(players => {
                        this.setState(state => ({
                            hasNextPage: state.items.length < 700,
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
            <UpdatedPlayerList
                hasNextPage={hasNextPage}
                isNextPageLoading={isNextPageLoading}
                items={items}
                loadNextPage={this._loadNextPage}
                expandedPanelIndex={expandedPanelIndex}
                handleChange={this.handleChange}
            />
        )
    }
}

export default UpdatedPlayerListContainer;
