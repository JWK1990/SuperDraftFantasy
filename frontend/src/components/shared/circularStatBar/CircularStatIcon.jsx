import React, {useEffect} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {green, orange, red, yellow} from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    fabProgress: {
        position: 'absolute',
        top:-5,
        left: -3 ,
        zIndex: 1,
        transform: "rotate(0deg)!important"
    },
    greenBar: {
        color: green[500],
    },
    yellowBar: {
        color: yellow[500],
    },
    orangeBar: {
        color: orange[500],
    },
    redBar: {
        color: red[500],
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    statButton: {
        boxShadow: "none",
    },
}));

export default function CircularStatIcon(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    // TODO: Could update this to represent how high in the rankings they are.
    const statRanking = props.statValue/props.maxStatValue;
    const barColour = clsx({
        [classes.greenBar] : statRanking >= 0.85,
        [classes.yellowBar] : (0.85 > statRanking) && (statRanking >= 0.7),
        [classes.orangeBar] : (0.70 > statRanking) && (statRanking >= 0.5),
        [classes.redBar] : 0.5 > statRanking,
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(value => {
                let updatedValue = value + 1;
                if((updatedValue >= props.statValue) || (updatedValue >= 2000)) {
                    clearInterval(interval)
                }
                return updatedValue
            });
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, [props.statValue]);

    return (
        <div>
            {props.showHeader
                ? (
                    <Typography
                        align="center"
                        className={classes.title}
                    >
                        {props.statName}
                    </Typography>
                ) : null
            }
            <div className={classes.wrapper}>
                <Fab
                    className={classes.statButton}
                    aria-label={props.statName}
                    color="primary"
                    size="medium"
                >
                    {value}
                </Fab>
                <CircularProgress
                    size={55}
                    className={[classes.fabProgress, barColour].join(" ")}
                    variant="determinate"
                    value={value/props.maxStatValue * 100}
                    thickness={4}
                />
            </div>
        </div>
    );
}
