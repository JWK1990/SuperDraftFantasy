import axios from 'axios';
import AuthService from "../login/AuthService";

const baseUrl = process.env.REACT_APP_API_URL + '/api-superdraftfantasy';

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

    draftPlayer(teamId, playerId) {
        return axios.put(baseUrl + "/teams/" + teamId + "/players/add/" + playerId, {}, this.config);
    }

}

export default new DraftService();