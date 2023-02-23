import React from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../models/book.model';

import '../../styles/book.scss';


const BookVolume = ({ book }) => {


    return (
        <div>
            <div className='book'>
                <h4 className='author'>
                    {book.author}
                </h4>
                <h3 className='title'>
                    {book.title}
                </h3>
                
            </div>
        </div>
    );
};


BookVolume.propTypes = {
    book : PropTypes.instanceOf(Book)
};


export default BookVolume;
