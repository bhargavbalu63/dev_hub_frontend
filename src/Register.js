import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './Home.css'
const Register = ()=>
{
    const [data, setData]= useState({
        fullname:'',
        email:'',
        mobile:'',
        skill:'',
        password:'',
        confirmpassword:''

     })
    const changeHandler= (e)=>
    {
    setData({...data, [e.target.name]:e.target.value})
    }
     const  submitHandler=  (e)=>
    {
    
        e.preventDefault()
        console.log(data);
        axios.post('http://localhost:5000/register', data)
        .then((response) => {
          console.log(response);
          // Handle success case
        })
        .catch((error) => {
          console.error(error);
          // Handle error case
        });
        
        
    }
    return (
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
<h1>Sign up</h1>


<p>Create your account</p>
<form onSubmit={submitHandler} autoComplete="off">
<input required={true} type="text" onChange={changeHandler} placeholder="Name" name="fullname"/><br/>
<input required={true} type="email"  onChange={changeHandler} placeholder="Email address" name="email"/><br/>
<input required={true} type="number"  onChange={changeHandler} placeholder="Mobile"  name="mobile"/><br/>
<input required={true} type="text"  onChange={changeHandler} placeholder="Skill"  name="skill"/><br/>
<input required={true} type="password"  onChange={changeHandler} placeholder="password" name="password"/><br/>
<input required={true} type="password"  onChange={changeHandler} placeholder="confirem password"  name="confirmpassword"/><br/>
<input required={true} type="submit"  value="Register"/>
</form>
<p>
    Already have an account?
    <Link to="/login">Sign in</Link>
    </p>
        </div>
    )
}
export default Register