import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

const Login = () => {
  
  const [userlogin, setUserLogin] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userlogin, [name]: value });
  };

  const login = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8080/login/${userlogin.email}/${userlogin.password}`)
  .then((res) => {
    if (res.status === 200) {
      // Authentication was successful
      console.log(res.data);
      
      
      sessionStorage.setItem('user', JSON.stringify(res.data));
      // alert("User logged in successfully");
      navigate('/dashboard')
      // Redirect to a different route upon successful login
      // navigate('/dashboard');
    } else if (res.status === 401) {
      
      // Authentication failed (invalid username or password)
      alert("Invalid username and password");
      // You can also clear the input fields, if needed.
    }
  })
  .catch((error) => {
    // Handle network errors or other issues
    console.log(error);
    setUserLogin({
        email : "",
        password : ""
    })
    
    navigate("/login")
    alert("User is not logged in");
    
    
  });

  };

  return (
    <>
    <Home/>
      <form onSubmit={login} className='form-container'>
        <h3>Login</h3>
        <label>Email: </label>
        <input type='text' name="email" placeholder="Enter Your Email"   onChange={handleChange} /><br></br>
        <label>Password: </label>
        <input type='password' name='password' placeholder="Enter Your Password" onChange={handleChange} /><br />
        <button>Login</button>
      </form>

    </>
  );
};

export default Login;


















// import React, { useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// const Login = () => {
//     const[userlogin,setUserLogin] = useState({
//         email : "",
//         password : ""
//     })
//     const navigate = useNavigate();
//     const handleChange = (e)=>{
//         const value = e.target.value;
//         setUserLogin({...userlogin,[e.target.name] : value});
//     }
//     const login = (e)=>{
//         e.preventDefault();
//          axios.get(`http://localhost:8080/login/${userlogin.email}/${userlogin.password}`)
//         .then((res)=>{
//            if(res.status === 200)
//            alert("user login successfully");
//             else{
//             alert("invalid username and password");
//             }
            
//         })
//         .catch((e)=>{
//             setUserLogin({
//                 name : "",
//                 password : ""
//             })
//             navigate("/login");
//             console.log("error");
//             alert("user is not login")
            
//         })
//     }
//   return (
//     <>
//     <form onSubmit={login} className='form-container'>
//         <h3>Login</h3>
//         <label>Email : </label>
//         <input type='text' name = "email" placeholder = "Enter Your Email " onChange={(e)=>{handleChange(e)}} /><br></br>
//         <label>Password : </label>
//         <input type='password' name='password' placeholder = "Enter Your Password " onChange={(e)=>{handleChange(e)}}/><br />
//         <button>Login</button>
//     </form>
//     </>
//   )
// }

// export default Login