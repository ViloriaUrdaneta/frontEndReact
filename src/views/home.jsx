import React, { useState } from 'react';
import BookmarkList from '../components/container/bookmarkList';
import GoogleBooks from '../components/container/googleBooks';
import Library from '../components/container/library'

const Home = () => {

    const [stateToReset, setStateToReset] = useState(false);

    function handleReset() {
        setStateToReset(prevState => !prevState);
    }

    return (
        <div>
            <GoogleBooks resetState={handleReset} ></GoogleBooks>
            <h1>Your Books</h1>
            <Library stateToReset={stateToReset}></Library>
            <h2>Your Bookmarks</h2>
            <BookmarkList></BookmarkList>
        </div>
    );
}

export default Home;
