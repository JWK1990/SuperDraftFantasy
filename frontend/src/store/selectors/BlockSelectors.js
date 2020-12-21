import {currentTeamIdSelector} from "./DraftSelectors";

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
export const isBiddingUnderwaySelector = state => {
    return state.block.data.playerId !== '';
}
