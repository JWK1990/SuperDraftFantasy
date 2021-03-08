import React from "react";
import DraftService from "../../../../services/DraftService";
import UpdatedPlayerList from "../UpdatedPlayerList";

class UpdatedPlayerListContainer extends React.PureComponent {
    state = {
        hasNextPage: true,
        isNextPageLoading: false,
        items: []
    };

    _loadNextPage = (...args) => {
        console.log("loadNextPage", ...args);
        this.setState({isNextPageLoading: true}, () => {
            DraftService.getPlayersByDraft(1)
                .then(players => {
                        this.setState(state => ({
                            hasNextPage: state.items.length < 700,
                            isNextPageLoading: false,
                            items: [...state.items].concat(players.data),
                        }));
                    }
                );
        });
    };

    render() {
        const { hasNextPage, isNextPageLoading, items } = this.state;

        return(
            <UpdatedPlayerList
                hasNextPage={hasNextPage}
                isNextPageLoading={isNextPageLoading}
                items={items}
                loadNextPage={this._loadNextPage}
            />
        )
    }
}

export default UpdatedPlayerListContainer;
