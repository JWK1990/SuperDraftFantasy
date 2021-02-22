export const CHANGE_CURRENT_TAB_ACTION = 'CHANGE_CURRENT_TAB_ACTION';
export const CHANGE_DRAFT_STATISTICS_TEAM_ID_ACTION = 'CHANGE_DRAFT_STATISTICS_TEAM_ID_ACTION';

export const changeCurrentTabAction = tabName => ({
    type: CHANGE_CURRENT_TAB_ACTION,
    payload: tabName
})

export const changeDraftStatisticsTeamIdAction = teamId => ({
    type: CHANGE_DRAFT_STATISTICS_TEAM_ID_ACTION,
    payload: teamId
})
