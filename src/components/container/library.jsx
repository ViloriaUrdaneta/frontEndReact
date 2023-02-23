import React, { useState, useEffect } from 'react';
import BookVolume from '../pure/book';
import { getBookVolumes } from '../../services/axiosService';
import '../../styles/stand.scss';
//import CreateBook from '../pure/forms/createBook';


const Library = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBookVolumes()
        .then((response) => {
            if(response.status === 200){
                setBooks(response.data)
                console.log(response.data)
            }})
        .catch((error) => {alert('error: ', error)})
    }, []);

    const Stand = () => {
        return (
            <div className='stand'>
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


    /* función traida del formulario addBook para crear nuevos libros
    function addBook(book){
        const tempBooks = [...books]
        tempBooks.push(book);
        setBooks(tempBooks);
    }*/


    return (
        <div>
            <div>
                {bookStand}
            </div>
            {/*<div>
                <CreateBook add={addBook}></CreateBook>
            </div>*/}
        </div>
    );
};


export default Library;
