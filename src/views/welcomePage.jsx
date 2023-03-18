import React, { useState } from 'react';
import Home from './home';
import LoginPage from './loginPage';


const WelcomePage = () => {

    const [user, setUser] = useState(sessionStorage.getItem('userToken'));

    function handleResetLogState() {
        setUser(sessionStorage.getItem('userToken'))
    }
    function handleLogOut(){
        setUser(null)
        sessionStorage.removeItem('userToken')
    }

    /*
    useEffect(() => {
        const loggedUser = sessionStorage.getItem('userToken')
        if(loggedUser){
            setUser(loggedUser);
        }
    }, [])

    let view;
    if (user !== null){
        view = <Home 
                    logOut={handleLogOut}>
                </Home>
    }else {
        view = <LoginPage 
                    logUser={handleResetLogState}
                ></LoginPage>
    }
    */

    return (
        <div>
            {
            user
                ? <Home 
                    logOut={handleLogOut}>
                </Home>
                : <LoginPage 
                    logUser={handleResetLogState}
                ></LoginPage>
            }
        </div>
    );
}

export default WelcomePage;
