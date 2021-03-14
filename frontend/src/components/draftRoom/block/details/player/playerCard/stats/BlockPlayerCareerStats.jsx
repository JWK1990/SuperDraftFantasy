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

export default function BlockPlayerCareerStats(props) {
    const classes = useStyles();

    return (
        <div className={classes.statBarDiv}>
            <CircularStatIcon
                statName="AVE"
                statValue= {props.player.careerAverage}
                maxStatValue= {getPositionMaxAve(props.player.primaryPosition)}
                showHeader={false}
                showFooter={true}
            />
            <CircularStatIcon
                statName="GM"
                statValue= {props.player.careerGames}
                maxStatValue= {PlayerStatFetcher.maxGamesPlayed}
                showHeader={false}
                showFooter={true}
            />
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
        </div>
    )

}
