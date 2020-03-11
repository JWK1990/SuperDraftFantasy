import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Signup from '../signup';
import Login from '../login';
import SwipeableViews from 'react-swipeable-views';
import WebSocket from '../bidding';
import DraftRoom from "../draftRoom";
import MyTeam from "../draftRoom/teams/MyTeam"
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Navbar() {
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
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Sign Up" />
        <Tab icon="Login" />
        <Tab label="My Drafts" component={Link} to="/draftRoom" />
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
