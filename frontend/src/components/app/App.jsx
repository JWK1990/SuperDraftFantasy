import React from "react";
import AuthService from "../../services/AuthService";
import axios from "axios";
import ConfigurationHelper from "../../utils/ConfigurationUtils";
import Routes from "../../routing/Routes";
import {userAuthenticatedSelector} from "../../store/selectors/UserSelectors";
import {getCurrentUserAction} from "../../store/actions";
import {connect} from "react-redux";

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
        // Define axios interceptor to add Token to Authorization Header.
        axios.interceptors.request.use(
            config => {
                if (!config.headers.Authorization) {
                    const token = AuthService.getToken();
                    if (token) {
                        config.headers.Authorization = token;
                    }
                }
                return config;
            },
            error => Promise.reject(error)
        );
    }

    componentDidMount() {
        if(AuthService.getToken()) {
            this.props.getCurrentUser();
        }
    }

    render() {
        // The if condition ensures that the page isn't loaded until the isAuthenticated state is fetched.
        // Could maybe handle this with the loading property in the future.
        if(this.props.isAuthenticated != null) {
            return <Routes isAuthenticated={this.props.isAuthenticated}/>;
        }
        return <div/>
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: userAuthenticatedSelector(state)
    };
};

const mapDispatchToProps = dispatch => ({
    getCurrentUser: () => dispatch(getCurrentUserAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
