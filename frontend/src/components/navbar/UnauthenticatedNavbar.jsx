import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Signup from '../signup';
import Login from '../login';
import SwipeableViews from 'react-swipeable-views';
import AuthService from "../../services/AuthService";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
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

    const isLoggedIn = AuthService.getToken() != null;
    console.log(isLoggedIn);
    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Sign Up"
                     style={{display: isLoggedIn ? "none" : "block"}}
                />
                <Tab icon="Login"
                     style={{display: isLoggedIn ? "none" : "block"}}
                />
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <Signup value={value} index={0} dir={theme.direction} />
                <Login value={value} index={1} dir={theme.direction} />
            </SwipeableViews>
        </Paper>
    );
};
