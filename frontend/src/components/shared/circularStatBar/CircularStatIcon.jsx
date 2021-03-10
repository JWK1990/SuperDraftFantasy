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
    const [loading, setLoading] = React.useState(true);

    // TODO: Could update this to represent how high in the rankings they are.
    const statRanking = props.statValue/props.maxStatValue;
    const barColour = clsx({
        [classes.greenBar] : statRanking >= 0.85,
        [classes.yellowBar] : (0.85 > statRanking) && (statRanking >= 0.7),
        [classes.orangeBar] : (0.70 > statRanking) && (statRanking >= 0.5),
        [classes.redBar] : 0.5 > statRanking,
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => {
            clearInterval(timer);
        };
    }, []);

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
                    {loading ? "..." : props.statValue}
                </Fab>
                {loading
                    ? (
                        <CircularProgress
                            size={55}
                            className={[classes.fabProgress, barColour].join(" ")}
                            thickness={4}
                        />
                    )
                    : (
                        <CircularProgress
                            size={55}
                            className={[classes.fabProgress, barColour].join(" ")}
                            variant="determinate"
                            value={100}
                            thickness={4}
                        />
                    )
                }
            </div>
            {props.showFooter
                ? (
                    <Typography
                        align="center"
                        className={classes.title}
                    >
                        {props.statName}
                    </Typography>
                ) : null
            }
        </div>
    );
}
