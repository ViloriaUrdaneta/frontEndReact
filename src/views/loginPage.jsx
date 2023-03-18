import React, { useState } from 'react';
import { login, register } from '../services/axiosService.js'
import { setAuthToken } from '../utils/config/axios.config.js';

const LoginPage = (props) => {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [name, setName] = useState('');
    
    const handleLogin = (event) => {
        event.preventDefault();
        login(loginEmail, loginPassword)
            .then((response) => {
                if(response.status === 200){
                    console.log(response.data)
                    sessionStorage.setItem('userToken', response.data);
                    setLoginEmail('');
                    setLoginPassword('');
                    setAuthToken();
                    props.logUser();
                }})
            .catch((error) => {alert('error: ', error)})
    }

    const handleLogout = () => {
        //setUser(null)
        //sessionStorage.setItem('userToken', user);
    }

    const handleRegister = (event) => {
        event.preventDefault();
        register(name, registerEmail, registerPassword)
            .then((response) => {
                if(response.status === 200){
                    console.log(response.data)
                }
            })
        .catch((error) => {alert('error: ', error)})
    }

    return (
        <div>
            <div>
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
                    <input
                        type='text'
                        value={name}
                        name='name'
                        placeholder='name'
                        onChange={({target}) => setName(target.value)}>
                    </input>
                    <input
                        type='text'
                        value={registerEmail}
                        name='email'
                        placeholder='email'
                        onChange={({target}) => setRegisterEmail(target.value)}>
                    </input>
                    <input
                        type='password'
                        value={registerPassword}
                        name='password'
                        placeholder='password'
                        onChange={({target}) => setRegisterPassword(target.value)}>
                    </input>
                    <button>
                        Register
                    </button>
                </form>
            </div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type='text'
                    value={loginEmail}
                    name='email'
                    placeholder='email'
                    onChange={({target}) => setLoginEmail(target.value)}>
                </input>
                <input
                    type='password'
                    value={loginPassword}
                    name='password'
                    placeholder='password'
                    onChange={({target}) => setLoginPassword(target.value)}>
                </input>
                <button>
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;
