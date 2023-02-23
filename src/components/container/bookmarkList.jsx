import React, { useState, useEffect } from 'react';
import BookmarkComponent from '../pure/bookmark';
import { getBookmarks } from '../../services/axiosService';

const BookmarkList = () => {

    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        getBookmarks()
        .then((response) => {
            if(response.status === 200){
                setBookmarks(response.data)
                console.log(response.data)
            }})
        .catch((error) => {alert('error: ', error)})
    }, []);

    const Bookmarks = () => {
        return (
            <div>
                {
                    bookmarks.map((bookmark, index) => {
                        return (
                            <BookmarkComponent 
                                key={index} bookmark={bookmark}>
                            </BookmarkComponent>
                        )
                    })
                }
                
            </div>
        )
    }

    let bookmarksTable;

    if(bookmarks.length > 0){
        bookmarksTable = <Bookmarks></Bookmarks>
    } else{
        bookmarksTable = (
            <div>
                <h3>No hay marcapáginas todavía</h3>
            </div>
        )
    }

    return (
        <div>
            <div>
                {bookmarksTable}
            </div>
        </div>
    );
}

export default BookmarkList;
