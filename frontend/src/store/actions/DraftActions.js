import DraftService from "../../services/DraftService";

export const GET_DRAFT_STARTED = 'GET_DRAFT_STARTED';
export const GET_DRAFT_SUCCESS = 'GET_DRAFT_SUCCESS';
export const GET_DRAFT_FAILURE = 'GET_DRAFT_FAILURE';
export const UPDATE_TEAM = 'UPDATE_TEAM';
export const REORDER_TEAM_LIST = 'REORDER_TEAM_LIST';

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

export const updateTeamAction = team => ({
    type: UPDATE_TEAM,
    payload: team
})

export const reorderTeamListAction = teamList => ({
    type: REORDER_TEAM_LIST,
    payload: teamList
})
