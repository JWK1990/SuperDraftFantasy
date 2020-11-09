import {CHANGE_CURRENT_TAB_ACTION} from "../actions/NavigationActions";
import {initialNavigationState} from "../state/NavigationState";

export function navigationReducer(state = initialNavigationState, action) {
    switch(action.type) {

        case CHANGE_CURRENT_TAB_ACTION:
            return {
                ...state,
                currentTabName: action.payload,
            };

        default:
            return state;
    }
}
