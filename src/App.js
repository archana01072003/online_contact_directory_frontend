
import './App.css';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import AddContact from './Components/AddContact';
import Login from './Components/Login';
import Home from './Components/Home';
import Logout from './Components/Logout';
function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>} ></Route>
            <Route path='/addContacts' element={<AddContact/>}></Route>
            <Route path='/logout' element={<Logout/>}></Route>
        </Routes>
    </Router>
    </>
  );
  
}

export default App;
