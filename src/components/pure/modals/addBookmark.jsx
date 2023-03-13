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
            <div className="modal-content">
                <div className='text-center'>
                    <div className='card-header fw-bold'>
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
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}


export default AddBookmark;
