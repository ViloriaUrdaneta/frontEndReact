import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../models/book.model';
import { getBookBy } from '../../services/axiosService';
import AddBookmark from './modals/addBookmark';

const BookFile = ({ bookIdSearched, resetStateBookmarks }) => {

    const [bookInfo, setBookInfo] = useState({});
    const book = bookIdSearched;


    useEffect(() => {
        if(bookIdSearched !== ''){
            getBookBy(bookIdSearched)
                .then((response) => {
                    if(response.status === 200){
                        setBookInfo(response.data)
                        console.log(response.data)
                    }})
                .catch((error) => {console.log(error, 'boobkId nulo')})
        }
    }, [bookIdSearched]);

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <h1>bookfile</h1>
            <div>
                <p className='fs-7 fw-bold text-uppercase'>
                    {bookInfo.title}
                </p>
                <p className='bookId'>
                    {bookInfo.id}
                </p>
                <button onClick={handleOpenModal} className='btn btn-outline-danger btn-sm'>
                    Agregar nota
                </button>
            </div>
            {openModal && (
                <AddBookmark 
                    onClose={handleCloseModal} 
                    book={book} 
                    triggerReset={resetStateBookmarks} 
                    setOpenModal={setOpenModal}>
                </AddBookmark>)}
        </div>
    );
}

BookFile.propTypes = {
    bookIdSearched: PropTypes.string,
    resetStateBookmarks: PropTypes.func.isRequired,
};


export default BookFile;
