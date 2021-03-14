import CircularStatIcon from "../../../../../../shared/circularStatBar/CircularStatIcon";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import PlayerStatFetcher from "../../../../../../shared/statFetchers/PlayerStatFetcher";

const useStyles = makeStyles((theme) => ({
    statBarDiv: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'space-around',
    },
}));

function getPositionMaxAve(position) {
    return PlayerStatFetcher.getPositionMaxAve(position)
}

export default function BlockPlayerYearStats(props) {
    const classes = useStyles();

    return (
        <div className={classes.statBarDiv}>
            <CircularStatIcon
                statName="AVE"
                statValue= {props.player.average}
                maxStatValue= {getPositionMaxAve(props.player.primaryPosition)}
                showHeader={false}
                showFooter={true}
            />
            {props.player.price == null
                ? <CircularStatIcon
                        statName="GM"
                        statValue= {props.player.games}
                        maxStatValue= {PlayerStatFetcher.maxGamesPlayed}
                        showHeader={false}
                        showFooter={true}
                    />
                : null
            }
            <CircularStatIcon
                statName="PS"
                statValue= {props.player.psAverage}
                maxStatValue= {getPositionMaxAve(props.player.primaryPosition)}
                showHeader={false}
                showFooter={true}
            />
            <CircularStatIcon
                statName="RR"
                statValue= {props.player.roosterRating}
                maxStatValue= {10}
                showHeader={false}
                showFooter={false}
                showIconFooter={true}
            />
            {props.player.price != null
            ? (<CircularStatIcon
                    statName="Price"
                    statValue= {props.player.price}
                    maxStatValue= {PlayerStatFetcher.maxPrice}
                    showHeader={false}
                    showFooter={true}
                />)
            : null
            }
        </div>
    )

}
