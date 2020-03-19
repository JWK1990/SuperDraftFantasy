import {GET_DRAFT} from "../actions";
import { initialDraftRoomState } from "../InitialState";

export function draftReducer(state = initialDraftRoomState, action) {
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
