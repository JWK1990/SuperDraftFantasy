import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {createMuiTheme} from "@material-ui/core";

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

export default function StatTabPanel(props) {
    const [value, setValue] = React.useState(0);

    const theme = createMuiTheme({
        overrides: {
            MuiAppBar: {
                root: {
                    width: "100",
                },
                colorTransparent: {
                    boxShadow: "none",
                }
            },
            MuiTab: {
                root: {
                    minHeight: "var(--tab-panel-secondary-height)",
                    maxHeight: "var(--tab-panel-secondary-height)",
                    backgroundColor: "transparent",
                }
            },
            MuiTabs: {
                root: {
                    minHeight: "var(--tab-panel-secondary-height)",
                    maxHeight: "var(--tab-panel-secondary-height)",
                    backgroundColor: "transparent",
                }
            },
        }
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <MuiThemeProvider theme={theme}>
            <AppBar position="static" color="transparent">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant={"fillWidth"}
                    aria-label="full width tabs"
                >
                    {props.tabList.map((tab, index) => (
                        <Tab label={tab.label} {...a11yProps({index})} key={index}/>
                    ))}
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {props.tabList.map((tab, index) => (
                    <TabPanel value={value} index={index} dir={theme.direction} key={index}>
                        {tab.component}
                    </TabPanel>
                ))}
            </SwipeableViews>
        </MuiThemeProvider>
    );
}
