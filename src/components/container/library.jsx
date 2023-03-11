import React, { useState, useEffect } from 'react';
import BookVolume from '../pure/book';
import { getBookVolumes } from '../../services/axiosService';
import '../../styles/stand.scss';
import BookFile from '../pure/bookFile';
//import BookmarksByBook from './bookmarksByBook';
import BookmarkScroll from './bookmarkScroll';
//import CreateBook from '../pure/forms/createBook';


const Library = (props) => {

    const [books, setBooks] = useState([]);
    const [bookIdSearched, setBookIdSearched] = useState('');
    
    useEffect(() => {
        function reset(){
            getBookVolumes()
                .then((response) => {
                    if(response.status === 200){
                        setBooks(response.data)
                        console.log(response.data)
                    }})
                .catch((error) => {alert('error: ', error)});
        }
        return () => {
            reset();
            console.log('se reseteo library')
        };
    }, [props.stateToReset]);

    const searchBookmarks = (bookID) => {
        setBookIdSearched((prevIdsearched) => {
            console.log(`Current value of myState: ${prevIdsearched}`);
            console.log(`New value of myState: ${bookID}`);
            return bookID
        })
        console.log('funcion searchBookmarks en library. BookId: ', bookIdSearched )
    }

    //Stand de libros
    const Stand = () => {
        return (
            <div className='stand'>
                {
                    books.map((book, index) => {
                        return (
                            <BookVolume key={index} book={book} searchBookmarksBy={searchBookmarks} bookID={''}>
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


    /*
    función traida del formulario addBook para crear nuevos libros
    function addBook(book){
        const tempBooks = [...books]
        tempBooks.push(book);
        setBooks(tempBooks);
    }*/


    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-5 books'>
                    <h1 className='display-3 m-4'>Tus libros</h1>
                    {bookStand}
                    <hr className='line'></hr>
                    <div>
                        <BookFile></BookFile>
                    </div>
                </div>
                <div className='col-7 bookmarks'>
                    <BookmarkScroll bookIdSearched={bookIdSearched} ></BookmarkScroll>
                </div>
            </div>
            {/*
            <div>
                <CreateBook add={addBook}></CreateBook>
            </div>*/}
        </div>
    );
};


export default Library;
