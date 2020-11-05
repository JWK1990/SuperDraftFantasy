import axios from 'axios';

class AuthService {

    signUp(user) {
        return axios.post("/users/sign-up", user);
    }

    login(credentials){
        return axios.post("/login", credentials);
    }

    getAuthenticatedUser() {
        return axios.get("/users/me");
    }

    setToken(token) {
        localStorage.setItem("token", JSON.stringify(token));
    }
    
    getToken(){
        return JSON.parse(localStorage.getItem("token"));
    }

    removeToken(){
        localStorage.removeItem("token");
    }

}

export default new AuthService();
