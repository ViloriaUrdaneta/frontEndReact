import React, { useState, useEffect } from 'react';
import GoogleBookCard from '../pure/googleBook';
import { getGoogle } from '../../services/axiosService';

const GoogleBooks = () => {

    const [googleBooks, setGoogleBooks] = useState([]);

    useEffect(() => {
        getGoogle()
        .then((response) => {
            if(response.status === 200){
                setGoogleBooks(response.data)
                console.log(response.data)
            }})
        .catch((error) => {alert('error: ', error)})
    }, []);

    const GoogleBooksCards = () => {
        return (
            <div className='stand'>
                {
                    googleBooks.map((googleBook, index) => {
                        return (
                            <GoogleBookCard key={index} googleBook={googleBook}>
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
                {results}
            </div>
        </div>
    );
}

export default GoogleBooks;
