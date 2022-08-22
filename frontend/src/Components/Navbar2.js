import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import img1 from "./BBlogo.png";

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  const token = localStorage.getItem("token");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/">
          <img src={img1} className="navimg" alt="..." />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {token ? (
              <li className="nav-item">
                <Link to="/contests" className="nav-link">
                  Contests
                </Link>
              </li>
            ) : (
              <></>
            )}
             {/* <li className="nav-item">
              <Link to="/viewprize" className="nav-link">
                Prizes
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Our Teams
              </Link>
            </li>            
          </ul>
        </div>
        {token ? (
          <Link to="yourprofile">
            <button className="btnnav">Your Profile</button>
          </Link>
        ) : (
          <></>
        )}
        {token ? (
          <Link to="yourprofile">
            <button className="btnnav" onClick={handleLogout}>
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
            <button className=" btnnav2">Signup</button>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
