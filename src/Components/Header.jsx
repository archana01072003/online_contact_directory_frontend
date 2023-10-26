import React, { useState } from 'react'
import Dashboard from './Dashboard';
import AddContact from './AddContact';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const Header = () => {
    const [authenticated, setAuthenticated] = useState(!!sessionStorage.getItem('user'));
    
    
      
  return (
    <>

          <div className='header-container'>
        <span>Online Contact Directory</span>
        
        <Link to='/logout'>Logout</Link>
        <Link to='/addContacts'>Add Contact</Link>
        <Link to='/dashboard'>Dashboard</Link>
        </div>
          

   
    </>
  )
}

export default Header