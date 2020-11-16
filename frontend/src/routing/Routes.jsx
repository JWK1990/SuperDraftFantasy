import {BrowserRouter as Router, Route} from "react-router-dom";
import AuthenticatedNavbar from "../components/navbar";
import PrivateRoute from "./PrivateRoute";
import DraftRoom from "../components/draftRoom";
import Logout from "../components/logout/Logout";
import React from "react";
import UnauthenticatedNavbar from "../components/navbar/UnauthenticatedNavbar";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={this.props.isAuthenticated ? AuthenticatedNavbar : UnauthenticatedNavbar} />
                <PrivateRoute isAuthenticated={this.props.isAuthenticated} path="/draftRoom" component={DraftRoom} />
                <PrivateRoute exact isAuthenticated={this.props.isAuthenticated} path="/logout" component={Logout} />
            </Router>
        )
    };
}

export default Routes;
