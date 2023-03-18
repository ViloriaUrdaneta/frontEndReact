import './App.css';
import Home from './views/home';
import LoginPage from './views/loginPage';


//import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      
      <LoginPage></LoginPage>
      <Home></Home>
      
      {/*
        {/*<Routes>
          <Route path='/' element={<Library />} />
        </Routes>*/}
    </div>
  );
}

export default App;
