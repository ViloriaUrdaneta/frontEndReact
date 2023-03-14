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
            <div className='card googleBook  text-white'>
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
                            <button onClick={addGoogleBook} className='btn btn-info btn-sm col-6 fw-bold'>Agregar </button>
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


/*
<div className='card googleBook'>
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <img src={googleBook.thumbnail} alt='' className='googleThumbnail img-fluid'/>
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h4 className='card-title'>
                                {googleBook.title}
                            </h4>
                            <h6 className='card-text'>
                                {googleBook.authors}
                            </h6>
                            <button onClick={addGoogleBook} className='btn btn-outline-danger btn-sm'>Agregar a la biblioteca</button>
                            <br></br>
                            <a href={googleBook.link} target='_blank' rel="noreferrer" className='card-link link-primary'> Ir a Google PLay </a>
                        </div>
                    </div>
                </div>
            </div> */