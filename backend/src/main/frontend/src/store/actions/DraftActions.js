export const GET_DRAFT = 'GET_DRAFT';

export const setDraftAction = (draftId) => {
    return {
        type: GET_DRAFT,
        draftId: draftId
    }
}
