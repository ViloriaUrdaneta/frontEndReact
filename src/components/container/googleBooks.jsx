import React, { useState } from 'react';
import GoogleBookCard from '../pure/googleBook';
import { getGoogle } from '../../services/axiosService';


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
            <div className='stand'>
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
                <h3>No hay libros todavía</h3>
            </div>
        )
    }


    return (
        <div>
            <div>
                <input type="text" value={search} onChange={handleInputChange} />
                <button onClick={handleClick}>Obtener datos</button>
            </div>  
            <div>
                {results}
            </div>
        </div>
    );
}

export default GoogleBooks;
