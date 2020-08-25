export const draftSelector = state => state.draft.data;
export const onTheBlockTeamSelector = state => state.draft.data.teams.find(team => team.onTheBlock);
export const currentTeamSelector = state => state.draft.data.teams.find(team => team.user.username === state.user.data.username);
