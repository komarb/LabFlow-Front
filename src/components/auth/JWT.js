
export function getRole() {
    const jwtDecode = require('jwt-decode');
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const token = jwtDecode(currentUser.accessToken);
    return token.role
}