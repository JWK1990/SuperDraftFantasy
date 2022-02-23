import React from "react";
import {FixedSizeList} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PlayerRow from "./PlayerRow";

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

    const PlayerRowContainer = ({ index, style }) => {
        const player = items[index];
        return (
            !isItemLoaded(index)
                ? <Typography>Loading Players...</Typography>
                : <PlayerRow sizingStyle={style} player={player}/>
        )
    };

    return (
        <Grid container component={Paper} direction={"column"} style={{height: "var(--draft-room-player-list-height)"}}>
            <Grid container item style={{paddingRight: "15.33px", height: rowHeight}}>
                <Grid item xs={1} className={[classes.centerAlign, classes.header].join(' ')}>&nbsp;</Grid>
                <Grid item xs={3} className={[classes.leftAlign, classes.header].join(' ')}>Name</Grid>
                <Grid item xs={2} className={[classes.leftAlign, classes.header].join(' ')}>Pos</Grid>
                <Grid item xs={1} className={[classes.leftAlign, classes.header].join(' ')}>Team</Grid>
                <Grid item xs={1} className={[classes.centerAlign, classes.header].join(' ')}>SC</Grid>
                <Grid item xs={2} className={[classes.centerAlign, classes.header].join(' ')}>Disp (DE)</Grid>
                <Grid item xs={1} className={[classes.centerAlign, classes.header].join(' ')}>Age</Grid>
                <Grid item xs={1} className={[classes.centerAlign, classes.header].join(' ')}>$ ('21)</Grid>
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
    )
};
