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

    getPlayersByDraft(draftId) {
        return axios.get("/players/draft/" + draftId);
    }

    saveMyTeamLayout(teamId, playerId, position) {
        return axios.put("/teams/" + teamId + "/players/" + playerId + "/myTeamPosition/" + position, {});
    }

}

export default new DraftService();
