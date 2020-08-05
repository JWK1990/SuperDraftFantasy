import DraftService from "../../services/DraftService";

export const LOAD_DRAFT_STARTED = 'LOAD_DRAFT_STARTED';
export const LOAD_DRAFT_SUCCESS = 'LOAD_DRAFT_SUCCESS';
export const LOAD_DRAFT_FAILURE = 'LOAD_DRAFT_FAILURE';

export const loadDraftAction = (draftId) => {
    return dispatch => {
        dispatch(loadDraftStartedAction());

        DraftService.getDraft(draftId)
            .then(res => {
                dispatch(loadDraftSuccessAction(res.data))
            })
            .catch(err => {
                dispatch(loadDraftFailureAction(err.message))
            })
    }
}

export const loadDraftStartedAction = () => ({
    type: LOAD_DRAFT_STARTED
});

export const loadDraftSuccessAction = draft => ({
    type: LOAD_DRAFT_SUCCESS,
    payload: draft
});

export const loadDraftFailureAction = error => ({
    type: LOAD_DRAFT_FAILURE,
    payload: error
});
