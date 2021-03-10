import React from "react";
import {VariableSizeList} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PlayerAnalysisTableRow from "./PlayerAnalysisTableRow";
import DraftRoomPlayersSelected from "./selected/Selected";
import UpdatedPlayersContainer from "./UpdatedPlayersContainer";

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
    loadNextPage,
    // Update the expandedPanelIndex index.
    expandedPanelIndex,
    // Handle click of panel.
    handleChange,
}) {
    // If there are more items to be loaded then add an extra row to hold a loading indicator.
    const itemCount = hasNextPage ? items.length + 1 : items.length;

    // Only load 1 page of items at a time.
    // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
    const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

    // Every row is loaded except for our loading indicator row.
    const isItemLoaded = index => !hasNextPage || index < items.length;

    const getItemSize = index => {
        // Expanded row height is var(--player-card-height) + 50px (non-expanded row) + 42px (additional padding).
        return (items.length > 0 && index === expandedPanelIndex) ? 332 : 50;
    }

    // Render an item or a loading indicator.
    const PlayerRow = ({ index, style }) => {
        return (
                <Accordion
                    style={style} key={index}
                    expanded={expandedPanelIndex === index}
                    onChange={handleChange(index, listRef)}
                    TransitionProps={{unmountOnExit: true}}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="player-content"
                        id="player-header"
                    >
                        {
                            !isItemLoaded(index)
                                ? <Typography>Loading Players...</Typography>
                                : <PlayerAnalysisTableRow player={items[index]} />
                        }
                    </AccordionSummary>
                    <AccordionDetails>
                        <UpdatedPlayersContainer player={items[index]}/>
                    </AccordionDetails>
                </Accordion>
        )
    };

    const listRef = React.createRef();

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
                            <VariableSizeList
                                className="playerList"
                                height={height}
                                width={width}
                                itemCount={itemCount}
                                itemSize={getItemSize}
                                onItemsRendered={onItemsRendered}
                                ref={list => {
                                    /* The below code is required to be able to access the listRef externally
                                        for calling resetAfterIndex to recalculate the row heights when they are expanded.
                                        See comment from bvaughn here
                                        https://github.com/bvaughn/react-window/issues/324#issuecomment-528887341.
                                    */
                                    ref(list); // Give InfiniteLoader a reference to the list
                                    listRef.current = list; // Set our own ref to it as well.
                                }}
                            >
                                {PlayerRow}
                            </VariableSizeList>
                        )}
                    </AutoSizer>
                )}
            </InfiniteLoader>
        </div>
    )
};
