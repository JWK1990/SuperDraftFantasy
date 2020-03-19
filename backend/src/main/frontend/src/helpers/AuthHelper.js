class AuthHelper {

    getCurrentUser() {
        let user = JSON.parse(localStorage.getItem('user'));

        if (user && user.token) {
            return { 'Authorization': 'Bearer ' + user.token };
        } else {
            return {};
        }
    }

}

export default new AuthHelper();
