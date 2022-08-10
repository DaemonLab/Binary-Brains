import React from 'react'
import './Style2.css'
import Footer2 from './Footer2'

function Login() {
  return (
    <div>
    <div className="login">
      <div className="container outer">
      <form
        className="needs-validation"
        action="/login"
        method="post"
        noValidate
      >
        <div className="whitebox2 signup_container2">
          <h1 className="text-center heading">LOGIN</h1>                         
          <div className="mb-3 inputs" style={{"textAlign": "left"}}>
            <label className="form-label auth">Username</label>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              className='inputbox'
              placeholder="Username"
              style={{"color": "black"}}
              required
            /><br />
          </div>
          <div className="mb-3 inputs" style={{"textAlign": "left"}}>
            <label            
              className="form-label auth"
              style={{"textAlign": "left"}}
              >Password</label>
              <br />
            <input
              type="password"
              name="password"
              id="password"
              className='inputbox'
              placeholder="Password"
              style={{"color": "black"}}
              required
            /><br />          
            </div>
            <button className="btnsignup" type="submit">Login</button>
          </div>      
          </form>
      </div>
      </div>            
    </div>
  )
}

export default Login