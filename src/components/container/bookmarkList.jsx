import React, { useState, useEffect } from 'react';
import BookmarkCard from '../pure/bookmark';
import { getBookmarksByUser } from '../../services/axiosService';

const BookmarkList = () => {

    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        getBookmarksByUser()
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
                            <BookmarkCard 
                                key={index} bookmark={bookmark}>
                            </BookmarkCard>
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
                <h3 className='text-white'>No hay marcapáginas todavía</h3>
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
