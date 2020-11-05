import axios from 'axios';

class DraftService {

    getDraft(draftId) {
        console.log("Auth: ", axios.defaults.headers.common['Authorization']);
        return axios.get("/drafts/" + draftId);
    }

    getPlayersByDraft(draftId) {
        return axios.get("/players/draft/" + draftId);
    }

    saveMyTeamLayout(teamId, playerId, position) {
        return axios.put("/teams/" + teamId + "/players/" + playerId + "/myTeamPosition/" + position, {});
    }

}

export default new DraftService();
