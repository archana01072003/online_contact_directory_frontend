import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    let userId = null;
    const[contact,setContact] = useState([]);
    const[loading,setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        
        if(user != null) {
            userId = user.userId;
        } else {
            navigate('/login');
        }

        const fetchData = async()=>{
            setLoading(true);
            try{
                const response = await axios.get(`http://localhost:8080/getAllContact/${userId}`)
                setContact(response.data);
                console.log(response.data);
            }
            catch(error)
            {
                console.log("error");
            }
            setLoading(false);
        };
        fetchData();
    },[])
  return (
    <>
        <Header/>
        <table>
            <thead>
            <tr>
                
                <th>S.No</th>
                <th>Contact Name</th>
                <th>Contact Number</th>
            </tr>
            </thead>
            {!loading && (
            <tbody>
                
                {contact.map((c,index)=>(
            <tr key ={index} className="contentRow">
                
                <td>{index+1}</td>
                <td>{c.contactName}</td>
                <td>{c.contactNumber}</td>
            </tr>
            ))}
            </tbody>)}
        </table>
    </>
  )
}

export default Dashboard