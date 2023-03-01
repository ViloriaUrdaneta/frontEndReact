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
        <div className='container-fluid'>
            <div className='row vh-100'>
                <div className='col-12 col-sm-6 col-md-4 bookSearcher' >
                    <GoogleBooks resetState={handleReset}></GoogleBooks>
                </div>
                <div className='col-12 col-sm-6 col-md-8 library'>
                <h1 className='display-2 m-4'>Tus libros</h1>
                    <Library stateToReset={stateToReset}></Library>
                </div>
            </div>
        </div>
    );
}

export default Home;
