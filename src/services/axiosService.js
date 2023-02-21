import APIRequest from "../utils/config/axios.config";

export function getBooks(){
    return APIRequest.get('/books');
}