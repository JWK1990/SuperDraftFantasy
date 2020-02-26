import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL + '/api-superdraftfantasy';

class AuthService {

    signup(user) {
        return axios.post(baseUrl + "/users/sign-up", user);
    }

    login(credentials){
        return axios.post(baseUrl + "/login", credentials);
    }

    setToken(token) {
        return localStorage.setItem("token", JSON.stringify(token));
    }
    
    getToken(){
        return JSON.parse(localStorage.getItem("token"));
    }

    getAuthHeader() {
       return {headers: {Authorization: 'Bearer ' + this.getToken().token }};
    }

    logOut() {
        localStorage.removeItem("token");
        return axios.post(baseUrl + 'logout', {}, this.getAuthHeader());
    }
}

export default new AuthService();