import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

const Home= ()=>
{

    return(
  
            <div id="main-container">

           <div id="hnav-bar">

    
           <h1  id="hhead">
        <Link className="headcolor" style={{"textDecoration":"none"}} to ="/"> Developers Hub</Link>
        </h1>
    

        <div id="hlinks">
       
       <div className="hlink">
       <Link className="navcolor"  style={{"marginLeft":"5px","fontSize":"25px", "color": "white","textDecoration":"none"}} to="/register">Register</Link>
       </div>
             
           <div className="hlink">
           <Link className="navcolor"   style={{"marginLeft":"5px","fontSize":"25px","color": "white", "textDecoration":"none"}} to="/login">Login</Link>
                </div> 
           
               
        
    
    
        </div>

            </div>     
   <div className="hcont"  style={{"height":"100vh","opacity":"1.5", backgroundSize:'cover'}}>

    <h2 className="hfont" >{`<>`} Developers Hub {`</>`}</h2>
   <p className="pfont" >Create a developer profile or portfolio and view all the existing developers</p>
   </div>
        

            </div>
      
    )
}
export default Home