import React, { useState, useEffect } from 'react';
import { getBookmarksByBook } from '../../services/axiosService';
import BookmarkCard from '../pure/bookmark';
import PropTypes from 'prop-types';

const BookmarksByBook = ({ bookIdSearched }) => {

    const [bookmarks, setBookmarks] = useState([]);
    

    useEffect(() => {
        getBookmarksByBook(bookIdSearched)
        .then((response) => {
            if(response.status === 200){
                setBookmarks(response.data)
                console.log(response.data)
            }})
        .catch((error) => {console.log(error, 'boobkId nulo')})
    }, [bookIdSearched]);

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
                <h3>No hay marcapáginas para este libro todavía</h3>
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

BookmarksByBook.propTypes = {
    bookIdSearched: PropTypes.string
};



export default BookmarksByBook;
