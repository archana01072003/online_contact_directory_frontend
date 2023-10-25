import React, { useState } from 'react'
import axios from "axios";

const Signup = () => {
    const[usersignup,setUserSignup] = useState({
        name : "",
        email : "",
        password : "",
        mobileNo : ""

    })
    const handleChange = (e) =>{
        const value = e.target.value;
        setUserSignup({...usersignup,[e.target.name] : value});
    }
    const signupUser = (e)=>{
        e.preventDefault();
        
        axios.post('http://localhost:8080/signup',usersignup)
        .then((res)=>{

            alert("account created , Please login");
            setUserSignup({
                name : "",
                email : "",
                password : "",
                mobileNo : ""
            })
            
        })
        .catch((e)=>{
            console.log("error");
        })
    }
  return (
    <>
    <form onSubmit={signupUser} className='form-container'>
    <h3>Signup Form</h3>
    <label>Name :</label>
    <input type='text' name = "name" placeholder='Enter Your Name' onChange={(e)=>{handleChange(e)}}/><br></br>
    <label>Email : </label>
    <input type='text' name='email' placeholder='Enter Your Email' onChange={(e)=>{handleChange(e)}}/><br></br>
    <label>Password :</label>
    <input type='password' name='password' placeholder='Enter Your Password' onChange={(e)=>{handleChange(e)}}/><br></br>
    <label>Mobile No. :</label>
    <input type='text' name='mobileNo' placeholder='Enter Your Mobile No.' onChange={(e)=>{handleChange(e)}}/><br></br>
    <button>Signup</button>
    </form>
    </>
  )
}

export default Signup