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

function getPositionMaxDisposals(position) {
    return PlayerStatFetcher.getPositionMaxDisposals(position)
}

function getPositionMaxDisposalEfficiency(position) {
    return PlayerStatFetcher.getPositionMaxDisposalEfficiency(position)
}

export default function BlockPlayerYearStats(props) {
    const classes = useStyles();

    console.log("Disposals: ", props.player.disposals);

    return (
        <div className={classes.statBarDiv}>
            <CircularStatIcon
                statName="AVE"
                statValue= {getPositionMaxAve(props.player.primaryPosition)}
                maxStatValue= {10}
                showHeader={false}
                showFooter={true}
            />
            <CircularStatIcon
                statName="GM"
                statValue= {props.player.games}
                maxStatValue= {PlayerStatFetcher.maxGamesPlayed}
                showHeader={false}
                showFooter={true}
            />
            <CircularStatIcon
                statName="DISP"
                statValue= {props.player.disposals}
                maxStatValue= {getPositionMaxDisposals(props.player.primaryPosition)}
                showHeader={false}
                showFooter={true}
            />
            <CircularStatIcon
                statName="DE%"
                statValue= {props.player.disposalEfficiency}
                maxStatValue= {getPositionMaxDisposalEfficiency(props.player.primaryPosition)}
                showHeader={false}
                showFooter={true}
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
