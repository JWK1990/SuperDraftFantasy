import { userConstants } from '../../constants/UserConstants';
import { userService } from '../../services/UserService';
import { alertActions } from './AlertActions';
import { historyHelper } from '../../helpers/HistoryHelper';

export const userActions = {
    login,
    logout,
    register,
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                authenticationData => {
                    dispatch(success(authenticationData.user, authenticationData.jwtToken));
                    historyHelper.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user, jwtToken) { return { type: userConstants.LOGIN_SUCCESS, user, jwtToken } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    historyHelper.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                    localStorage.setItem('user', JSON.stringify(user))
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
