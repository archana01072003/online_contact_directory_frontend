import React, { useState } from 'react'
import axios from 'axios';
const AddContact = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const userId = user.userId;
    const[contact,setContact] = useState({
        contactName : "",
        contactNumber : ""
    })
    const handleChange = (e) =>{
        const value = e.target.value;
        setContact({...contact,[e.target.name] : value});
    }
    const saveContact = (e) =>{
        e.preventDefault();
        axios.post(`http://localhost:8080/addContact/${userId}`,contact)
        .then((res)=>{
            alert("contact saved successfully");
        })
        .catch((e)=>{
            console.log("error");
        })
    }
  return (
    <>
    <form onSubmit={saveContact} className='form-container'>
        <h3>Add Contact</h3>
        <label >Contact Name  : </label>
        <input type='text' name='contactName'  onChange={(e)=>{handleChange(e)}}/><br></br>
        <label>Contact Number: </label>
        <input type='text' name='contactNumber'  onChange={(e)=>{handleChange(e)}}/><br></br>
        <button>Add</button>
    </form>
    </>
  )
}

export default AddContact