import React, { useState } from 'react';

const CreateBook = () => {

    const initialBook = [
        {
            title: '',
            author: ''
        }
    ]

    const [books, setBooks] = useState(initialBook);

    return (
        <div>
            
        </div>
    );
}

export default CreateBook;
