import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../models/book.model';

import '../../styles/book.scss';


const BookVolume = ({ book }) => {

    useEffect(() => {
        console.log('libro creado')
        return () => {
            console.log(`libro ${book.title} va a unmount`)
        };
    }, [book]);


    return (
        <div>
            <div className='book'>
                <h2 className='title'>
                    {book.title}
                </h2>
                <h4>
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
