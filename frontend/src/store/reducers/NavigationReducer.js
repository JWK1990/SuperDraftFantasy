import {
    CHANGE_CURRENT_TAB_ACTION,
    CHANGE_DRAFT_BLOCK_PLAYER_ANALYSIS_GRAPH,
    CHANGE_DRAFT_STATISTICS_TEAM_ID_ACTION
} from "../actions/NavigationActions";
import {initialNavigationState} from "../state/NavigationState";

export function navigationReducer(state = initialNavigationState, action) {
    switch(action.type) {

        case CHANGE_CURRENT_TAB_ACTION:
            return {
                ...state,
                currentTabName: action.payload,
            };

        case CHANGE_DRAFT_STATISTICS_TEAM_ID_ACTION:
            return {
                ...state,
                draftStatisticsTeamId: action.payload,
            };

        case CHANGE_DRAFT_BLOCK_PLAYER_ANALYSIS_GRAPH:
            return {
                ...state,
                draftBlockPlayerAnalysisGraph: action.payload,
            }

        default:
            return state;
    }
}
