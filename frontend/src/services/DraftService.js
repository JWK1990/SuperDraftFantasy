import axios from 'axios';

class DraftService {

    getDraft(draftId) {
        return axios.get("/drafts/" + draftId);
    }

    getPlayersByDraft(draftId) {
        return axios.get("/players/draft/" + draftId);
    }

    draftPlayer(teamId, playerId, salePrice) {
        return axios.put("/teams/" + teamId + "/players/add/" + playerId, {salePrice: salePrice});
    }

    saveMyTeamLayout(teamId, playerId, position) {
        return axios.put("/teams/" + teamId + "/players/" + playerId + "/myTeamPosition/" + position, {});
    }

}

export default new DraftService();
