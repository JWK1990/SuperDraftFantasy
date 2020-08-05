import AuthService from "../../services/AuthService";

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginAction = (credentials) => {
    return dispatch => {
        dispatch(loginStartedAction());

        AuthService.login(credentials)
            .then(res => {
                dispatch(loginSuccessAction(res.data))
            })
            .catch(err => {
                dispatch(loginFailureAction(err.message))
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
