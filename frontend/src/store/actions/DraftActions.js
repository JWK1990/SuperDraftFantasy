import DraftService from "../../services/DraftService";
import {changeCurrentTabAction} from "./NavigationActions";
import NavigationUtils from "../../utils/NavigationUtils";

export const CREATE_DRAFT_STARTED = 'CREATE_DRAFT_STARTED';
export const CREATE_DRAFT_SUCCESS = 'CREATE_DRAFT_SUCCESS';
export const CREATE_DRAFT_FAILURE = 'CREATE_DRAFT_FAILURE';
export const GET_DRAFT_STARTED = 'GET_DRAFT_STARTED';
export const GET_DRAFT_SUCCESS = 'GET_DRAFT_SUCCESS';
export const GET_DRAFT_FAILURE = 'GET_DRAFT_FAILURE';
export const GET_MY_DRAFTS_STARTED = 'GET_MY_DRAFTS_STARTED';
export const GET_MY_DRAFTS_SUCCESS = 'GET_MY_DRAFTS_SUCCESS';
export const GET_MY_DRAFTS_FAILURE = 'GET_MY_DRAFTS_FAILURE';
export const UPDATE_TEAM = 'UPDATE_TEAM';
export const REORDER_TEAM_LIST = 'REORDER_TEAM_LIST';

// CREATE DRAFT.
export const createDraftAction = (draft) => {
    return dispatch => {
        dispatch(createDraftStartedAction());

        DraftService.createDraft(draft)
            .then(res => {
                dispatch(createDraftSuccessAction(res.data));
                dispatch(getMyDraftsAction());
                dispatch(changeCurrentTabAction(
                    NavigationUtils.navigationTabs.authenticatedNavbar.myDrafts
                ));
            })
            .catch(err => {
                dispatch(createDraftFailureAction(err.message))
            })
    }
}

export const createDraftStartedAction = () => ({
    type: CREATE_DRAFT_STARTED,
});

export const createDraftSuccessAction = () => ({
    type: CREATE_DRAFT_SUCCESS,
});

export const createDraftFailureAction = error => ({
    type: CREATE_DRAFT_FAILURE,
    payload: error
});

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
