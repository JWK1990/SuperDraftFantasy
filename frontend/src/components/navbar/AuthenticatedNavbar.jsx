import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import MyDrafts from "../myDrafts/MyDrafts";
import CreateDraft from "../createDraft/CreateDraft";
import withStyles from "@material-ui/core/styles/withStyles";
import {currentTabSelector} from "../../store/selectors/NavigationSelectors";
import {changeCurrentTabAction} from "../../store/actions/NavigationActions";
import {connect} from "react-redux";
import JoinDraft from "../joinDraft/JoinDraft";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
});

class AuthenticatedNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
        }
    }

    tabs = ["Create Draft", "Join Draft", "My Drafts"];

    componentDidMount() {
        this.props.changeCurrentTab(this.tabs[this.state.currentIndex]);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.currentTabName !== prevProps.currentTabName && this.props.currentTabName !== "") {
            const currentTabIndex = this.tabs.indexOf(this.props.currentTabName);
            if(currentTabIndex !== this.state.currentIndex) {
                this.setState({currentIndex: currentTabIndex});
            }
        }
    }

    handleChange = (event, newValue) => {
        this.setState({currentIndex: newValue});
        if(newValue !== this.state.currentIndex) {
            this.props.changeCurrentTab(this.tabs[newValue]);
        }
    };

    handleChangeIndex = index => {
        this.setState({currentIndex: index});
        if(index !== this.state.currentIndex) {
            this.props.changeCurrentTab(this.tabs[index]);
        }
    };

  render() {
      const {classes} = this.props;
        return (
            <Paper className={classes.root}>
                <Tabs
                    value={this.state.currentIndex}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Create Draft"/>
                    <Tab label="Join Draft"/>
                    <Tab label="My Drafts"/>
                </Tabs>
                <SwipeableViews
                    axis={classes.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.currentIndex}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <CreateDraft value={this.state.currentIndex} index={0} dir={classes.direction}/>
                    <JoinDraft value={this.state.currentIndex} index={1} dir={classes.direction}/>
                    <MyDrafts value={this.state.currentIndex} index={2} dir={classes.direction}/>
                </SwipeableViews>
            </Paper>
        );
  }

}

const mapStateToProps = state => {
    return {
        currentTabName: currentTabSelector(state),
    };
};

const mapDispatchToProps = dispatch => ({
    changeCurrentTab: (tabName) => dispatch(changeCurrentTabAction(tabName)),
});


export default connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles, {withTheme: true})(AuthenticatedNavbar)
);
