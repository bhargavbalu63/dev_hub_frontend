import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
const Myprofile=()=>
{
    const [data, setData]=useState('')
    const [review, setReview]= useState([])
    useEffect(()=>
    {
    axios.get('http://localhost:5000/myprofile', {
        headers:{
            'x-token':localStorage.getItem('token')
        }
    }).then(res=>setData(res.data))

    axios.get('http://localhost:5000/myreview', {
        headers:{
            'x-token':localStorage.getItem('token')
        }
    }).then(res=>setReview(res.data))
    },[])


    if(!localStorage.getItem('token'))
    {
        return <Navigate to="/login"/>
    }
    return(

        
        <div>
             <h1>devlopers Hub</h1>
             <ul>
             <li><Link to="/dashboard" >back to all profiles</Link></li>
            <li><Link to="/login" onClick={()=>localStorage.removeItem('token',)}>Logout</Link></li>
          </ul>

 <h1>{data.fullname}</h1>

         <p>{data.email}</p>


{review?

review.map((review, index)=>
    {
        return <div key={index}>
            {review.taskprovider}
            {review.rating}/5
            </div>
    }): <p>no review added yet</p>
          }
        </div>
    )
}
export default Myprofile