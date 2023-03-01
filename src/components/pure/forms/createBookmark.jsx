import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { postBookmark } from '../../../services/axiosService'
//import BookmarkCard from '../bookmark';
import '../../../styles/bookmark.scss';

const CreateBookmark = ({ book, triggerReset }) => {

    //const [bookmark, setBookmark] = useState([]);

    const [page, setPage] = useState('');
    const [resume, setResume] = useState('');

    const handleInputPageChange = (event) => {
        setPage(event.target.value);
    };
    const handleInputResumeChange = (event) => {
        setResume(event.target.value);
    };

    const handleClick = async () => {
        await postBookmark(page, resume, book)
            .then((response) => {
                if(response.status === 200){
                    //setBookmark(response.data)
                    console.log(response.data)
                }})
            .catch((error) => {console.log(error, 'error en postBookamrk')});
        triggerReset();
    }

    /*
    Nuevo Bootmark
    let newBookmark;
    if(bookmark !== null){
        newBookmark = (
            <div>
                <BookmarkCard bookmark={bookmark}></BookmarkCard>
            </div>
        )
    }
    */

    return (
        <div>
            <div className='card m-2 bookmarkForm text-center'>
                <div className='card-header fw-bold bookmarkFormHeader'>
                    Agregar marcapáginas
                </div>
                <div className='card-body'>
                    <div className='row m-1'>
                        <p className='form-label col-auto'>
                            ¿En qué página vas?
                        </p>
                        <input id='inputPage' type='text' value={page} onChange={handleInputPageChange} className='form-control col auto'></input>
                    </div>
                    <p className='form-label mt-3'>
                        Resumen de la lectura
                    </p>
                    <textarea  id='inputResume' type='text' value={resume} onChange={handleInputResumeChange} className='form-control mb-4' rows="3"></textarea>

                    <button  onClick={handleClick} className='btn btn-secondary '>Agregar marcapáginas</button>
                </div>
            </div>
        </div>
    );
}

CreateBookmark.propTypes = {
    book: PropTypes.string,
    triggerReset: PropTypes.func.isRequired
};

export default CreateBookmark;
