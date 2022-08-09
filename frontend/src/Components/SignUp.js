import React from 'react'
import './Style2.css'
import Footer2 from './Footer2'

function SignUp() {
  return (
    <div>
    <div className="signup">
      <div className="container outer">
      <form
        className="needs-validation"
        action="/login"
        method="post"
        noValidate
      >
        <div className="whitebox signup_container">
          <h1 className="text-center heading">SIGNUP</h1>
          <div className="mb-3 inputs" style={{"textAlign": "left"}}>
            <label className="form-label auth">Name</label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              className='inputbox'
              placeholder="Name"
              style={{"color": "black"}}
              required
            /><br />
          </div>
          <div className="mb-3 inputs" style={{"textAlign": "left"}}>
            <label className="form-label auth">E-Mail</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              className='inputbox'
              placeholder="Email"
              style={{"color": "black"}}
              required
            /><br />
          </div>
          <div className="mb-3 inputs" style={{"textAlign": "left"}}>
            <label className="form-label auth">Phone</label>
            <br />
            <input
              type="tel"
              name="phone"
              id="phone"
              className='inputbox'
              placeholder="Phone"
              style={{"color": "black"}}
              required
            /><br />
          </div>
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
            <div className="mb-3 inputs" style={{"textAlign": "left"}}></div>
              <label            
                className="form-label auth"
                style={{"textAlign": "left"}}>Confirm Password</label>
                <br />
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                className='inputbox'
                placeholder="Confirm Password"
                style={{"color": "black"}}
                required
              /><br />
            </div>
            <button className="btnsignup" type="submit">SIGNUP</button>
          </div>      
          </form>
      </div>
      </div>      
    </div>
  )
}

export default SignUp