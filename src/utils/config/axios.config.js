import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3500/api',
    responseType: 'json',
    timeout: 6000
});

const setAuthToken = () => {
    const token = sessionStorage.getItem('userToken');
    if (token) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete instance.defaults.headers.common['Authorization'];
    }
};

setAuthToken();

export { setAuthToken };

export default instance;
