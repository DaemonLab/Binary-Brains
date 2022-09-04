import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import img1 from "./BBlogo2.png";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() =>{
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    }
    window.addEventListener("resize", handleResize);
  },[])
  return size;
}

function Navbar() {
  const [height,width] = useWindowSize();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  const token = localStorage.getItem("token");
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbg">
      <div className="container">
        <Link to="/">
          <img src={img1} className="navimg" alt="..." />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">        
          <ul className="navbar-nav mr">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {/* {!token ? (
              <li className="nav-item">
                <Link to="/contests" className="nav-link">
                  Contests
                </Link>
              </li>
            ) : (
              <></>
            )} */}
             {/* <li className="nav-item">
              <Link to="/viewprize" className="nav-link">
                Prizes
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Our Team
              </Link>
            </li>
          </ul> 
        </div>
        
        { width < "992" ? (          
            <Link to="/">
                <button className="btnnav2 toleft">Home</button>
            </Link>
          ):(
          <></>
          )}
        { width < "992" ? (          
            <Link to="about">
                <button className="btnnav2 toleft">Our Teams</button>
            </Link>
          ):(
          <></>
          )}
        {token ? (
          <Link to="yourprofile">
            <button className="btnnav2">Your Profile</button>
          </Link>
        ) : (
          <></>
        )}
        {token ? (
          <Link to="yourprofile">
            <button className="btnnav2" onClick={handleLogout}>
              Logout
            </button>
          </Link>
        ) : (
          <></>
        )}
        {!token ? (
          <Link to="login">
            <button className="btnnav2">Login</button>
          </Link>
        ) : (
          <></>
        )}
        {!token ? (
          <Link to="signup">
            <button className=" btnnav2">Register</button>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
