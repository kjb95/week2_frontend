import {AUTHENTICATED_USERNAME_SESSION_KEY, JWT_TOKEN} from "../const/Const";

export function logout() {
    sessionStorage.removeItem(AUTHENTICATED_USERNAME_SESSION_KEY);
    sessionStorage.removeItem(JWT_TOKEN);
    window.location.href = "/home";
}