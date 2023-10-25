import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import AddContact from './AddContact';
const Home = () => {
  return (
    <Router>
        <Routes>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>} ></Route>
            <Route path='/addContacts' element={<AddContact/>}></Route>
        </Routes>
    </Router>
  )
}

export default Home