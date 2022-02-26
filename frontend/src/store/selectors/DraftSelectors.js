// Draft.
import {PositionTypeEnum} from "../../models/PositionTypeEnum";
import {userIdSelector} from "./UserSelectors";

export const draftSelector = state => state.draft.data;
export const draftIdSelector = state => state.draft.data.id;
export const draftStatusSelector = state => state.draft.data.status;
export const draftTeamsSelector = state => state.draft.data.teams;
export const draftRosterSelector = state => state.draft.data.roster;
export const numOfPlayersRequiredSelector = state => {
    const roster = state.draft.data.roster;
    return roster.def + roster.mid + roster.ruc + roster.fwd + roster.bench;
}

// Base Details.
export const draftBaseSelector = state => {
    const draftData = state.draft.data;
    return {
        id: draftData.id,
        status: draftData.status,
        onTheBlockTimer: draftData.onTheBlockTimer,
        bidTimer: draftData.bidTimer,
    };
}

// Commissioner.
export const commissionerUserIdSelector = state => state.draft.data.teams.find(team => team.type === "COMMISSIONER").user.id;
export const commissionerTeamNameSelector = state => state.draft.data.teams.find(team => team.type === "COMMISSIONER").name;
export const isCurrentUserCommissionerSelector = state => commissionerUserIdSelector(state) === userIdSelector(state);

// Current User.
export const myDraftsSelector = state => state.draft.myDrafts;
export const currentTeamSelector = state => state.draft.data.teams.find(team => team.user.id === state.user.data.id);
export const currentTeamIdSelector = state => state.draft.data.teams.find(team => team.user.id === state.user.data.id).id;

// Teams.
export const draftTeamSelector = (state, teamId) => state.draft.data.teams.find(team => team.id === teamId);
export const draftTeamsNameSelector = state => state.draft.data.teams.map(team => {
    return {
        id: team.id,
        name: team.name
    }
});
export const draftedPlayersSelector = state => {
    const draftedPlayersList = [];
    state.draft.data.teams.forEach(team => {
        team.teamPlayerJoins.forEach(teamPlayerJoin => {
            teamPlayerJoin["team"] = {id: team.id, name: team.name};
            draftedPlayersList.push(teamPlayerJoin)
        });
    })
    return draftedPlayersList.sort((a, b) => a.id < b.id ? 1 : -1);
}

// Position Availability.
export const isSlotAvailableSelector = (state, position) => {
    const totalSlots = draftRosterSelector(state)[position];
    const filledSlots = currentTeamSelector(state).teamPlayerJoins.filter(
        player => player.myTeamPositionType === PositionTypeEnum[position]
    );
    return filledSlots.length < totalSlots;
}
