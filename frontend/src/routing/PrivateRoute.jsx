import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = (props) => {
    return  props.isAuthenticated
        ? (<Route  path={props.path} exact={props.exact} component={props.component} />)
        : (<Redirect  to="/" />);
}

export default PrivateRoute;
