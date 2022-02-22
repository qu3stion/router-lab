import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Search from './screens/Search';
import Random from './screens/Random';
import Error404 from './screens/Error404';
require('dotenv').config()

function App() {
  return (
    <div className="App">
      <div className="Links">
        <nav>
          <NavLink to={"/search"}>Search</NavLink>
          <NavLink to={"/random"}>Random</NavLink>
        </nav>
      </div>

      <Routes>
      <Route path="/search" element={<Search />} />
      <Route path="/random" element={<Random />} />

      <Route path="*" element={<Error404 /> } />

      </Routes>
    </div>
  );
}

export default App;
