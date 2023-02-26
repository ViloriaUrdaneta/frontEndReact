import React from 'react';
import GoogleBooks from '../components/container/googleBooks';
import Library from '../components/container/library'

const Home = () => {
    return (
        <div>
            <GoogleBooks></GoogleBooks>
            <h1>Your Books</h1>
            <Library></Library>
        </div>
    );
}

export default Home;
