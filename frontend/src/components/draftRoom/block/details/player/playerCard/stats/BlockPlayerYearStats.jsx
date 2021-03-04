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

export default function BlockPlayerYearStats(props) {
    const classes = useStyles();

    return (
        <div className={classes.statBarDiv}>
            <CircularStatIcon
                statName="Ave"
                statValue= {props.player.id}
                maxStatValue= {10}
                showHeader={false}
                showFooter={true}
            />
            <CircularStatIcon
                statName="Price"
                statValue= {props.player.id}
                maxStatValue= {10}
                showHeader={false}
                showFooter={true}
            />
            <CircularStatIcon
                statName="Disp"
                statValue= {props.player.id}
                maxStatValue= {20}
                showHeader={false}
                showFooter={true}
            />
            <CircularStatIcon
                statName="SD"
                statValue= {props.player.id}
                maxStatValue= {50}
                showHeader={false}
                showFooter={true}
            />
        </div>
    )

}
