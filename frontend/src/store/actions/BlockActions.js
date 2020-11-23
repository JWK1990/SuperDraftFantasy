export const RECEIVE_START_NEXT_ROUND = 'RECEIVE_START_NEXT_ROUND';
export const receiveStartNextRoundAction = block => ({
    type: RECEIVE_START_NEXT_ROUND,
    payload: block,
});

export const RECEIVE_ADD_TO_BLOCK = 'RECEIVE_ADD_TO_BLOCK';
export const receiveAddToBlockAction = block => ({
    type: RECEIVE_ADD_TO_BLOCK,
    payload: block,
});

export const RECEIVE_BID = 'RECEIVE_BID';
export const receiveBidAction = block => ({
    type: RECEIVE_BID,
    payload: block,
});

export const RECEIVE_STOP_DRAFT = 'RECEIVE_STOP_DRAFT';
export const receiveStopDraftAction = () => ({
    type: RECEIVE_STOP_DRAFT,
});
