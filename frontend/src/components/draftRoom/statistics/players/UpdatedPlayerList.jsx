import React from "react";
import {FixedSizeList} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import {ListItem, ListItemText} from "@material-ui/core";

export default function UpdatedPlayerList({
    // Are there more items to load?
    // (This information comes from the most recent API request.)
    hasNextPage,
    // Are we currently loading a page of items?
    // (This may be an in-flight flag in your Redux store for example.)
    isNextPageLoading,
    // Array of items loaded so far.
    items,
    // Callback function responsible for loading the next page of items.
    loadNextPage
}) {
    // If there are more items to be loaded then add an extra row to hold a loading indicator.
    const itemCount = hasNextPage ? items.length + 1 : items.length;

    // Only load 1 page of items at a time.
    // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
    const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

    // Every row is loaded except for our loading indicator row.
    const isItemLoaded = index => !hasNextPage || index < items.length;

    // Render an item or a loading indicator.
    const PlayerRow = ({ index, style }) => {
        let content;
        if (!isItemLoaded(index)) {
            content = "Loading...";
        } else {
            content = items[index].id;
        }
        return (
            <ListItem button style={style} key={index}>
                <ListItemText primary={content} />
            </ListItem>
        )
    };

    return (
        <div className="playerSearch">
            <InfiniteLoader
                isItemLoaded={isItemLoaded}
                itemCount={itemCount}
                loadMoreItems={loadMoreItems}
            >
                {({ onItemsRendered, ref }) => (
                    <AutoSizer>
                        {({height, width}) => (
                            <FixedSizeList
                                className="playerList"
                                height={height}
                                width={width}
                                itemCount={itemCount}
                                itemSize={35}
                                onItemsRendered={onItemsRendered}
                                ref={ref}
                            >
                                {PlayerRow}
                            </FixedSizeList>
                        )}
                    </AutoSizer>
                )}
            </InfiniteLoader>
        </div>
    )
};
