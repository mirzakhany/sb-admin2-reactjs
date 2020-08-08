import axios from 'axios';
import {configs} from 'services/Network/configs';

const BASE_AUTH_URL = configs.API_URL + "/auth"

// Auth service is responsible for auth login, logout and save session
const AuthService = {
    login(email, password) {
        return axios.post(
            BASE_AUTH_URL + "/login",
            {
                email: email,
                password
            }
        ).then((res) =>{
            if (res.status === 200) {
                localStorage.setItem("user", JSON.stringify(res.data))
            }
            return {
                status: res.status,
                ...res.data
            }
        },(error) => {
           return {
               status: error.response.status,
               error: error
           }
        })
    },
    mockLogin(email, password) {
        const mockUserData = {
            status: 200,
            email: email,
            firstname: "mohsen",
            lastname: "mirzakhani",
            accessToken: "this-is-a-fake-access-token"
        }

        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                if (email === "mohsen@gmail.com" && password === "qwer1234"){
                    localStorage.setItem("user", JSON.stringify(mockUserData))
                    return resolve(mockUserData)
                }else{
                    return resolve({status: 403, error: "Authorization failed"})
                }
            }, 150)
        })
    },
    isAuthenticated(){
        return localStorage.getItem("user") !== null
    },
    forgotPassword(email){
        return axios.post(
            BASE_AUTH_URL + "/forgot-password",
            {email: email}
        ).then((res) =>{
            return {
                status: res.status,
                ...res.data
            }
        },(error) => {
            return {
                status: error.response.status,
                error: error
            }
        })
    },
    logout() {
        localStorage.removeItem("user");
    },
    getCurrentUser() {
        return AuthService.isAuthenticated() ? JSON.parse(localStorage.getItem("user")) : null;
    },
    getAuthHeader() {
        if (AuthService.isAuthenticated()) {
            return { Authorization: `${configs.BEARER_PARAM} ${AuthService.getCurrentUser().accessToken}` };
        }
        return {}
    }
};

export default AuthService;
