import AuthHelper from '../helpers/AuthHelper';
import ConfigHelper from "../helpers/ConfigHelper";
import axios from "axios";

export const userService = {
    login,
    logout,
    register,
    getById,
};

const baseUrl = ConfigHelper.getBaseUrl();

function login(username, password) {
    const credentials = { username, password };

    return axios.post(baseUrl + "/login", credentials)
        .then(handleResponse)
        .then(response => {
            const authenticationData = { user: response.data, jwtToken: response.headers.authorization };
            return authenticationData;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: AuthHelper.getCurrentUser()
    };

    return axios.get(baseUrl + "/users/" + id).then(handleResponse);
}

function register(user) {
    return axios.post(baseUrl + "/users/sign-up", user).then(handleResponse);
}

function handleResponse(response) {
    if(response.status === 200) {
        return response;
    } else if(response.status === 401) {
        logout();
        return window.location.reload(true);
    } else {
        const error = response.statusText;
        return Promise.reject(error);
    }
}
