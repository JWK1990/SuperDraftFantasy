import {initialBlockState} from "../state/BlockState";
import {UPDATE_BLOCK_FAILURE, UPDATE_BLOCK_STARTED, UPDATE_BLOCK_SUCCESS} from "../actions/BlockActions";

export function blockReducer(state = initialBlockState, action) {
    switch(action.type) {

        case UPDATE_BLOCK_STARTED:
            return {
                ...state,
                loading: true
            };

        case UPDATE_BLOCK_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload,
                isBidDisabled: action.isBidDisabled,
                clockText: action.clockText,
                clockKey: state.clockKey + 1
            };

        case UPDATE_BLOCK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}
