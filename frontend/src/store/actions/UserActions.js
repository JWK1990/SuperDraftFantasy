import AuthService from "../../services/AuthService";

/* LOGIN Actions. */
export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginAction = (credentials) => {
    return dispatch => {
        dispatch(loginStartedAction());

        AuthService.login(credentials)
            .then(res => {
                dispatch(loginSuccessAction(res.data));
                AuthService.setToken(res.headers.authorization);
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



