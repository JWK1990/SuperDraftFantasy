import React from "react";
import DraftService from "../../../../services/DraftService";
import UpdatedPlayerList from "./UpdatedPlayerList";

class UpdatedPlayerListContainer extends React.PureComponent {
    state = {
        hasNextPage: true,
        isNextPageLoading: false,
        items: [],
        expandedPanel: false,
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
        this.setState({expandedPanel: isExpanded ? panelId : false})
        // Required to recalculate the rowHeights when rows are expanded.
        if(listRef.current) {
            listRef.current.resetAfterIndex(panelId);
        }
    };

    render() {
        const { hasNextPage, isNextPageLoading, items, expandedPanel } = this.state;

        return(
            <UpdatedPlayerList
                hasNextPage={hasNextPage}
                isNextPageLoading={isNextPageLoading}
                items={items}
                loadNextPage={this._loadNextPage}
                expandedPanel={expandedPanel}
                handleChange={this.handleChange}
            />
        )
    }
}

export default UpdatedPlayerListContainer;
