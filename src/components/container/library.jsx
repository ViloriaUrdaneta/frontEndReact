import React, { useState, useEffect } from 'react';
import { Book } from '../../models/book.model';
import BookVolume from '../pure/book';
import CreateBook from '../pure/forms/createBook';


const Library = () => {

    const defaultBook = new Book('Ejemplo', 'John Doe');


    const [books, setBooks] = useState([defaultBook]);
   // const [loading, setLoading] = useState(true);


    useEffect(() => {
        console.log('Modificacion de library');
        //setLoading(false);
        return () => {
            console.log('Modificacion de library, va a desaparecer')
        };
    }, [books]);

    function addBook(book){
        const tempBooks = [...books]
        tempBooks.push(book);
        setBooks(tempBooks);
    }

    const Stand = () => {
        return (
            <div>
                {
                    books.map((book, index) => {
                        return (
                            <BookVolume key={index} book={book}>
                            </BookVolume>
                        )
                    })
                }
                
            </div>
        )
    }

    let bookStand;

    if(books.length > 0){
        bookStand = <Stand></Stand>
    } else{
        bookStand = (
            <div>
                <h3>No hay libros todavía</h3>
            </div>
        )
    }


    return (
        <div>
            <div>
                {bookStand}
            </div>
            <div>
                <CreateBook add={addBook}></CreateBook>
            </div>
        </div>
    );
};




export default Library;
