import React from 'react';
import AuthService from '../services/AuthService';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = (props) => {
    return  AuthService.getToken()
        ? (<Route  path={props.path} exact={props.exact} component={props.component} />)
        : (<Redirect  to="/" />);
}

export default PrivateRoute;
