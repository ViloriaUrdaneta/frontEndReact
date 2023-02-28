import React, { useState } from 'react';
import GoogleBooks from '../components/container/googleBooks';
import Library from '../components/container/library'
import '../styles/home.scss';

const Home = () => {

    const [stateToReset, setStateToReset] = useState(false);

    function handleReset() {
        setStateToReset(prevState => !prevState);
    }

    return (
        <div className='home'>
            <div className='bookSearcher'>
                <GoogleBooks resetState={handleReset}></GoogleBooks>
            </div>
            <div className='library'>
            <h1>Your Books</h1>
            <Library stateToReset={stateToReset}></Library>
            </div>
        </div>
    );
}

export default Home;
