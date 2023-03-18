import React from 'react';

const Register = (props) => {
    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className='modal-header'>
                        <h6 className='modal-title fw-bold'>
                            Registrarse
                        </h6>
                        <button onClick={props.onClose} className='btn-close text-end' aria-label="Close"></button>
                    </div>
                    <div className='modal-body'>
                        <form onSubmit={props.handleRegisterSubmit}>
                            <div className='m-1'>
                                <p className='form-label text-white'>
                                    Nombre
                                </p>
                                <input
                                    type='text'
                                    value={props.registerName}
                                    name='name'
                                    placeholder='name'
                                    onChange={props.handleNameChange}>
                                </input>
                            </div>
                            <div className='m-1'>
                                <p className='form-label text-white'>
                                    Correo electrónico
                                </p>
                                <input
                                    type='text'
                                    value={props.registerEmail}
                                    name='email'
                                    placeholder='email'
                                    onChange={props.handleRegisterEmailChange}>
                                </input>
                            </div>
                            <div className='m-1'>
                                <p className='form-label text-white'>
                                    Contraseña
                                </p>
                                <input
                                    type='password'
                                    value={props.registerPassword}
                                    name='password'
                                    placeholder='password'
                                    onChange={props.handleRegisterPasswordChange}>
                                </input>
                            </div>
                            <button className='btn btn-info fw-semibold mx-auto m-3'>
                                Registrarse
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
