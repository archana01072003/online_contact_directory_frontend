import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Logout = () => {
     const navigate = useNavigate();
      useEffect(()=>{
        
            // Simulate a logout action by removing the user object from sessionStorage.
            sessionStorage.removeItem('user');
           navigate('/login');
      },[])
     
  return (
   <>
   {/* <Link  to='/logout'onClick={handleLogout}>Logout</Link> */}
   </>
  )
}

export default Logout