import React from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../models/book.model';

import '../../styles/book.scss';


const BookVolume = ({ book }) => {


    return (
        <div>
            <div className='book'>
                <h2 className='title'>
                    {book.title}
                </h2>
                <h4 className='author'>
                    {book.author}
                </h4>
            </div>
        </div>
    );
};


BookVolume.propTypes = {
    book : PropTypes.instanceOf(Book)
};


export default BookVolume;
