import React, {useEffect} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {green, orange, red, yellow} from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import Typography from "@material-ui/core/Typography";
import RoosterSymbol from "../../../images/purchaseReviewSymbols/RoosterSymbol.svg";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    fabProgress: {
        position: 'absolute',
        top:-4,
        left: -3 ,
        zIndex: 1,
    },
    greatBar: {
        color: 'var(--great)',
    },
    goodBar: {
        color: 'var(--good)',
    },
    averageBar: {
        color: 'var(--average)',
    },
    poorBar: {
        color: 'var(--poor)',
    },
    terribleBar: {
        color: 'var(--terrible)',
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
    },
    statButton: {
        boxShadow: "none",
    },
    roosterImageDiv: {
        display: 'flex',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -5,
    },
    roosterImage: {
        width: 28,
        height: 28,
    },
}));

export default function CircularStatIcon(props) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(true);

    // TODO: Could update this to represent how high in the rankings they are.
    const statRanking = props.statValue/props.maxStatValue;
    const barColour = clsx({
        [classes.greatBar] : statRanking >= 0.85,
        [classes.goodBar] : (0.85 > statRanking) && (statRanking >= 0.6),
        [classes.averageBar] : (0.6 > statRanking) && (statRanking >= 0.3),
        [classes.poorBar] : 0.3 > statRanking,
        [classes.terribleBar] : 0.15 > statRanking,
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
                    <Typography>
                        {loading ? "..." : (props.prefix ? props.prefix + props.statValue : props.statValue)}
                    </Typography>
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
            {props.showIconFooter
                ? (
                    <div className={classes.roosterImageDiv}>
                        <img className={classes.roosterImage} src={RoosterSymbol} alt="Purchase Review Team Logo."/>
                    </div>
                ) : null
            }
        </div>
    );
}
