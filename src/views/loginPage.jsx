import React, {useState, useEffect} from 'react';
import { login } from '../services/axiosService.js'

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = (event) => {
        event.preventDefault();
        login(email, password)
            .then((response) => {
                if(response.status === 200){
                    setUser(response.data)
                    console.log(response.data)
                    setEmail('');
                    setPassword('');
                    sessionStorage.setItem('userToken', user);
                }})
            .catch((error) => {alert('error: ', error)})
    }

    const handleLogout = () => {
        setUser(null)
        sessionStorage.setItem('userToken', user);
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type='text'
                    value={email}
                    name='email'
                    placeholder='email'
                    onChange={({target}) => setEmail(target.value)}>
                </input>
                <input
                    type='password'
                    value={password}
                    name='password'
                    placeholder='password'
                    onChange={({target}) => setPassword(target.value)}>
                </input>
                <button>
                    Login
                </button>
            </form>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default LoginPage;
