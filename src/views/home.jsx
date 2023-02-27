import React, { useState } from 'react';
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
        </div>
    );
}

export default Home;
