import {initialUserState} from "./UserState";

const initialRoster = {
    id: null,
    type: null,
    def: null,
    mid: null,
    ruc: null,
    fwd: null,
    bench: null
}

const initialTeamPlayerJoinsState = [
    {
        player: null,
        price: null,
        myTeamPositionType: null,
        slotId: null,
    }
]

const initialTeams = [
    {
        id: null,
        name: null,
        type: null,
        budget: null,
        maxBid: null,
        onTheBlock: null,
        orderIndex: null,
        teamPlayerJoins: initialTeamPlayerJoinsState,
        user: initialUserState
    }
]

const initialDraftData = {
    id: null,
    name: null,
    numOfTeams: null,
    roster: initialRoster,
    status: null,
    budget: null,
    onTheBlockTimer: null,
    bidTimer: null,
    teams: initialTeams
}

export const initialDraftState = {
    loading: false,
    error: null,
    data: initialDraftData,
};
