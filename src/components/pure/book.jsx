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
            <div className='book' onClick={showBookmarks}>
                <h4 className='author'>
                    {book.author}
                </h4>
                <h3 className='title'>
                    {book.title}
                </h3>
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
