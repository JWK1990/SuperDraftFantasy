import {
    GET_CURRENT_USER_FAILURE, GET_CURRENT_USER_STARTED, GET_CURRENT_USER_SUCCESS,
    LOGIN_FAILURE, LOGIN_STARTED, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_STARTED, LOGOUT_SUCCESS,
    SIGN_UP_FAILURE, SIGN_UP_STARTED, SIGN_UP_SUCCESS
} from "../actions";
import {initialUserState} from "../state/UserState";

export function userReducer(state = initialUserState, action) {
    switch(action.type) {

        case SIGN_UP_STARTED:
        case LOGIN_STARTED:
        case GET_CURRENT_USER_STARTED:
        case LOGOUT_STARTED:
            return {
                ...state,
                loading: true
            };

        case SIGN_UP_SUCCESS:
        case LOGIN_SUCCESS:
        case GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload,
                authenticated: true,
            };

        case SIGN_UP_FAILURE:
        case LOGIN_FAILURE:
        case GET_CURRENT_USER_FAILURE:
        case LOGOUT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                authenticated: false,
            };

        case LOGOUT_SUCCESS:
            return initialUserState

        default:
            return state;
    }
}
