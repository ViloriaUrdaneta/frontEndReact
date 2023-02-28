import APIRequest from "../utils/config/axios.config";

export function getBookVolumes(){
    return APIRequest.get('/books/volumes');
}

export function getBookmarks(){
    return APIRequest.get('/bookmarks');
}

export function getBookmarksByBook(id){
    return APIRequest.get(`/bookmarks/bybook/${id}`);
}

export function getGoogle(term){
    return APIRequest.post('/google', { term: term });
}

export function postGoogleBook(id){
    return APIRequest.post(`/google/${id}`);
}

export function postBookmark(page, resume, book){
    return APIRequest.post('/bookmarks', { page: page, resume: resume, book: book });
}