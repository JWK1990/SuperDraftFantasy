import React, {useEffect} from "react";
import {FixedSizeList} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PlayerRow from "./PlayerRow";
import draftService from "../../../../services/DraftService";
import PlayerDetails from "./PlayerDetails";

const useStyles = makeStyles((theme) => ({
    header: {
        fontWeight: "bold",
    },
    centerAlign: {
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
    },
    leftAlign: {
        display: "grid",
        alignItems: "center",
        justifyContent: "left",
    },
    greyedOut: {
        opacity: 0.4,
    }
}));

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
    // Team Id for the current team which is used for fetching the Watchlist Player Ids.
    teamId,
}) {
    // If there are more items to be loaded then add an extra row to hold a loading indicator.
    const itemCount = hasNextPage ? items.length + 1 : items.length;

    // Only load 1 page of items at a time.
    // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
    const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

    // Every row is loaded except for our loading indicator row.
    const isItemLoaded = index => !hasNextPage || index < items.length;

    const classes = useStyles();
    const rowHeight = 50;
    const containerRef = React.useRef(null);

    const [watchlistPlayerIds, setWatchlistPlayerIds] = React.useState(null);
    const [selectedPlayerId, setSelectedPlayerId] = React.useState(null);
    const [anchorElement, setAnchorElement] = React.useState(null);

    // A good explanation of how useEffect works can be found here https://medium.com/@timtan93/states-and-componentdidmount-in-functional-components-with-hooks-cac5484d22ad.
    useEffect(() => {
        draftService.getWatchlistForTeamId(teamId)
            .then(response => {
                setWatchlistPlayerIds(response.data);
            });
    }, []);

    const getIsOnWatchlist = (playerId) => {
        return watchlistPlayerIds.indexOf(playerId) > -1;
    }

    const handleWatchlistChange = (playerId) => {
        if(getIsOnWatchlist(playerId)) {
            draftService.removePlayerFromWatchlistForTeamId(playerId, teamId)
                .then(response => setWatchlistPlayerIds(response.data));
        } else {
            draftService.addPlayerToWatchlistForTeamId(playerId, teamId)
                .then(response => setWatchlistPlayerIds(response.data));
        }
    }

    const handleOpenPlayerDetails = (event, playerId) => {
        setSelectedPlayerId(playerId);
        // Set the AnchorElement to be the Grid Container, even though the click originated in the PlayerRow.
        setAnchorElement(containerRef.current);
    };

    const handleClosePlayerDetails = (event) => {
        // This is triggered on a click outside of the Player Details Popper.
        // If the click was inside of the Grid Container, we close the Popper.
        // If the click was outside of the Grid Container, we keep the Popper open.
        // This stops the Popper being closed when a Coach bids.
        const wasClickInsideGridContainer = containerRef.current.contains(event.target);
        if(wasClickInsideGridContainer) {
            setSelectedPlayerId(null);
            setAnchorElement(null);
        }
    };

    const PlayerRowContainer = ({ index, style }) => {
        const player = items[index];
        return (
            !isItemLoaded(index)
                ? <Typography>Loading Players...</Typography>
                : <PlayerRow
                    sizingStyle={style}
                    player={player}
                    isOnWatchlist={getIsOnWatchlist(player.id)}
                    triggerWatchlistChange={handleWatchlistChange}
                    triggerOpenPlayerDetails={handleOpenPlayerDetails}
                />
        )
    };

    return (
        <>
            <div className={anchorElement !== null ? classes.greyedOut : ''}>
                <Grid container component={Paper} direction={"column"}
                      style={{height: "var(--draft-room-player-list-height)"}}
                      ref={containerRef}
                >
                    <Grid container item style={{paddingRight: "15.33px", height: rowHeight}}>
                        <Grid item xs={1} className={[classes.centerAlign, classes.header].join(' ')}>&nbsp;</Grid>
                        <Grid item xs={3} className={[classes.leftAlign, classes.header].join(' ')}>Name</Grid>
                        <Grid item xs={1} className={[classes.leftAlign, classes.header].join(' ')}>Team</Grid>
                        <Grid item xs={1} className={[classes.leftAlign, classes.header].join(' ')}>Pos</Grid>
                        <Grid item xs={1} className={[classes.centerAlign, classes.header].join(' ')}>SC</Grid>
                        <Grid item xs={1} className={[classes.centerAlign, classes.header].join(' ')}>Disp (DE)</Grid>
                        <Grid item xs={1} className={[classes.centerAlign, classes.header].join(' ')}>Age</Grid>
                        <Grid item xs={1} className={[classes.centerAlign, classes.header].join(' ')}>$ ('21)</Grid>
                        <Grid item xs={1} className={[classes.centerAlign, classes.header].join(' ')}>$ ('22)</Grid>
                        <Grid item xs={1} className={[classes.centerAlign, classes.header].join(' ')}>Budget</Grid>
                    </Grid>
                    <InfiniteLoader
                        isItemLoaded={isItemLoaded}
                        itemCount={itemCount}
                        loadMoreItems={loadMoreItems}
                    >
                        {({ onItemsRendered, ref }) => (
                            <AutoSizer>
                                {({height, width}) => (
                                    <FixedSizeList
                                        height={height - rowHeight} // Minus rowHeight to cater for header row.
                                        width={width}
                                        itemCount={itemCount}
                                        itemSize={rowHeight}
                                        onItemsRendered={onItemsRendered}
                                        ref={ref}
                                    >
                                        {PlayerRowContainer}
                                    </FixedSizeList>
                                )}
                            </AutoSizer>
                        )}
                    </InfiniteLoader>
                </Grid>
            </div>
            <div>
                <PlayerDetails
                    playerId={selectedPlayerId}
                    triggerPlayerDetailsClose={handleClosePlayerDetails}
                    anchorElement={anchorElement}
                />
            </div>
        </>
    )
};
