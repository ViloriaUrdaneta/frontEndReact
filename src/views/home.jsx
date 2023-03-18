/* eslint-disable no-undef */
import React, { useState } from 'react';
import GoogleBooks from '../components/container/googleBooks';
import Library from '../components/container/library'
import '../styles/home.scss';

const Home = (props) => {

    const [stateToResetLibrary, setStateToResetLibrary] = useState(false);

    function handleResetLibrary() {
        setStateToResetLibrary(prevState => !prevState);
    }

    return (
        <div className='container'>
            <button onClick={props.logOut}>
                Logout
            </button>
            <div className='row vh-100'>
                <div className='col-12 col-sm-6 col-md-9 library'>
                    <Library stateToReset={stateToResetLibrary}></Library>
                </div>
                <div className='col-12 col-sm-6 col-md-3 bookSearcher' >
                    <GoogleBooks resetStateLibrary={handleResetLibrary}></GoogleBooks>
                </div>
            </div>
        </div>
    );
}

export default Home;
