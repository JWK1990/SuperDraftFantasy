import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import makeStyles from "@material-ui/core/styles/makeStyles";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
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
    rootStatTabPanelDiv: {
        height: "100%",
    },
    appBar: {
        width: "100%",
        boxShadow: "none",
        paddingBottom: 10,
    },
    tabs: {
        minHeight: "var(--tab-panel-secondary-height)",
        maxHeight: "var(--tab-panel-secondary-height)",
        backgroundColor: "transparent",
        minWidth: "100px",
        '@media (min-width: 600px)': {
            minWidth: "100px"
        },
    },
    tab: {
        minHeight: "var(--tab-panel-secondary-height)",
        maxHeight: "var(--tab-panel-secondary-height)",
        backgroundColor: "transparent",
        minWidth: "100px",
        '@media (min-width: 600px)': {
            minWidth: "100px"
        },
    },
    swipeableViews: {
        height: "100%",
    }
}));

export default function StatTabPanel(props) {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.rootStatTabPanelDiv}>
            <AppBar className={classes.appBar} position="static" color="transparent">
                <Tabs
                    value={value}
                    className={classes.tabs}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="Stat Tab Panel"
                    TabIndicatorProps={{style: {display: "none"}}}
                >
                    {props.tabList.map((tab, index) => (
                        <Tab
                            label={tab.label}
                            className={classes.tab}
                            {...a11yProps({index})}
                            key={index}
                        />
                    ))}
                </Tabs>
            </AppBar>
            <SwipeableViews
                index={value}
                onChangeIndex={handleChangeIndex}
                className={classes.swipeableViews}
            >
                {props.tabList.map((tab, index) => (
                    <TabPanel value={value} index={index} key={index}>
                        {tab.component}
                    </TabPanel>
                ))}
            </SwipeableViews>
        </div>
    );
}
