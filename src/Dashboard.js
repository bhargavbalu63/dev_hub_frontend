import {React, useState, useEffect }from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
// import ColorRing from "react-loader-spinner";
import "./Dashboard.css"
// const override = {
   
//     height:100,
//     margin: "auto",
//     borderColor: "blue",
//   };
const Dashboard=()=>
{
    // const [loading, setLoading] = useState(false);
const [data, setData]=useState([])
useEffect(()=>
{
    // setLoading(true)
    setTimeout(()=>
{
    // setLoading(false)
},1500)
axios.get('https://dev-hub-back-end.onrender.com/allprofiles', {
    headers:{
        'x-token':localStorage.getItem('token')
    }
}).then(res=>setData(res.data))
},[])


if(!localStorage.getItem('token'))
{
    return <Navigate to="/login"/>
}



    return(

        
        <div>
        {/* {loading ? <ColorRing
        color={"#00FFFF"}
        loading={loading}
        cssOverride={override}
      /> :  */}
      
      
      
      <div>

<h1>devlopes Hub</h1>
 
 <ul>
   <li><Link to="/myprofile">my profile</Link></li>
   <li><Link to="/login" onClick={()=>localStorage.removeItem('token',)}>Logout</Link></li>
 </ul>

{data.length>=1? 

data.map((profile, index)=>
{
return  <div key={index}>
<h1>{profile.fullname}</h1>
<p>{profile.email}</p>
<p>{profile.mobile}</p>

</div>
})


:null}



        </div>           
        {/* } */}

        
         




        </div>
    )
}
export default Dashboard