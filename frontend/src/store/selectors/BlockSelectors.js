import {currentTeamIdSelector, draftTeamSelector} from "./DraftSelectors";

export const blockSelector = state => state.block.data;
export const onTheBlockTeamIdSelector = state => state.block.data.onTheBlockTeamId;
export const isOnTheBlockSelector = state => {
    const currentUserTeamId = currentTeamIdSelector(state);
    const onTheBlockTeamId = state.block.data.onTheBlockTeamId;
    return onTheBlockTeamId === currentUserTeamId;
}
export const isLeadBidderSelector = state => {
    const currentUserTeamId = currentTeamIdSelector(state);
    const leadBidderTeamId = state.block.data.bidderTeamId;
    return currentUserTeamId === leadBidderTeamId;
}
export const leadBidderTeamNameSelector = state => {
    let leadBidderTeamName = null;
    if(state.block.data.bidderTeamId) {
        leadBidderTeamName = draftTeamSelector(state, state.block.data.bidderTeamId).name;
    }
    return leadBidderTeamName;
}
export const isBiddingUnderwaySelector = state => {
    return state.block.data.playerId !== '';
}

export const onTheBlockPlayerSelector = state => {
    return state.block.data.player;
}
