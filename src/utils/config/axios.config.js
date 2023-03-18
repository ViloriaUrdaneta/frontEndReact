import axios from "axios";

const token = `Bearer ${sessionStorage.getItem('userToken')}`
/*
const setToken = newToken => {
    token = `Bearer ${token}`
}*/

export default axios.create(
    {
        baseURL: 'http://localhost:3500/api',
        responseType: 'json',
        headers: {
            Authorization: token
        },
        timeout: 6000
    }
)