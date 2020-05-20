import Auth from "../api/Auth";
import API from "../api/API";

class AuthService {
    login(username, password) {
        return Auth.post('/signin', {           //TODO: Refresh token
            username,
            password
        }).then(response => {
            console.log(response.data);
            if(response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data
        })
    }

    logout() {
        localStorage.removeItem('user')
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();