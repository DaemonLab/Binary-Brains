import React from 'react'
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import './Style.css'
import img1 from '../logooo2.png' 

function Navbar() {
  return (        
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link to="/"><img src={img1} className="navimg"/></Link>                          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">                
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contests" className="nav-link">Contests</Link>
                    </li>                    
                </ul>                     
            </div>
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to="/yourprofile" className="nav-link">Your Profile</Link>
            </li>
            <li className="nav-item active">
                <Link to="/signup" className="nav-link">Login/SignUp</Link>
            </li>
            </ul>
        </div>  
    </nav>


  )
}

export default Navbar