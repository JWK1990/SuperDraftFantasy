import AuthService from "../../services/AuthService";

/* SIGN_UP Actions. */
export const SIGN_UP_STARTED = 'SIGN_UP_STARTED';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const signUpAction = (user) => {
    return dispatch => {
        dispatch(signUpStartedAction());

        AuthService.signUp(user)
            .then(res => {
                AuthService.setToken(res.headers.authorization);
                dispatch(signUpSuccessAction(res.data));
            })
            .catch(err => {
                dispatch(signUpFailureAction(err.message));
            })
    }
}

export const signUpStartedAction = () => ({
    type: SIGN_UP_STARTED
});

export const signUpSuccessAction = user => ({
    type: SIGN_UP_SUCCESS,
    payload: user
});

export const signUpFailureAction = error => ({
    type: SIGN_UP_FAILURE,
    payload: error
});

/* LOGIN Actions. */
export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginAction = (credentials) => {
    return dispatch => {
        dispatch(loginStartedAction());

        AuthService.login(credentials)
            .then(res => {
                AuthService.setToken(res.headers.authorization);
                dispatch(loginSuccessAction(res.data));
            })
            .catch(err => {
                dispatch(loginFailureAction(err.message));
            })
    }
}

export const loginStartedAction = () => ({
    type: LOGIN_STARTED
});

export const loginSuccessAction = user => ({
    type: LOGIN_SUCCESS,
    payload: user
});

export const loginFailureAction = error => ({
    type: LOGIN_FAILURE,
    payload: error
});

/* GET CURRENT USER Actions. */
export const GET_CURRENT_USER_STARTED = 'GET_CURRENT_USER_STARTED';
export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
export const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE';

export const getCurrentUserAction = () => {
    return dispatch => {
        dispatch(getCurrentUserStartedAction());

        AuthService.getAuthenticatedUser()
            .then(res => {
                dispatch(getCurrentUserSuccessAction(res.data));
            })
            .catch(err => {
                dispatch(getCurrentUserFailureAction(err.message));
                AuthService.removeToken();
            })
    }
}

export const getCurrentUserStartedAction = () => ({
    type: GET_CURRENT_USER_STARTED
});

export const getCurrentUserSuccessAction = user => ({
    type: GET_CURRENT_USER_SUCCESS,
    payload: user
});

export const getCurrentUserFailureAction = error => ({
    type: GET_CURRENT_USER_FAILURE,
    payload: error
});

/* LOGOUT Actions. */
export const LOGOUT_STARTED = 'LOGOUT_STARTED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const logoutAction = () => {
    return dispatch => {
        dispatch(logoutStartedAction());
        AuthService.removeToken();
        if(!AuthService.getToken()) {
            dispatch(logoutSuccessAction())
        } else {
            dispatch(logoutFailureAction("Token not successfully removed"))
        }
    }
}

export const logoutStartedAction = () => ({
    type: LOGOUT_STARTED
});

export const logoutSuccessAction = () => ({
    type: LOGOUT_SUCCESS
});

export const logoutFailureAction = error => ({
    type: LOGOUT_FAILURE,
    payload: error
});



