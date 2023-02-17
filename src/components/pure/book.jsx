import React from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../models/book.model';


const BookVolume = ({book}) => {
    return (
        <div>
            <h2>
                {book.title}
            </h2>
            <h4>
                {book.author}
            </h4>
        </div>
    );
};


BookVolume.propTypes = {
    book : PropTypes.instanceOf(Book)
};


export default BookVolume;
