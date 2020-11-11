import AuthService from "../services/AuthService";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AuthenticatedNavbar from "../components/navbar";
import PrivateRoute from "./PrivateRoute";
import DraftRoom from "../components/draftRoom";
import Logout from "../components/logout/Logout";
import React from "react";
import UnauthenticatedNavbar from "../components/navbar/UnauthenticatedNavbar";

class Routes extends React.Component {
    render() {
        const isLoggedIn = AuthService.getToken() !== null;
        return (
            <Router>
                <Route exact path="/" component={isLoggedIn ? AuthenticatedNavbar : UnauthenticatedNavbar} />
                <PrivateRoute path="/draftRoom" component={DraftRoom} />
                <PrivateRoute exact path="/logout" component={Logout} />
            </Router>
        /*    <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li hidden={!isLoggedIn}>
                            <Link to="/draftRoom">Draft Room</Link>
                        </li>
                        <li hidden={!isLoggedIn}>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>

                    <hr/>

                    {/!*
                  A <Switch> looks through all its children <Route>
                  elements and renders the first one whose path
                  matches the current URL. Use a <Switch> any time
                  you have multiple routes, but you want only one
                  of them to render at a time
                *!/}
                    <Switch>
                        <Route exact path="/" component={isLoggedIn ? AuthenticatedNavbar : UnauthenticatedNavbar} />
                        <PrivateRoute path="/draftRoom" component={DraftRoom} />
                        <PrivateRoute exact path="/logout" component={Logout} />
                    </Switch>
                </div>
            </Router>*/
        )
    };
}

export default Routes;
