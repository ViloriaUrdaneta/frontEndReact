import APIRequest from "../utils/config/axios.config";

export function getBookVolumes(){
    return APIRequest.get('/books/volumes');
}