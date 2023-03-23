import { useReducer, createContext, useEffect } from 'react';
//import { decodeToken } from 'react-jwt';

export const AuthContext = createContext();
const token = sessionStorage.getItem('userToken');

const initialState = {
    token: null || token,
    error: null,
};

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, token: action.payload};
        case 'LOGOUT':
            return { ...state, token: null};
        default:
            return state;  
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        if(!token){
            return;
        }
        dispatch({ type: 'LOGIN', payload: token });
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    );
};