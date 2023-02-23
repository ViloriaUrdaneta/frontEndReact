import APIRequest from "../utils/config/axios.config";

export function getBookVolumes(){
    return APIRequest.get('/books/volumes');
}

export function getBookmarks(){
    return APIRequest.get('/bookmarks');
}

export function getBookmarkByBook(){
    return APIRequest.get('/bookmarks/bybook/:bookId');
}