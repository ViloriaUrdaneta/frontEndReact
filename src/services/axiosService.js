import APIRequest from "../utils/config/axios.config";

export function getBookVolumes(){
    return APIRequest.get('/books/volumes');
}

export function getBookBy(id){
    return APIRequest.get(`/books/by/${id}`);
}

export function getBooksByUser(){
    return APIRequest.get('/books/byUser');
}

export function getBookmarks(){
    return APIRequest.get('/bookmarks');
}

export function getBookmarksByBook(id){
    return APIRequest.get(`/bookmarks/bybook/${id}`);
}

export function getBookmarksByUser(){
    return APIRequest.get('/bookmarks/byUser');
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

export function register(name, email, password){
    return APIRequest.post('/users/register', { name: name, email: email, password: password });
}

export function login(email, password){
    return APIRequest.post('/auth/login', { email: email, password: password });
}