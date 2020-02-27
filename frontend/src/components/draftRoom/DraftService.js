import axios from 'axios';
import AuthService from "../login/AuthService";

const baseUrl = process.env.REACT_APP_API_URL + '/api-superdraftfantasy/drafts';

class DraftService {

    getDraft(draftId) {
        const config = {
            headers: {
                Authorization: AuthService.getToken()
            }
        };

        return axios.get("http://localhost:8080/api-superdraftfantasy/drafts/" + draftId, config);
    }

}

export default new DraftService();