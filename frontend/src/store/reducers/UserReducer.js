import {
    LOGIN_FAILURE,
    LOGIN_STARTED,
    LOGIN_SUCCESS
} from "../actions";

const initialState = {
    loading: false,
    error: null,
    user: null,
};

export function userReducer(state = initialState, action) {
    switch(action.type) {

        case LOGIN_STARTED:
            return {
                ...state,
                loading: true
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    };
}
