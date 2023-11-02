
import './App.css';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Prof from './components/prof.js';

import Admin from './components/admin.js';

import Home from './components/Home';
import Student from './components/students.js';
function App() {
  return (
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/prof' element={<Prof/>} />
          <Route path='/student' element={<Student/>} />
          <Route path='/admin' element={<Admin/>} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
