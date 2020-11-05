import DraftService from "../../services/DraftService";

export const GET_DRAFT_STARTED = 'GET_DRAFT_STARTED';
export const GET_DRAFT_SUCCESS = 'GET_DRAFT_SUCCESS';
export const GET_DRAFT_FAILURE = 'GET_DRAFT_FAILURE';
export const GET_MY_DRAFTS_STARTED = 'GET_MY_DRAFTS_STARTED';
export const GET_MY_DRAFTS_SUCCESS = 'GET_MY_DRAFTS_SUCCESS';
export const GET_MY_DRAFTS_FAILURE = 'GET_MY_DRAFTS_FAILURE';
export const UPDATE_TEAM = 'UPDATE_TEAM';
export const REORDER_TEAM_LIST = 'REORDER_TEAM_LIST';

// GET DRAFT.
export const getDraftAction = (draftId) => {
    return dispatch => {
        dispatch(getDraftStartedAction());

        DraftService.getDraft(draftId)
            .then(res => {
                dispatch(getDraftSuccessAction(res.data))
            })
            .catch(err => {
                dispatch(getDraftFailureAction(err.message))
            })
    }
}

export const getDraftStartedAction = () => ({
    type: GET_DRAFT_STARTED
});

export const getDraftSuccessAction = draft => ({
    type: GET_DRAFT_SUCCESS,
    payload: draft
});

export const getDraftFailureAction = error => ({
    type: GET_DRAFT_FAILURE,
    payload: error
});

// GET MY DRAFTS.
export const getMyDraftsAction = () => {
    return dispatch => {
        dispatch(getMyDraftsStartedAction());

        DraftService.getMyDrafts()
            .then(res => {
                dispatch(getMyDraftsSuccessAction(res.data))
            })
            .catch(err => {
                dispatch(getMyDraftsFailureAction(err.message))
            })
    }
}

export const getMyDraftsStartedAction = () => ({
    type: GET_MY_DRAFTS_STARTED
});

export const getMyDraftsSuccessAction = draft => ({
    type: GET_MY_DRAFTS_SUCCESS,
    payload: draft
});

export const getMyDraftsFailureAction = error => ({
    type: GET_MY_DRAFTS_FAILURE,
    payload: error
});

// UPDATE TEAM.
export const updateTeamAction = team => ({
    type: UPDATE_TEAM,
    payload: team
})

// REORDER TEAM LIST.
export const reorderTeamListAction = teamList => ({
    type: REORDER_TEAM_LIST,
    payload: teamList
})
