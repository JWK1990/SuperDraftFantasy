import axios from 'axios';
import ConfigurationHelper from '../utils/ConfigurationUtils.js';

const baseUrl = ConfigurationHelper.getBaseUrl();

class AuthService {

    signup(user) {
        return axios.post(baseUrl + "/users/sign-up", user);
    }

    login(credentials){
        return axios.post(baseUrl + "/login", credentials);
    }

    getUser(username) {
        return axios.get(baseUrl + "/users/" + username);
    }

    setToken(token) {
        localStorage.setItem("token", JSON.stringify(token));
    }
    
    getToken(){
        return JSON.parse(localStorage.getItem("token"));
    }

    setCurrentUser(currentUser) {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem("currentUser"));
    }

}

export default new AuthService();
