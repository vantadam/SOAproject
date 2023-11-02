
import './App.css';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Prof from './components/prof.js';

import Admin from './components/admin.js';

import Home from './components/Home';
import Student from './components/students.js';
import AddStudent from './components/AddStudent.js';
import AddProfessor from './components/AddProf.js';
import bg from './res/backgrnd.jpg';
function App() {
  return (
      <div className="App">
        <div className='bg'><img src={bg} className="bg" alt="background"/></div>
       
        <Router>
          <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/prof' element={<Prof/>} />
          <Route path='/student' element={<Student/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/addstudent' element={<AddStudent/>} />
          <Route path='/addprofessor' element={<AddProfessor/>} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
