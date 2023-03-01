import React from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../models/book.model';

import '../../styles/book.scss';


const BookVolume = ({ book, searchBookmarksBy, BookID }) => {

    function showBookmarks(){
        BookID = book.id;
        searchBookmarksBy(BookID);
        //setBookIdSearched(book.id);
        console.log('funcion showBookmarks en BookVolume, BookId: ',book.id )
    }

    return (
        <div>
            <div className='book text-wrap book-action' onClick={showBookmarks}>
                <p className='author text-end fs-6 fw-bold w-10 h-20 '>
                    {book.author}
                </p>
                <h6 className='title text-start fw-bold text-uppercase w-10 h-20 '>
                    {book.title}
                </h6>
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
