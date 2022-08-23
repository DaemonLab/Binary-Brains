import React from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';

function Confirmation() {
  let {code} = useParams();
  console.log(code);
  React.useEffect(() => {
    axios.post("https://p-club-iiti-cp.herokuapp.com/confirm", {code: code}).then((res) => {
      if (res.status !== 200) {
        console.log("Failed")
      }
    });
  }, []);
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