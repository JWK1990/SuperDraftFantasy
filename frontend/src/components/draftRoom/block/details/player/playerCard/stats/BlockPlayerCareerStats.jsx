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

export default function BlockPlayerCareerStats(props) {
    const classes = useStyles();

    return (
        <div class={classes.statBarDiv}>
            <CircularStatIcon
                statName="Ave"
                statValue= {props.player.id}
                maxStatValue= {10}
                showHeader={false}
                showFooter={true}
            />
            <CircularStatIcon
                statName="Games"
                statValue= {props.player.id}
                maxStatValue= {10}
                showHeader={false}
                showFooter={true}
            />
            <CircularStatIcon
                statName="SD"
                statValue= {props.player.id}
                maxStatValue= {20}
                showHeader={false}
                showFooter={true}
            />
            <CircularStatIcon
                statName="AvePrice"
                statValue= {props.player.id}
                maxStatValue= {50}
                showHeader={false}
                showFooter={true}
            />
        </div>
    )

}
