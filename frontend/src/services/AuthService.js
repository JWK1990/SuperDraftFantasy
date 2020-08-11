import axios from 'axios';
import ConfigurationHelper from '../utils/ConfigurationUtils.js';

const baseUrl = ConfigurationHelper.getBaseUrl();

class AuthService {

    constructor() {
        axios.defaults.baseURL = ConfigurationHelper.getBaseUrl();
        axios.defaults.headers.common['Authorization'] = this.getToken();
    }

    signup(user) {
        return axios.post(baseUrl + "/users/sign-up", user);
    }

    login(credentials){
        return axios.post(baseUrl + "/login", credentials);
    }

    getAuthenticatedUser() {
        return axios.get(baseUrl + "/users/me");
    }

    setToken(token) {
        localStorage.setItem("token", JSON.stringify(token));
    }
    
    getToken(){
        return JSON.parse(localStorage.getItem("token"));
    }

}

export default new AuthService();
