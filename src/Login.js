import {React} from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
// import axios from 'axios'



const Login =()=>
{
 
  
    const [auth, setAuth]= useState(false)
 const [data, setData]= useState({
    email:'',
    password:''
 })
const changeHandler= (e)=>
{
setData({...data, [e.target.name]:e.target.value})
}
// const submitHandler=(e)=>
// {

//     e.preventDefault()
//     axios.post('http://localhost:5000/login', data).then(
//         res=>localStorage.setItem('token', res.data.token),
//         setAuth(true)
//     )
// }

const submitHandler = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("https://dev-hub-back-end.onrender.com/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        setAuth(true);
      })
      .catch((error) => console.log(error))
  };
if(auth)
{

    return <Navigate to="/dashboard"/>

   
}
return(
    <div>
        <div id="nav-bar">

<div>
<h1>
<Link style={{"text-decoration":"none",}} to ="/"> Developers Hub</Link>
</h1>
</div>

<div id="links">

    <Link style={{"margin-left":"50px","font-size":"25px"}} to="/register">Register</Link>


    <Link style={{"margin-left":"50px","font-size":"25px"}} to="/login">Login</Link>



</div>

</div>  

       
     
        <h1>sign in</h1>
<p> Sign in to your account</p>
<form  onSubmit={submitHandler}>
<input type="email" onChange={changeHandler} placeholder="email address" name="email" required={true}/><br/>
<input type="password" onChange={changeHandler} placeholder="password" name="password" required={true} /><br/>

      
   
<input type="submit" value="Login" />

</form>
    </div>
)

}
export default Login