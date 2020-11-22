export const draftSelector = state => state.draft.data;
export const draftIdSelector = state => state.draft.data.id;
export const draftStatusSelector = state => state.draft.data.status;
export const draftCommissionerUserIdSelector = state => state.draft.data.teams.find(team => team.type === "COMMISSIONER").user.id;
export const myDraftsSelector = state => state.draft.myDrafts;
export const onTheBlockTeamSelector = state => state.draft.data.teams.find(team => team.onTheBlock);
export const onTheBlockTeamIdSelector = state => state.draft.data.teams.find(team => team.onTheBlock).id;
export const currentTeamSelector = state => state.draft.data.teams.find(team => team.user.username === state.user.data.username);
export const currentTeamIdSelector = state => state.draft.data.teams.find(team => team.user.username === state.user.data.username).id;
export const draftTeamsSelector = state => state.draft.data.teams;
export const draftRosterSelector = state => state.draft.data.roster;
