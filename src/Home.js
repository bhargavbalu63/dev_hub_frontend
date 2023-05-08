import React from "react";
import { Link } from "react-router-dom";
import './Home.css'
import photo from './Studio_Project_V0.png'
const Home= ()=>
{

    return(
  
            <div id="main-container">

           <div id="nav-bar">

            <div>
           <h1>
        <Link style={{"textDecoration":"none",}} to ="/"> Developers Hub</Link>
        </h1>
        </div>

        <div id="links">
       
       <div className="link">
       <Link  style={{"marginLeft":"5px","fontSize":"25px", "color": "white","textDecoration":"none"}} to="/register">Register</Link>
       </div>
             
           <div className="link">
           <Link  style={{"marginLeft":"5px","fontSize":"25px","color": "white", "textDecoration":"none"}} to="/login">Login</Link>
                </div> 
           
               
        
    
    
        </div>

            </div>     
   <div id="main" style={{backgroundImage:`url(${photo})`, "height":"100vh", "opacity":"1.5", backgroundSize:'cover'}}>

    <h2 style={{"textShadow":"4px 4px 4px black"}}>{`<>`} Developers Hub{`</>`}</h2>
   <p style={{"color":"white", "border":"8px solid black","borderStyle": "dashed", "textShadow":"4px 4px 4px black"}}>Create a developer profile or portfolio and view all the existing developers</p>
   </div>
        

            </div>
      
    )
}
export default Home