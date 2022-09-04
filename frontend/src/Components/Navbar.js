import React from 'react'
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import './Style.css'
import img1 from "./BBlogo2.png"; 
import {useState, useEffect} from 'react'

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
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            {token ? (
              <li className="nav-item">
                <Link className="nav-link" to="/contests">Contests <span className="sr-only">(current)</span></Link>
              </li>
              ) : (
                <></>
              )
              }
            <li className="nav-item">
              <Link className="nav-link" to="/about">Our Teams<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/timeline">Schedule <span className="sr-only">(current)</span></Link>
            </li>            
            { width < "992" && !token ? (            
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                  </li>                  
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">Register <span className="sr-only">(current)</span></Link>
                  </li>
                </>
                ) : (
                  <></>
                )
              }
              { width < "992" && token ? (            
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/yourprofile">Your Profile <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={handleLogout}>Logout <span className="sr-only">(current)</span></Link>
                </li>
              </>
              ) : (
                <></>
              )
            }
          </ul>      
          </div>
        { width >= "992" && !token ? (            
          <>
            <Link to="login">
              <button className="btnnav2">Login</button>
            </Link>                            
            <Link to="signup">
              <button className=" btnnav2">Register</button>
            </Link>                     
          </>
          ) : (
            <></>
          )
        }
        { width >= "992" && token ? (            
            <>
              <Link to="/yourprofile">
                <button className="btnnav2">Your Profile</button>
              </Link>                            
              <Link to="/">
                <button className=" btnnav2" onClick={handleLogout}>Logout</button>
              </Link>                     
            </>
          ) : (
            <></>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar