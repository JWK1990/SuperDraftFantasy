export const GET_DRAFT = 'GET_DRAFT';

export const getDraft = (draftId) => {
    return {
        type: GET_DRAFT,
        draftId: draftId
    }
}
