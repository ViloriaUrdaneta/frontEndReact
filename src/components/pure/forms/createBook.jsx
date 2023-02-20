import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Book } from '../../../models/book.model';

const CreateBook = ({add}) => {

    const titleRef = useRef('');
    const authorRef = useRef('');

    function addBook(e){
        e.preventDefault();
        const newBook = new Book(
            titleRef.current.value,
            authorRef.current.value,
        );
        add(newBook);
    }

    return (
        <form onSubmit={addBook}>
            <div>
                <input ref={titleRef} id='inputTitle' type='text' required></input>
                <input ref={authorRef} id='inputAuthor' type='text' required></input>
                <button type='submit'> Add </button>
            </div>
        </form>
    );
}

CreateBook.propTypes = {
    add: PropTypes.func.isRequired
}

export default CreateBook;
