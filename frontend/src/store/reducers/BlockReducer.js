import {initialBlockData, initialBlockState} from "../state/BlockState";
import {RECEIVE_ADD_TO_BLOCK, RECEIVE_BID, RECEIVE_START_NEXT_ROUND, RECEIVE_STOP_DRAFT} from "../actions/BlockActions";

export function blockReducer(state = initialBlockState, action) {
    switch(action.type) {

        case RECEIVE_START_NEXT_ROUND:
            const updatedData = initialBlockData;
            updatedData.onTheBlockTeamId = action.payload.onTheBlockTeamId;
            return {
                ...state,
                loading: false,
                error: null,
                data: updatedData,
            }

        case RECEIVE_ADD_TO_BLOCK:
        case RECEIVE_BID:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload,
            };

            case RECEIVE_STOP_DRAFT:
                return initialBlockState

        default:
            return state;
    }
}
