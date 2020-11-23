import DraftService from "../../services/DraftService";
import {changeCurrentTabAction} from "./NavigationActions";
import NavigationUtils from "../../utils/NavigationUtils";

// CREATE DRAFT.
export const CREATE_DRAFT_STARTED = 'CREATE_DRAFT_STARTED';
export const CREATE_DRAFT_SUCCESS = 'CREATE_DRAFT_SUCCESS';
export const CREATE_DRAFT_FAILURE = 'CREATE_DRAFT_FAILURE';

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
};

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
export const GET_DRAFT_STARTED = 'GET_DRAFT_STARTED';
export const GET_DRAFT_SUCCESS = 'GET_DRAFT_SUCCESS';
export const GET_DRAFT_FAILURE = 'GET_DRAFT_FAILURE';

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
};

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

// JOIN DRAFT.
export const JOIN_DRAFT_STARTED = 'JOIN_DRAFT_STARTED';
export const JOIN_DRAFT_SUCCESS = 'JOIN_DRAFT_SUCCESS';
export const JOIN_DRAFT_FAILURE = 'JOIN_DRAFT_FAILURE';

export const joinDraftAction = (draftId, joinDraftWriteDto) => {
    return dispatch => {
        dispatch(joinDraftStartedAction());

        DraftService.joinDraft(draftId, joinDraftWriteDto)
            .then(res => {
                dispatch(joinDraftSuccessAction(res.data))
                dispatch(getMyDraftsAction());
                dispatch(changeCurrentTabAction(
                    NavigationUtils.navigationTabs.authenticatedNavbar.myDrafts
                ));
            })
            .catch(err => {
                dispatch(joinDraftFailureAction(err.message))
            })
    }
};

export const joinDraftStartedAction = () => ({
    type: JOIN_DRAFT_STARTED
});

export const joinDraftSuccessAction = draft => ({
    type: JOIN_DRAFT_SUCCESS,
    payload: draft
});

export const joinDraftFailureAction = error => ({
    type: JOIN_DRAFT_FAILURE,
    payload: error
});

// START DRAFT.
export const START_DRAFT_STARTED = 'START_DRAFT_STARTED';
export const START_DRAFT_SUCCESS = 'START_DRAFT_SUCCESS';
export const START_DRAFT_FAILURE = 'START_DRAFT_FAILURE';

export const startDraftAction = (draftId) => {
    return dispatch => {
        dispatch(startDraftStartedAction());

        DraftService.startDraft(draftId)
            .then(res => {
                dispatch(startDraftSuccessAction(res.data))
            })
            .catch(err => {
                dispatch(startDraftFailureAction(err.message))
            })
    }
};

export const startDraftStartedAction = () => ({
    type: START_DRAFT_STARTED
});

export const startDraftSuccessAction = status => ({
    type: START_DRAFT_SUCCESS,
    payload: status
});

export const startDraftFailureAction = error => ({
    type: START_DRAFT_FAILURE,
    payload: error
});

// STOP DRAFT.
export const STOP_DRAFT_STARTED = 'STOP_DRAFT_STARTED';
export const STOP_DRAFT_SUCCESS = 'STOP_DRAFT_SUCCESS';
export const STOP_DRAFT_FAILURE = 'STOP_DRAFT_FAILURE';

export const stopDraftAction = (draftId) => {
    return dispatch => {
        dispatch(stopDraftStartedAction());

        DraftService.stopDraft(draftId)
            .then(res => {
                dispatch(stopDraftSuccessAction(res.data))
            })
            .catch(err => {
                dispatch(stopDraftFailureAction(err.message))
            })
    }
};

export const stopDraftStartedAction = () => ({
    type: STOP_DRAFT_STARTED
});

export const stopDraftSuccessAction = status => ({
    type: STOP_DRAFT_SUCCESS,
    payload: status
});

export const stopDraftFailureAction = error => ({
    type: STOP_DRAFT_FAILURE,
    payload: error
});

// GET MY DRAFTS.
export const GET_MY_DRAFTS_STARTED = 'GET_MY_DRAFTS_STARTED';
export const GET_MY_DRAFTS_SUCCESS = 'GET_MY_DRAFTS_SUCCESS';
export const GET_MY_DRAFTS_FAILURE = 'GET_MY_DRAFTS_FAILURE';

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
};

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
export const UPDATE_TEAM = 'UPDATE_TEAM';

export const updateTeamAction = team => ({
    type: UPDATE_TEAM,
    payload: team
});

// REORDER TEAM LIST.
export const REORDER_TEAM_LIST = 'REORDER_TEAM_LIST';

export const reorderTeamListAction = teamList => ({
    type: REORDER_TEAM_LIST,
    payload: teamList
});
