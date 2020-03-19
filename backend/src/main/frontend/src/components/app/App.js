import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from "../navbar";
import DraftRoom from "../draftRoom";
import {PrivateRoute} from "../privateRoute/PrivateRoute";
import {alertActions} from "../../store/actions/AlertActions";
import {connect} from "react-redux";
import {historyHelper} from "../../helpers/HistoryHelper";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser historyHelper,
// making sure things like the back button and bookmarks
// work properly.

class App extends React.Component {

    constructor(props) {
        super(props);

        historyHelper.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }
    render() {
        const { alert } = this.props;

        return (
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    {
                        alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }

                    <Router history={historyHelper}>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/draftRoom">About</Link>
                                </li>
                            </ul>
                            <hr />
                    {/*
                      A <Switch> looks through all its children <Route>
                      elements and renders the first one whose path
                      matches the current URL. Use a <Switch> any time
                      you have multiple routes, but you want only one
                      of them to render at a time
                    */}
                            <Switch>
                                <Route exact path="/" component={Navbar} />
                                <PrivateRoute path="/draftRoom" component={DraftRoom} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
