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

export default function PlayerDetailsYearStats(props) {
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
            {props.player.price == null
                ? <CircularStatIcon
                    statName="DISP"
                    statValue= {props.player.disposals}
                    maxStatValue= {30}
                    showHeader={false}
                    showFooter={true}
                />
                : null
            }
            <CircularStatIcon
                statName="$'21"
                statValue= {props.player.price2021 ? props.player.price2021 : 0}
                maxStatValue={30}
                showHeader={false}
                showFooter={true}
                prefix={"$"}
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
