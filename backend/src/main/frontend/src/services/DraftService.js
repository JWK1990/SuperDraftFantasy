import axios from 'axios';
import AuthService from "./AuthService";
import ConfigurationHelper from '../utils/ConfigurationUtils.js';

const baseUrl = ConfigurationHelper.getBaseUrl();

class DraftService {

    constructor() {
        this.config = {
            headers: {
                Authorization: AuthService.getToken()
            }
        };
    }

    getDraft(draftId) {
        return axios.get(baseUrl + "/drafts/" + draftId, this.config);
    }

    getPlayers() {
        return axios.get(baseUrl + "/players", this.config);
    }

    draftPlayer(teamId, playerId, salePrice) {
        return axios.put(baseUrl + "/teams/" + teamId + "/players/add/" + playerId, {salePrice: salePrice}, this.config);
    }

    saveMyTeamLayout(teamId, playerId, position) {
        return axios.put(baseUrl + "/teams/" + teamId + "/players/" + playerId + "/myTeamPosition/" + position, {}, this.config);
    }

}

export default new DraftService();
