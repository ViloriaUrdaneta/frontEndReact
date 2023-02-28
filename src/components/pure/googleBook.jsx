import React from 'react';
import PropTypes from 'prop-types';
import { GoogleBook } from '../../models/googleBook.model';
import { postGoogleBook } from '../../services/axiosService'

import '../../styles/googlebook.scss';


const GoogleBookCard = ({ googleBook, triggerReset }) => {

    
    const addGoogleBook = async () => {
        await postGoogleBook(googleBook.id)
            .then((response) => {
                if(response.status === 200){
                    console.log(response.data)
                }})
            .catch((error) => {alert('error: ', error)});
        triggerReset();
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
                    <a href={googleBook.link} target='_blank' rel="noreferrer"> Google PLay </a>
                    <button onClick={addGoogleBook}>Agregar a la biblioteca</button>
                </div>
            </div>   
        </div>
    );
};


GoogleBookCard.propTypes = {
    googleBook : PropTypes.instanceOf(GoogleBook),
    triggerReset: PropTypes.func.isRequired
}


export default GoogleBookCard;
