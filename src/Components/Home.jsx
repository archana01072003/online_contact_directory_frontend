import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  
  return (
    <>
    
        <div className='header-container'>
        <span>Online Contact Directory</span>
        <Link to='/signup'>SignUP</Link>
        <Link to='/login'>Login</Link>
        
        </div>
     
    </>
  )
}

export default Home