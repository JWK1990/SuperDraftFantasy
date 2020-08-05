import {LOAD_DRAFT_FAILURE, LOAD_DRAFT_STARTED, LOAD_DRAFT_SUCCESS} from "../actions";

const initialState = {
    loading: false,
    error: null,
    draft: null,
};

export function draftReducer(state = initialState, action) {
    switch(action.type) {

        case LOAD_DRAFT_STARTED:
            return {
                ...state,
                loading: true
            };

        case LOAD_DRAFT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                draft: action.payload
            };

        case LOAD_DRAFT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    };
}
