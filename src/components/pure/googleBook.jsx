import React from 'react';
import PropTypes from 'prop-types';
import { GoogleBook } from '../../models/googleBook.model';
import { postGoogleBook } from '../../services/axiosService'

import '../../styles/book.scss';


const GoogleBookCard = ({ googleBook }) => {

    
    const addGoogleBook = () => {
        postGoogleBook(googleBook.id)
            .then((response) => {
                if(response.status === 200){
                    console.log(response.data)
                }})
            .catch((error) => {alert('error: ', error)})
    }

    return (
        <div>
            <div className='googleBook'>
                <img src={googleBook.thumbnail} alt='' className='googleThumbnail'/>
                <div>
                    <h4 className='googleTitle'>
                        {googleBook.title}
                    </h4>
                    <h3>
                        {googleBook.authors}
                    </h3>
                    <a href={googleBook.link}> Google PLay </a>
                    <button onClick={addGoogleBook}>Agregar a la biblioteca</button>
                </div>
            </div>   
        </div>
    );
};


GoogleBookCard.propTypes = {
    googleBook : PropTypes.instanceOf(GoogleBook)
};


export default GoogleBookCard;
