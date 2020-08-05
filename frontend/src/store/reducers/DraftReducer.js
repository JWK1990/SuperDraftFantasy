import {GET_DRAFT} from "../actions";

const initialState = {
    draftId: undefined,
};

export function draftReducer(state = initialState, action) {
    switch(action.type) {

        case GET_DRAFT:
            return {
                ...state,
                draft: {
                        draftId: action.draftId,
                    }
            };

        default:
            return state;
    };
}
