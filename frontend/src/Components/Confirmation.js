import React from 'react'
import {Link} from 'react-router-dom'

function Confirmation() {
  return (
    <div className="login">
    <div className="container outer">
          <div className=" logincont">
            <h2 className="loginHead">Your Email has been Confirmed!</h2>
            {/* <Link to="/login"><button className='btnlogin'>Login</button></Link> */}
          </div>                    
    </div>
    </div>   
  )
}

export default Confirmation