import React from "react";
import { Link } from "react-router-dom";
import './Home.css'
const Home= ()=>
{

    return(
  
            <div id="main-container">

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
   <div id="main" style={{backgroundImage:`url(https://as1.ftcdn.net/v2/jpg/04/59/42/04/1000_F_459420402_PurnNZmFvoK2YwpQabAgicp8ukIW4Jgy.jpg)`, "height":"600px", "opacity":"1.5"}}>

    <h2 style={{"text-shadow":"4px 4px 4px black"}}>{`<>`} Developers Hub{`</>`}</h2>
   <p style={{"color":"white", "border":"8px solid black","border-style": "dashed", "text-shadow":"4px 4px 4px black"}}>Create a developer profile or portfolio, share posts and get help  from other developers</p>
   </div>
        

            </div>
      
    )
}
export default Home