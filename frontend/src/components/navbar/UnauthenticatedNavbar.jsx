import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Signup from '../signup';
import Login from '../login';
import SwipeableViews from 'react-swipeable-views';
import About from "../about/About";
import SDBackground from "../../images/SDBackground.png";

const useStyles = makeStyles(() => ({
    root: {
        backgroundImage: "theme.palette.background.paper",
        height: "100%",
    },
    navbar: {
        backgroundColor: "#154670",
    },
    logoBar: {
        textAlign: "center"
    },
}));

export default function UnauthenticatedNavbar() {
    const classes = useStyles();
    const theme = useTheme();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    className={classes.navbar}
                >
                    <Tab label="About" style={{color: "rgb(237, 114, 219)"}}/>
                    <Tab label="Register" style={{color: "rgb(237, 114, 219)"}}/>
                    <Tab label="Login" style={{color: "rgb(237, 114, 219)"}}/>
                </Tabs>
                <div className={classes.logoBar}>
                    <img
                        src={SDBackground}
                        alt={"SDBackground"}
                        style={{maxWidth: "100%", maxHeight: "100%"}}
                    ></img>
                </div>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <About value={value} index={0} dir={theme.direction} />
                    <Signup value={value} index={1} dir={theme.direction} />
                    <Login value={value} index={2} dir={theme.direction} />
                </SwipeableViews>
            </Paper>
        </>
    );
};
