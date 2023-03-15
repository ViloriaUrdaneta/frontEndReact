import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../models/book.model';
import { getBookBy } from '../../services/axiosService';
import AddBookmark from './modals/addBookmark';

import '../../styles/bookfiles.scss';

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

    const ThumbnailFile = () => {
        return (
            <div className='bookfilecards'>
                <div className='card'>
                    <div className='row g-0'>
                            <div className='col-md-4'>
                                <img src={bookInfo.thumbnail} alt='' className='googleThumbnail img-fluid rounded'/>
                            </div>
                            <div className='col-md-8'>
                                <div className='card-body'>
                                    <h4 className='card-title'>
                                        {bookInfo.title}
                                    </h4>
                                    <h6 className='card-text'>
                                        {bookInfo.authorName}
                                    </h6>
                                    
                                </div>
                            </div>
                            <p className='card-body'>
                                        {bookInfo.description}
                                    </p>
                            <div className='text-center'>
                                <div className='card-footer'>
                                    <button onClick={handleOpenModal} className='btn btn-info btn-sm'>
                                        Agregar nota
                                    </button>
                                </div>
                            </div>
                        </div>
                    <p className='bookId'>
                        {bookInfo.id}
                    </p>
                </div>
            </div>
        )
    }
    const NoThumbnailFile = () => {
        return (
            <div className='card'>        
                <div className='card-body'>
                    <h4 className='card-title'>
                        {bookInfo.title}
                    </h4>
                    <h6 className='card-text'>
                        {bookInfo.authorName}
                    </h6>
                </div>
                <div className='text-center'>
                    <div className='card-footer'>
                        <button onClick={handleOpenModal} className='btn btn-info btn-sm'>
                            Agregar nota
                        </button>
                    </div>
                </div>
                <p className='bookId'>
                    {bookInfo.id}
                </p>
            </div>
        )
    }

    let file;
    if(bookInfo.thumbnail){
        file = <ThumbnailFile></ThumbnailFile>
    } else{
        file = <NoThumbnailFile></NoThumbnailFile>
    }

    return (
        <div>
            <div>
                { file }
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
