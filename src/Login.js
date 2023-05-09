import {React} from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import './login.css'



const Login =()=>
{
 const[message, setMessage]=useState("")
  
    const [auth, setAuth]= useState(false)
 const [data, setData]= useState({
    email:'',
    password:''
 })
const changeHandler= (e)=>
{
setData({...data, [e.target.name]:e.target.value})
}
const submitHandler=(e)=>
{

    e.preventDefault()
    axios.post('https://dev-hub-back-end.onrender.com/login', data).then(
        res=> {
          localStorage.setItem('token' ,res.data.token)
        setAuth(true)
        }
    ).catch((error=>
      {
        
          console.log(error.response.data);
          
          alert(error.response.data)
        
      }))
   
}

// const submitHandler = (e) => {
//     e.preventDefault();
   
    
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     };

//     fetch("http://localhost:5000/login", requestOptions)
//       .then((response) => response.json())
//       .then((data) => {
//         localStorage.setItem("token", data.token);
//         setAuth(true);
//       })
//       .catch((error) => 
//       {
//        console.log(error.data)
//       //  console.log("sdsa");
       
//         setMessage(error.message)
//       }
//       )
//   };
if(auth)
{

    return <Navigate to="/dashboard"/>

   
}
return(
    <div>
        <div id="hnav-bar">

<div>
<h1>
<Link className="headcolor" style={{"textDecoration":"none",}} to ="/"> Developers Hub</Link>
</h1>
</div>

<div id="hlinks">

<div className="hlink">
       <Link className="navcolor"  style={{"marginLeft":"5px","fontSize":"25px", "color": "white","textDecoration":"none"}} to="/register">Register</Link>
       </div>
             
           <div className="hlink">
           <Link  className="navcolor"  style={{"marginLeft":"5px","fontSize":"25px","color": "white", "textDecoration":"none"}} to="/login">Login</Link>
                </div> 


</div>

</div>  
<div id="maincont">
       
     
        <h1 id="sign">Sign In</h1>


        <div id="logincontainer">

<p> Sign in to your account</p>


<form  onSubmit={submitHandler}>
<input type="email" onChange={changeHandler} placeholder="email address" name="email" required={true}/><br/>
<input type="password" onChange={changeHandler} placeholder="password" name="password" required={true} /><br/>

      
   
<input className="button" type="submit" value="Login" />
{message && <div>{message}</div>}
</form>
</div>
</div>
    </div>
)

}
export default Login