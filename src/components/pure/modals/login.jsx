import React from 'react';

const Login = (props) => {
    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className='modal-header'>
                        <h6 className='modal-title fw-bold'>
                            Login
                        </h6>
                        <button onClick={props.onClose} className='btn-close text-end' aria-label="Close"></button>
                    </div>
                    <div className='modal-body'>
                        <form onSubmit={props.handleLoginSubmit}>
                            <div className='m-1'>
                                <p className='form-label text-white'>
                                    Correo electrónico
                                </p>
                                <input
                                    type='text'
                                    value={props.loginEmail}
                                    name='email'
                                    placeholder='email'
                                    onChange={props.handleLoginEmail}>
                                </input>
                            </div>
                            <div className='m-1'>
                                <p className='form-label text-white'>
                                    Contraseña
                                </p>
                                <input
                                    type='password'
                                    value={props.loginPassword}
                                    name='password'
                                    placeholder='password'
                                    onChange={props.handleLoginPassword}>
                                </input>
                            </div>
                            <button className='btn btn-info fw-semibold mx-auto m-3'>
                                Ingresar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
