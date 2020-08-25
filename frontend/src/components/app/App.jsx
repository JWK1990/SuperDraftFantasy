import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Navbar from "../navbar";
import DraftRoom from "../draftRoom";
import AuthService from "../../services/AuthService";
import {getCurrentUserAction} from "../../store/actions";
import {connect} from "react-redux";
import axios from "axios";
import ConfigurationHelper from "../../utils/ConfigurationUtils";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

class App extends React.Component {

    constructor(props) {
        super(props);
        // Define axios defaults to attach baseURL and Authorization Header to all requests.
        axios.defaults.baseURL = ConfigurationHelper.getBaseUrl();
        axios.defaults.headers.common['Authorization'] = AuthService.getToken();
    }

    componentDidMount() {
        if(AuthService.getToken()) {
            this.props.getCurrentUser();
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/draftRoom">Draft Room</Link>
                        </li>
                    </ul>

                    <hr/>

                    {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}
                    <Switch>
                        <Route exact path="/">
                            <Navbar/>
                        </Route>
                        <Route path="/draftRoom">
                            <DraftRoom/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    };
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = dispatch => ({
    getCurrentUser: () => dispatch(getCurrentUserAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
