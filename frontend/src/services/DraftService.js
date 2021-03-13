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

    getPlayersPageByDraft(draftId, pageNum, pageSize, lastNameSearch, positionList, isHideDraftedFilterOn) {
        let basePath = "/players/draft/" + draftId + "/page";

        // Add Available Filter If Required.
        if(isHideDraftedFilterOn) {
            basePath += "/available";
        }

        // Add PageNum and PageSize Filters.
        basePath += "?pageNum=" + pageNum + "&pageSize=" + pageSize;

        // Add Search and PositionList Filters.
        basePath += "&search=" + lastNameSearch;
        basePath += "&position=" + positionList;
        return axios.get(basePath);
    }

    getSeasonSummaryByPlayerIdAndYear(playerId, year) {
        return axios.get("/seasonSummary/" + playerId + "/details?year=" + year);
    }

    saveMyTeamLayout(teamId, updatedMyTeamPositions) {
        return axios.put("/teams/" + teamId + "/myTeamPositions/", updatedMyTeamPositions);
    }

}

export default new DraftService();
