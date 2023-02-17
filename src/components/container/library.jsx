import React from 'react';
import { Book } from '../../models/book.model';
import BookVolume from '../pure/book';


const Library = () => {


    const defaultBook = new Book('Ejemplo', 'John Doe');

    return (
        <div>
            <BookVolume book={defaultBook}></BookVolume>
        </div>
    );
};




export default Library;
