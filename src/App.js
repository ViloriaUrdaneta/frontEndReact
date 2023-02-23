import './App.css';
import BookmarkList from './components/container/bookmarkList';
//import { Routes, Route } from 'react-router-dom';
//import Library from './components/container/library.jsx';



function App() {
  return (
    <div className="App">

      <BookmarkList></BookmarkList>
      {/*<Library></Library>}
        {/*<Routes>
          <Route path='/' element={<Library />} />
        </Routes>*/}
    </div>
  );
}

export default App;
