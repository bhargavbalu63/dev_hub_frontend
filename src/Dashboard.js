import {React, useState, useEffect }from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
// import ColorRing from "react-loader-spinner";
import './Dashboard.css'
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

        
        <div className="App">
        {/* {loading ? <ColorRing
        color={"#00FFFF"}
        loading={loading}
        cssOverride={override}
      /> :  */}
      
      
      
      <div>

<h1 className="headcolor" id="dhead">Welcome to Developers Hub</h1>
 

 <div id="dlinks">
 <div className="dlink">
    <li><Link className="navcolor" style={{"marginLeft":"5px","fontSize":"20px", "color": "white","textDecoration":"none"}} to="/myprofile">My profile</Link></li>
    </div>
    <div className="dlink">
   <li><Link className="navcolor" style={{"marginLeft":"5px","fontSize":"20px", "color": "white","textDecoration":"none"}} to="/login" onClick={()=>localStorage.removeItem('token',)}>Logout</Link></li>
   </div>
    </div>
  
<div id="dcont">



{data.length>=1? 

data.map((profile, index)=>
{
return  <div className="dprofile" key={index}>
    
<h1>{profile.fullname}</h1> 
<p>{profile.email}</p>
<p>{profile.mobile}</p>
<p>{profile.skill}</p>

</div>
})


:null}


</div>
        </div>           
        {/* } */}

        
         




        </div>
    )
}
export default Dashboard