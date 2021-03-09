import axios from 'axios';

class DraftService {

    createDraft(draft) {
        return axios.post("/drafts", draft);
    }

    getDraft(draftId) {
        return axios.get("/drafts/" + draftId);
    }

    joinDraft(draftId, draftJoinWriteDto) {
        return axios.put("/drafts/" + draftId + "/join", draftJoinWriteDto);
    }

    startDraft(draftId) {
        return axios.put("/drafts/" + draftId + "/start");
    }

    stopDraft(draftId) {
        return axios.put("/drafts/" + draftId + "/stop");
    }

    getMyDrafts() {
        return axios.get("/drafts/myDrafts");
    }

    getAllPlayersByDraft(draftId) {
        return axios.get("/players/draft/" + draftId);
    }

    getPlayersPageByDraft(draftId, pageNum, pageSize) {
        return axios.get("/players/draft/" + draftId + "/page?pageNum=" + pageNum + "&pageSize=" + pageSize);
    }

    getPlayerDetailsById(playerId, draftId) {
        return axios.get("/players/" + playerId + "/details?draftId=" + draftId);
    }

    saveMyTeamLayout(teamId, updatedMyTeamPositions) {
        return axios.put("/teams/" + teamId + "/myTeamPositions/", updatedMyTeamPositions);
    }

}

export default new DraftService();
