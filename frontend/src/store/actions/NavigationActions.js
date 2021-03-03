export const CHANGE_CURRENT_TAB_ACTION = 'CHANGE_CURRENT_TAB_ACTION';
export const CHANGE_DRAFT_STATISTICS_TEAM_ID_ACTION = 'CHANGE_DRAFT_STATISTICS_TEAM_ID_ACTION';
export const CHANGE_DRAFT_BLOCK_PLAYER_ANALYSIS_GRAPH = 'CHANGE_DRAFT_BLOCK_PLAYER_ANALYSIS_GRAPH';
export const CHANGE_BLOCK_GRAPH_STAT_ACTION = 'CHANGE_BLOCK_GRAPH_STAT_ACTION';
export const CHANGE_BLOCK_GRAPH_PERIOD_ACTION = 'CHANGE_BLOCK_GRAPH_PERIOD_ACTION';

export const changeCurrentTabAction = tabName => ({
    type: CHANGE_CURRENT_TAB_ACTION,
    payload: tabName
})

export const changeDraftStatisticsTeamIdAction = teamId => ({
    type: CHANGE_DRAFT_STATISTICS_TEAM_ID_ACTION,
    payload: teamId
})

export const changeBlockGraphStat = statId => ({
    type: CHANGE_BLOCK_GRAPH_STAT_ACTION,
    payload: statId
})

export const changeBlockGraphPeriod = periodId => ({
    type: CHANGE_BLOCK_GRAPH_PERIOD_ACTION,
    payload: periodId
})
