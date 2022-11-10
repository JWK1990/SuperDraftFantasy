import {BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import DraftRoom from "../components/draftRoom";
import Logout from "../components/logout/Logout";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Signup from "../components/signup/Signup";
import Faq from "../components/faq/Faq";
import CreateDraft from "../components/createDraft/CreateDraft";
import JoinDraft from "../components/joinDraft/JoinDraft";
import MyDrafts from "../components/myDrafts/MyDrafts";

class Routes extends React.Component {
    unauthenticatedLinks = [
        {text: "Home", to: "/"},
        {text: "Register", to: "/register"},
        {text: "Login", to: "/login"},
        {text: "FAQ", to: "/faq"},
    ];

    authenticatedLinks = [
        {text: "Home", to: "/"},
        {text: "Create Draft", to: "/createDraft"},
        {text: "Join Draft", to: "/joinDraft"},
        {text: "My Drafts", to: "/myDrafts"},
        {text: "FAQ", to: "/faq"},
        {text: "Logout", to: "/logout"},
    ];
    render() {
        return (
            <Router>
                <Navbar links={this.props.isAuthenticated ? this.authenticatedLinks : this.unauthenticatedLinks} />
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/faq" component={Faq} />
                <Route path="/createDraft" component={CreateDraft} />
                <Route path="/joinDraft" component={JoinDraft} />
                <Route path="/myDrafts" component={MyDrafts} />
                <PrivateRoute isAuthenticated={this.props.isAuthenticated} path="/draftRoom" component={DraftRoom} />
                <PrivateRoute exact isAuthenticated={this.props.isAuthenticated} path="/logout" component={Logout} />
            </Router>
        )
    };
}

export default Routes;
