import React, { useState } from 'react';
import GoogleBookCard from '../pure/googleBook';
import { getGoogle } from '../../services/axiosService';
import '../../styles/bookSearcher.scss'

const GoogleBooks = (props) => {

    const [googleBooks, setGoogleBooks] = useState([]);
    const [search, setSearch] = useState('');

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleClick = () => {
        getGoogle(search)
            .then((response) => {
                if(response.status === 200){
                    setGoogleBooks(response.data)
                    console.log(response.data)
                }})
            .catch((error) => {alert('error: ', error)})
        }


    const GoogleBooksCards = () => {
        return (
            <div>
                {
                    googleBooks.map((googleBook, index) => {
                        return (
                            <GoogleBookCard 
                                key={index} 
                                googleBook={googleBook} 
                                triggerResetLibrary={props.resetStateLibrary} 
                                resetSearch={resetSearch}>
                            </GoogleBookCard>
                        )
                    })
                }   
            </div>
        )
    }

    const resetSearch = () => {
        setSearch('');
        setGoogleBooks([]);
    }

    let results;

    if(googleBooks.length > 0){
        results = <GoogleBooksCards></GoogleBooksCards>
    } else{
        results = (
            <div>
            </div>
        )
    }


    return (
        <div className='searcher container'>
            <h3 className='h4 mt-3 text-light fw-normal' onClick={resetSearch}>Buscar en Google Books</h3>
            <div className='row'>
                <div className='input-group searcherInput mb-2'>
                    <input type="text" value={search} onChange={handleInputChange} className='form-control' />
                    <button onClick={handleClick} className='btn btn-danger'>Buscar</button>
                </div>  
                <div className='results'>
                    {results}
                </div>
            </div>
        </div>
    );
}

export default GoogleBooks;
