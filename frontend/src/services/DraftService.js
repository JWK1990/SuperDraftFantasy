import axios from 'axios';

class DraftService {

    getDraft(draftId) {
        return axios.get("/drafts/" + draftId);
    }

    getMyDrafts() {
        return axios.get("/drafts/myDrafts");
    }

    getPlayersByDraft(draftId) {
        return axios.get("/players/draft/" + draftId);
    }

    saveMyTeamLayout(teamId, playerId, position) {
        return axios.put("/teams/" + teamId + "/players/" + playerId + "/myTeamPosition/" + position, {});
    }

}

export default new DraftService();
