export const CHANGE_CURRENT_TAB_ACTION = 'CHANGE_CURRENT_TAB_ACTION';

export const changeCurrentTabAction = tabName => ({
    type: CHANGE_CURRENT_TAB_ACTION,
    payload: tabName
})
