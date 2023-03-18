import React, { useState } from 'react';
import Login from '../components/pure/modals/login.jsx';
import Register from '../components/pure/modals/register.jsx';
import { login, register } from '../services/axiosService.js'
import { setAuthToken } from '../utils/config/axios.config.js';

const LoginPage = (props) => {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerName, setRegisterName] = useState('');

    const [opeRegisterModal, setOpenRegisterModal] = useState(false);
    const handleOpenRegisterModal = () => {
        setOpenRegisterModal(true);
    };
    const handleCloseRegisterModal = () => {
        setOpenRegisterModal(false);
    };

    const [opeLoginModal, setOpenLoginModal] = useState(false);
    const handleOpenLoginModal = () => {
        setOpenLoginModal(true);
    };
    const handleCloseLoginModal = () => {
        setOpenLoginModal(false);
    };
    
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

    const handleRegister = (event) => {
        event.preventDefault();
        register(registerName, registerEmail, registerPassword)
            .then((response) => {
                if(response.status === 200){
                    console.log(response.data)
                    setTimeout(() => {
                        setOpenRegisterModal(false);
                    }, 1000)
                    
                }
            })
        .catch((error) => {alert('error: ', error)})
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <button onClick={handleOpenRegisterModal} className='btn btn-info btn-lg col-2 m-4'>
                        Registrarse
                    </button>

                    <button onClick={handleOpenLoginModal} className='btn btn-info btn-lg col-2 m-4'>
                        Ingresar
                    </button>
                </div>
            </div>
            {
                opeRegisterModal && (
                    <Register
                        onClose={handleCloseRegisterModal}
                        registerName={registerName}
                        registerEmail={registerEmail}
                        registerPassword={registerPassword}
                        handleNameChange={({target}) => setRegisterName(target.value)}
                        handleRegisterEmailChange={({target}) => setRegisterEmail(target.value)}
                        handleRegisterPasswordChange={({target}) => setRegisterPassword(target.value)}
                        handleRegisterSubmit={handleRegister}>
                    </Register>
                )
            }
            {
                opeLoginModal && (
                    <Login
                        onClose={handleCloseLoginModal}
                        loginEmail={loginEmail}
                        loginPassword={loginPassword}
                        handleLoginEmail={({target}) => setLoginEmail(target.value)}
                        handleLoginPassword={({target}) => setLoginPassword(target.value)}
                        handleLoginSubmit={handleLogin}>+
                    </Login>
                )
            }
            
            
        </div>
    );
}

export default LoginPage;
