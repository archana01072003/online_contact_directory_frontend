import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Dashboard = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const userId = user.userId;
    const[contact,setContact] = useState([]);
    const[loading,setLoading] = useState(true);
    useEffect(()=>{
        
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