import axios from 'axios';
import AuthService from "../login/AuthService";

class DraftService {

    constructor() {
        this.config = {
            headers: {
                Authorization: AuthService.getToken()
            }
        };
    }

    getDraft(draftId) {
        return axios.get("/drafts/" + draftId, this.config);
    }

    getPlayers() {
        return axios.get("/players", this.config);
    }

    draftPlayer(teamId, playerId, salePrice) {
        return axios.put("/teams/" + teamId + "/players/add/" + playerId, {salePrice: salePrice}, this.config);
    }

    saveMyTeamLayout(teamId, playerId, position) {
        return axios.put("/teams/" + teamId + "/players/" + playerId + "/myTeamPosition/" + position, {}, this.config);
    }

}

export default new DraftService();