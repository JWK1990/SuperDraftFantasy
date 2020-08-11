import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from "../navbar";
import DraftRoom from "../draftRoom";
import AuthService from "../../services/AuthService";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

class App extends Component {

    componentDidMount() {
        AuthService.getUser('Test123')
            .then(res => console.log(res));
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

export default App;
