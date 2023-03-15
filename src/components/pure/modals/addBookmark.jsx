import React, { useState } from 'react';
import '../../../styles/bookmark.scss';
import { postBookmark } from '../../../services/axiosService'

const AddBookmark = ({ onClose, book, triggerReset, setOpenModal }) => {

    const [page, setPage] = useState('');
    const [resume, setResume] = useState('');

    const handleInputPageChange = (event) => {
        setPage(event.target.value);
    };
    const handleInputResumeChange = (event) => {
        setResume(event.target.value);
    };

    console.log(book)
    const handleClick = async () => {
        await postBookmark(page, resume, book)
            .then((response) => {
                if(response.status === 200){
                    console.log(response.data)
                }})
            .catch((error) => {console.log(error, 'error en postBookamrk')});
        triggerReset();
        setOpenModal(false);
    }

    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className='modal-header'>
                        <h6 className='modal-title fw-bold'>
                            Agregar marcapáginas
                        </h6>
                        <button onClick={onClose} className='btn-close text-end' aria-label="Close"></button>
                    </div>
                    <div className='modal-body'>
                        <div className='m-1'>
                            <p className='form-label text-white'>
                                ¿En qué página vas?
                            </p>
                            <input id='inputPage' type='text' value={page} onChange={handleInputPageChange} className='form-control'></input>
                        </div>
                            <p className='form-label mt-3 text-white'>
                                Resumen de la lectura
                            </p>
                            <textarea  id='inputResume' type='text' value={resume} onChange={handleInputResumeChange} className='form-control mb-4' rows="3"></textarea>
                            <button  onClick={handleClick} className='btn btn-info fw-semibold mx-auto'>Agregar nota</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AddBookmark;
