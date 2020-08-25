import DraftService from "../../services/DraftService";

export const GET_PLAYERS_BY_DRAFT_STARTED = 'GET_PLAYERS_BY_DRAFT_STARTED';
export const GET_PLAYERS_BY_DRAFT_SUCCESS = 'GET_PLAYERS_BY_DRAFT_SUCCESS';
export const GET_PLAYERS_BY_DRAFT_FAILURE = 'GET_PLAYERS_BY_DRAFT_FAILURE';

export const getPlayersByDraftAction = (draftId) => {
    return dispatch => {
        dispatch(getPlayersByDraftStartedAction());

        DraftService.getPlayersByDraft(draftId)
            .then(res => {
                dispatch(getPlayersByDraftSuccessAction(res.data))
            })
            .catch(err => {
                dispatch(getPlayersByDraftFailureAction(err.message))
            })
    }
}

export const getPlayersByDraftStartedAction = () => ({
    type: GET_PLAYERS_BY_DRAFT_STARTED
});

export const getPlayersByDraftSuccessAction = draft => ({
    type: GET_PLAYERS_BY_DRAFT_SUCCESS,
    payload: draft
});

export const getPlayersByDraftFailureAction = error => ({
    type: GET_PLAYERS_BY_DRAFT_FAILURE,
    payload: error
});
