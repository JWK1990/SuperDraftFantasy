import {initialUserState} from "./UserState";
import {initialPlayersState} from "./PlayersState";

const initialRoster = {
    id: null,
    type: null,
    def: null,
    mid: null,
    ruc: null,
    fwd: null,
    bench: null
}

const initialTeams = [
    {
        id: null,
        name: null,
        type: null,
        budget: null,
        onTheBlock: null,
        players: initialPlayersState,
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
