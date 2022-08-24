import React from 'react'
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import './Style.css'
import img1 from '../poster.png' 

function Navbar() {
  return (        
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link to="/"><img src={img1} className="navimg"/></Link>     
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>                     
            <div className="collapse navbar-collapse" id="navbarSupportedContent">                
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contests" className="nav-link">Contests</Link>
                    </li>                    
                </ul>                     
                <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/yourprofile" className="nav-link">Profile</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/signup" className="nav-link">SignUp</Link>
                        </li>            
                    </ul>
            </div>
            
            </div>        
    </nav>


  )
}

export default Navbar