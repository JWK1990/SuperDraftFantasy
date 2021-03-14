import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TeamAnalysisContainer from "./teams/TeamAnalysisContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import UpdatedPlayerListContainer from "./players/UpdatedPlayerListContainer";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
            style={{overflow: "hidden"}}
        >
            {value === index && (
                <Box p={0}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(() => ({
    appBar: {
        width: "100%",
        boxShadow: "none",
    },
    tabs: {
        minHeight: "var(--draft-room-tab-panel-height)",
        maxHeight: "var(--draft-room-tab-panel-height)",
    },
    tab: {
        minHeight: "var(--draft-room-tab-panel-height)",
        maxHeight: "var(--draft-room-tab-panel-height)",
    },
}));

export default function StatisticsContainer() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className="statistics">
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    className={classes.tabs}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="Draft Room Statistics Tabs"
                >
                    <Tab label="Players" className={classes.tab} {...a11yProps(0)} />
                    <Tab label="Teams" className={classes.tab} {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0}>
                    <UpdatedPlayerListContainer />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TeamAnalysisContainer />
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
