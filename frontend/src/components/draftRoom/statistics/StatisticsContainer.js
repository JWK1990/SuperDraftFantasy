import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DraftRoomPlayers from "./players/Players";
import TeamAnalysisContainer from "./teams/TeamAnalysisContainer";
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

export default function StatisticsContainer() {
    const [value, setValue] = React.useState(0);

    const theme = createMuiTheme({
        overrides: {
            MuiTab: {
                root: {
                    minHeight: "var(--draft-room-tab-panel-height)",
                    maxHeight: "var(--draft-room-tab-panel-height)",
                }
            },
            MuiTabs: {
                root: {
                    minHeight: "var(--draft-room-tab-panel-height)",
                    maxHeight: "var(--draft-room-tab-panel-height)",
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
            <div className="statistics">
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs"
                    >
                        <Tab label="Players" {...a11yProps(0)} />
                        <Tab label="Analysis" {...a11yProps(1)} />
                        <Tab label="Statistics" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <DraftRoomPlayers />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <TeamAnalysisContainer />
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        Item Three
                    </TabPanel>
                </SwipeableViews>
            </div>
        </MuiThemeProvider>
    );
}
