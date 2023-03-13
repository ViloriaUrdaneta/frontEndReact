import React, { useState, useEffect } from 'react';
import BookmarkList from './bookmarkList';
//import BookmarksByBook from './bookmarksByBook';
import PropTypes from 'prop-types';
import { getBookmarksByBook } from '../../services/axiosService';
import BookmarkCard from '../pure/bookmark';

const BookmarkScroll = ({ bookIdSearched, restartState }) => {

    const [bookmarksByBook, setBookmarksByBook] = useState([]);

    useEffect(() => {
        if(bookIdSearched !== ''){
            getBookmarksByBook(bookIdSearched)
            .then((response) => {
                if(response.status === 200){
                    setBookmarksByBook(response.data)
                    console.log(response.data)
                }})
            .catch((error) => {console.log(error, 'boobkId nulo')})
        }
    }, [bookIdSearched, restartState]);

    const BookmarksByBook = () => {
        return (
            <div>
                {
                    bookmarksByBook.map((bookmark, index) => {
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

    let scroll;

    if(bookmarksByBook.length > 0){
        scroll = (
            <div>
                <p className='h3 m-3 text-light fw-normal'>Tus notas</p>
                <BookmarksByBook></BookmarksByBook>
            </div>
        )
    } else if(bookmarksByBook.length === 0 && bookIdSearched === '') {
        scroll = (
            <div>
                <p className='h3 m-3 text-light fw-normal'>Tus notas</p>
                <BookmarkList></BookmarkList>
            </div>
        )
    } else if(bookmarksByBook.length === 0 && bookIdSearched !== ''){
        scroll = (
            <div>
                <h6 className='h3 m-3 text-light fw-normal'>No hay marcapáginas para este libro todavía</h6>
            </div>
        )
    }
    

    return (
        <div>
            {scroll}
        </div>
    );
}

BookmarkScroll.propTypes = {
    bookIdSearched: PropTypes.string,
    restartState: PropTypes.func
};

export default BookmarkScroll;
