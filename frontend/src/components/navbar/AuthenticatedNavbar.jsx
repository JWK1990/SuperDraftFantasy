import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Signup from '../signup';
import Login from '../login';
import SwipeableViews from 'react-swipeable-views';
import {Link} from "react-router-dom";
import AuthService from "../../services/AuthService";
import MyDrafts from "../myDrafts/MyDrafts";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AuthenticatedNavbar() {
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
          <Tab label="MyDrafts"/>
        {/*<Tab label="My Drafts"*/}
        {/*     component={Link}*/}
        {/*     to="/draftRoom"*/}
        {/*/>*/}
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
          <MyDrafts value={value} index={0} dir={theme.direction} />
      </SwipeableViews>
    </Paper>
  );
};
