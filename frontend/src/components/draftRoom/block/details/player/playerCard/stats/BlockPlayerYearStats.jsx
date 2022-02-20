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

export default function BlockPlayerYearStats(props) {
    const classes = useStyles();

    return (
        <div className={classes.statBarDiv}>
            <CircularStatIcon
                statName="AVE"
                statValue= {props.player.average}
                maxStatValue= {PlayerStatFetcher.getPositionMaxAve(props.player.primaryPosition)}
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
                statName="DISP"
                statValue= {props.player.disposals}
                maxStatValue= {PlayerStatFetcher.getPositionDisposalsAverage(props.player.primaryPosition)}
                showHeader={false}
                showFooter={true}
            />
            {props.player.price == null
                ? (
                    <CircularStatIcon
                        statName="DE"
                        statValue= {props.player.disposalEfficiency != null ? props.player.disposalEfficiency : "-"}
                        maxStatValue= {100}
                        showHeader={false}
                        showFooter={true}
                    />
                )
                : null
            }
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
