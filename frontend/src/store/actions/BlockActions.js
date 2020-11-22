import AuthService from "../../services/AuthService";

/* UPDATE_BLOCK Actions. */
export const UPDATE_BLOCK_STARTED = 'UPDATE_BLOCK_STARTED';
export const UPDATE_BLOCK_SUCCESS = 'UPDATE_BLOCK_SUCCESS';
export const UPDATE_BLOCK_FAILURE = 'UPDATE_BLOCK_FAILURE';

export const updateBlockStartedAction = () => ({
    type: UPDATE_BLOCK_STARTED
});

export const updateBlockSuccessAction = (block, isBidDisabled, clockText) => ({
    type: UPDATE_BLOCK_SUCCESS,
    payload: block,
    isBidDisabled: isBidDisabled,
    clockText: clockText
});

export const updateBlockFailureAction = error => ({
    type: UPDATE_BLOCK_FAILURE,
    payload: error
});



