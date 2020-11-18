import React from 'react';
import CircularStatIcon from "./CircularStatIcon";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    statBar: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}));

export default function CircularStatBar(props) {
    const classes = useStyles();

    return (
        <CardContent className={classes.statBar}>
            <CircularStatIcon
                statName="SC"
                statValue= {props.player.average}
                maxStatValue= {100}
            />
            <CircularStatIcon
                statName="GM"
                statValue= {14}
                maxStatValue= {22}
            />
            <CircularStatIcon
                statName="DISP"
                statValue= {25}
                maxStatValue= {30}
            />
            <CircularStatIcon
                statName="MK"
                statValue= {2}
                maxStatValue= {15}
            />
            {
                {
                    'DEF':
                    <CircularStatIcon
                        statName="RB50"
                        statValue= {3}
                        maxStatValue= {5}/>,
                        'MID':
                    <CircularStatIcon
                        statName="CL"
                        statValue= {7}
                        maxStatValue= {13}/>,
                        'RUC':
                    <CircularStatIcon
                        statName="HO"
                        statValue= {25}
                        maxStatValue= {40}/>,
                        'FWD':
                    <CircularStatIcon
                        statName="GOALS"
                        statValue= {3.5}
                        maxStatValue= {7}/>,
                }[props.player.primaryPosition]
            }
        </CardContent>
    );
}
