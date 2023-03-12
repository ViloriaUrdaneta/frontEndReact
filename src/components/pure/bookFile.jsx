import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../models/book.model';
import { getBookBy } from '../../services/axiosService';

const BookFile = ({ bookIdSearched }) => {

    const [book, setBook] = useState({});

    useEffect(() => {
        if(bookIdSearched !== ''){
            getBookBy(bookIdSearched)
            .then((response) => {
                if(response.status === 200){
                    setBook(response.data)
                    console.log(response.data)
                }})
            .catch((error) => {console.log(error, 'boobkId nulo')})
        }
    }, [bookIdSearched]);


    return (
        <div>
            <h1>bookfile</h1>
            <div>
                <p className='title fs-7 fw-bold text-uppercase'>
                    {book.title}
                </p>
                <p className='bookId'>
                    {book.id}
                </p>
            </div>
        </div>
    );
}

BookFile.propTypes = {
    bookIdSearched: PropTypes.string
};


export default BookFile;
