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
                            <GoogleBookCard key={index} googleBook={googleBook} triggerReset={props.resetState}>
                            </GoogleBookCard>
                        )
                    })
                }   
            </div>
        )
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
            <div className='row'>
                <div className='input-group searcherInput'>
                    <input type="text" value={search} onChange={handleInputChange} className='form-control' />
                    <button onClick={handleClick} className='btn btn-danger'>Buscar libro</button>
                </div>  
                <div>
                    {results}
                </div>
            </div>
        </div>
    );
}

export default GoogleBooks;
