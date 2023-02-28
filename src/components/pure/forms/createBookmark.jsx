import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { postBookmark } from '../../../services/axiosService'
//import BookmarkCard from '../bookmark';

const CreateBookmark = ({ book, triggerReset }) => {

    //const [bookmark, setBookmark] = useState([]);

    const [page, setPage] = useState('');
    const [resume, setResume] = useState('');

    const handleInputPageChange = (event) => {
        setPage(event.target.value);
    };
    const handleInputResumeChange = (event) => {
        setResume(event.target.value);
    };

    const handleClick = async () => {
        await postBookmark(page, resume, book)
            .then((response) => {
                if(response.status === 200){
                    //setBookmark(response.data)
                    console.log(response.data)
                }})
            .catch((error) => {console.log(error, 'error en postBookamrk')});
        triggerReset();
    }

    /*
    Nuevo Bootmark
    let newBookmark;
    if(bookmark !== null){
        newBookmark = (
            <div>
                <BookmarkCard bookmark={bookmark}></BookmarkCard>
            </div>
        )
    }
    */

    return (
        <div>
            <div>
                {/*newBookmark*/}
            </div>
            <div>
                <input id='inputPage' type='text' value={page} onChange={handleInputPageChange}></input>
                <input id='inputResume' type='text' value={resume} onChange={handleInputResumeChange}></input>
                <button  onClick={handleClick}> Add Bookmark</button>
            </div>
        </div>
    );
}

CreateBookmark.propTypes = {
    book: PropTypes.string,
    triggerReset: PropTypes.func.isRequired
};

export default CreateBookmark;
