import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './register.css'
const Register = ()=>
{


    // const[message, setMessage]= useState("")
    const[success, setSuccess]= useState("")
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
        axios.post('https://dev-hub-back-end.onrender.com/register', data)
        .then((response) => {
          console.log(response);
          setSuccess("Registered Successfully")
         
          // Handle success case
        })
        .catch((error) => {
          console.log(error.response.data);

          alert(error.response.data)
        
          
          // Handle error case
        });
        
        
    }



    return (
        <div>
            <div id="hnav-bar">

<div>
<h1  id="hhead">
<Link className="headcolor" style={{"textDecoration":"none",}} to ="/"> Developers Hub</Link>
</h1>
</div>

<div id="hlinks">

<div className="hlink">
       <Link className="navcolor"  style={{"marginLeft":"5px","fontSize":"25px", "color": "white","textDecoration":"none"}} to="/register">Register</Link>
       </div>
             
           <div className="hlink">
           <Link className="navcolor"   style={{"marginLeft":"5px","fontSize":"25px","color": "white", "textDecoration":"none"}} to="/login">Login</Link>
                </div> 


</div>

</div>  


<div id="maincont">



<h1 id="sign">Sign Up</h1>




<div id="registercontainer">



<p>Create your account</p>
<form onSubmit={submitHandler} autoComplete="off">
<input required={true} type="text" onChange={changeHandler} placeholder="Name" name="fullname"/><br/>
<input required={true} type="email"  onChange={changeHandler} placeholder="Email address" name="email"/><br/>
<input required={true} type="number"  onChange={changeHandler} placeholder="Mobile"  name="mobile"/><br/>
<input required={true} type="text"  onChange={changeHandler} placeholder="Skill"  name="skill"/><br/>
<input required={true} type="password"  onChange={changeHandler} placeholder="Password" name="password"/><br/>
<input required={true} type="password"  onChange={changeHandler} placeholder="Confirm password"  name="confirmpassword"/><br/>
<input className="button" required={true} type="submit"  value="Register"/>
</form>
{/* {message && <div>{message}</div>} */}
{success && <div>{success}</div>}
</div>



<p>


    Already have an account? <br/>

    <div className="signlink">
    <Link to="/login">Sign in</Link>
    </div>


    </p>
    </div>
        </div>
    )
}
export default Register