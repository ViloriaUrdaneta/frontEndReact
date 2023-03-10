import React from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../models/book.model';

import '../../styles/book.scss';


const BookVolume = ({ book, searchBookmarksBy, BookID }) => {

    function showBookmarks(){
        BookID = book.id;
        searchBookmarksBy(BookID);
    }

    return (
        <div>
            <div className='book text-wrap' onClick={showBookmarks}>
                <p className='author h6 fw-bold'>
                    {book.author}
                </p>
                <p className='title h6 text-uppercase'>
                    {book.title}
                </p>
                <p className='bookId'>
                    {book.id}
                </p>
            </div>
        </div>
    );
};


BookVolume.propTypes = {
    book : PropTypes.instanceOf(Book),
    searchBookmarksBy: PropTypes.func,
};


export default BookVolume;
