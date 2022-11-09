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
import {Redirect} from 'react-router-dom';
import About from "../about/About";
import SDBackground from "../../images/SDBackground.png";

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        height: "100%",
    },
    navbar: {
        backgroundColor: "rgb(237, 114, 219)",
    },
    logoBar: {
        textAlign: "center"
    },
});

class AuthenticatedNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            redirectPath: null,
        }
    }

    tabs = ["About", "Create Draft", "Join Draft", "My Drafts", "Logout"];

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
        if(newValue === 4) {
            event.preventDefault();
            this.setState({redirectPath: `/logout`})
        } else {
            this.setState({currentIndex: newValue});
            if(newValue !== this.state.currentIndex) {
                this.props.changeCurrentTab(this.tabs[newValue]);
            }
        }
    };

    handleChangeIndex = index => {
        this.setState({currentIndex: index});
        if(index !== this.state.currentIndex) {
            this.props.changeCurrentTab(this.tabs[index]);
        }
    };

    logout = () => {
        return <Redirect  to="/logout" />;
    }

  render() {

      if(this.state.redirectPath) {
          return <Redirect to={this.state.redirectPath}  />
      }

      const {classes} = this.props;
        return (
            <Paper className={classes.root}>
                <Tabs
                    value={this.state.currentIndex}
                    onChange={this.handleChange}
                    className={classes.navbar}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="About" style={{color: "#154670"}}/>
                    <Tab label="Create Draft" style={{color: "#154670"}}/>
                    <Tab label="Join Draft" style={{color: "#154670"}}/>
                    <Tab label="My Drafts" style={{color: "#154670"}}/>
                    <Tab label="Logout" style={{position: "absolute", right: 0, color: "#154670"}}/>
                </Tabs>
                <div className={classes.logoBar}>
                    <img
                        src={SDBackground}
                        alt={"SDBackground"}
                        style={{maxWidth: "100%", maxHeight: "100%"}}
                    ></img>
                </div>
                <SwipeableViews
                    axis={classes.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.currentIndex}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <About value={this.state.currentIndex} index={0} dir={classes.direction} />
                    <CreateDraft value={this.state.currentIndex} index={1} dir={classes.direction}/>
                    <JoinDraft value={this.state.currentIndex} index={2} dir={classes.direction}/>
                    <MyDrafts value={this.state.currentIndex} index={3} dir={classes.direction}/>
                    <></>
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
