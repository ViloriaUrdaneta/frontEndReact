import React, { useState, useEffect } from 'react';
import { Book } from '../../models/book.model';
import BookVolume from '../pure/book';


const Library = () => {

    const defaultBook = new Book('Ejemplo', 'John Doe');


    const [books, setBooks] = useState(defaultBook);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        console.log('Modificacion de library');
        setLoading(false);
        return () => {
            console.log('Modificacion de library, va a desaparecer')
        };
    }, [books]);


    return (
        <div>
            <BookVolume book={defaultBook}></BookVolume>
        </div>
    );
};




export default Library;
