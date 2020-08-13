import {
    GET_CURRENT_USER_FAILURE,
    GET_CURRENT_USER_STARTED, GET_CURRENT_USER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_STARTED,
    LOGIN_SUCCESS
} from "../actions";

const initialState = {
    loading: false,
    error: null,
    data: null,
};

export function userReducer(state = initialState, action) {
    switch(action.type) {

        case LOGIN_STARTED:
        case GET_CURRENT_USER_STARTED:
            return {
                ...state,
                loading: true
            };

        case LOGIN_SUCCESS:
        case GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            };

        case LOGIN_FAILURE:
        case GET_CURRENT_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    };
}
