import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

class AuthService {

    signup(user) {
        return axios.post(baseUrl + "/users/sign-up", user);
    }

    login(credentials){
        return axios.post(baseUrl + "/login", credentials);
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