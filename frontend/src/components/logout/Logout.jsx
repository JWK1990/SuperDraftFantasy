import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import {logoutAction} from "../../store/actions";

class Logout extends React.Component {

    componentDidMount() {
        this.props.logout();
    }

    render() {
        return <Redirect to="/" />
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutAction())
});

export default connect(null, mapDispatchToProps)(Logout);
