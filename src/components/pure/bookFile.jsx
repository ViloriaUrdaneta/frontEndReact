import React from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../models/book.model';

const BookFile = () => {
    return (
        <div>
            <h1>bookfile</h1>
        </div>
    );
}

BookFile.propTypes = {
    book : PropTypes.instanceOf(Book),
};


export default BookFile;
