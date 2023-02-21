import axios from "axios";

export default axios.create(
    {
        baseURL: 'http://localhost:3500/api',
        responseType: 'json',
        timeout: 6000
    }
)