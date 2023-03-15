import React from 'react';
import PropTypes from 'prop-types';
import { GoogleBook } from '../../models/googleBook.model';
import { postGoogleBook } from '../../services/axiosService'

import '../../styles/googlebook.scss';


const GoogleBookCard = ({ googleBook, triggerResetLibrary, resetSearch }) => {

    
    const addGoogleBook = async () => {
        await postGoogleBook(googleBook.id)
            .then((response) => {
                if(response.status === 200){
                    console.log(response.data)
                }})
            .catch((error) => {alert('error: ', error)});
        triggerResetLibrary();
        resetSearch();
    }


    return (
        <div>
            <div className='card googleBook text-white'>
                <img src={googleBook.thumbnail} alt='' className='googleThumbnail rounded mx-auto'/>
                <div className='card-body infoBook border-light'>
                    <p className='card-title h5'>
                        {googleBook.title}
                    </p>
                    <p className='card-text'>
                        {googleBook.authors}
                    </p>
                    <div className='container'>
                        <div className='row'>
                            <button onClick={addGoogleBook} className='btn btn-info btn-sm col-6'>Agregar </button>
                            <a href={googleBook.link} target='_blank' rel="noreferrer" className='card-link link-danger col-6'>Google Play</a>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    );
};


GoogleBookCard.propTypes = {
    googleBook : PropTypes.instanceOf(GoogleBook),
    triggerResetLibrary: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired
}


export default GoogleBookCard;
