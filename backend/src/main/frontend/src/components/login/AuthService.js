import axios from 'axios';

class AuthService {

    signup(user) {
        return axios.post("/users/sign-up", user);
    }

    login(credentials){
        return axios.post("/login", credentials);
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