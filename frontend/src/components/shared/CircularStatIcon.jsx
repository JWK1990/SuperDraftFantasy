import React, {useEffect} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {green, orange, red, yellow} from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingRight: 40,
    },
    iconRoot: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    fabProgress: {
        position: 'absolute',
        top: -6,
        left: -6,
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
    }
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
        <div className={classes.root}>
            <Typography
                align="center"
                className={classes.title}
            >
                {props.statName}
            </Typography>
            <div className={classes.iconRoot}>
                    <div className={classes.wrapper}>
                        <Fab
                            aria-label="save"
                            color="primary"
                        >
                            {value}
                        </Fab>
                        <CircularProgress
                            size={68}
                            className={[classes.fabProgress, barColour].join(" ")}
                            variant="static"
                            value={value/props.maxStatValue * 100}
                        />
                    </div>
                </div>
        </div>
    );
}
