import CircularStatIcon from "../../../../../../shared/circularStatBar/CircularStatIcon";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    statBarDiv: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'space-around',
    },
}));

export default function BlockPlayerOverviewStats(props) {
    const classes = useStyles();

    return (
        <div class={classes.statBarDiv}>
            <CircularStatIcon
                statName="Avg"
                statValue= {props.player.average}
                maxStatValue= {150}
                showHeader={false}
                showFooter={true}
            />
            <CircularStatIcon
                statName="GP"
                statValue= {props.player.average}
                maxStatValue= {100}
                showHeader={false}
                showFooter={true}
            />
            <CircularStatIcon
                statName="Rank"
                statValue= {props.player.average}
                maxStatValue= {70}
                showHeader={false}
                showFooter={true}
            />
            <CircularStatIcon
                statName="Pre-Season"
                statValue= {props.player.average}
                maxStatValue= {80}
                showHeader={false}
                showFooter={true}
            />
        </div>
    )

}
