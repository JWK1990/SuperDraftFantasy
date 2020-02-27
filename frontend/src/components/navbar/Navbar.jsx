import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import NavbarDrawer from './drawer/Drawer';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Signup from '../signup';
import Login from '../login';
import SwipeableViews from 'react-swipeable-views';
import WebSocket from '../bidding';

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
        <Tab label="Home"/>
        <Tab label="My Account"/>
        <Tab label="My Drafts"/>
        <Tab label="Sign Up"/>
        <Tab icon={<PersonPinIcon />} aria-label="person" />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <WebSocket value={value} index={0} dir={theme.direction} />
        <Button value={value} index={1} dir={theme.direction}>
          My Account
        </Button>
        <Button value={value} index={2} dir={theme.direction}>
          My Drafts
        </Button>
        <Signup value={value} index={2} dir={theme.direction} />
        <Login value={value} index={1} dir={theme.direction} />
      </SwipeableViews>
    </Paper>
  );
};