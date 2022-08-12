import Footer2 from "./Footer2";
import axios from "axios";
import * as React from "react";


function Yourprofile() {
  const [state, setState] = React.useState(false);
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/profile", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        if (res.status === 200) {
          setState(res.data)
        }
      });
  }, []);
  return (
    <div>
      <div className="container ypcont mt-4 pb-5">
        <h2 align="center" style={{"color":"white"}}>Your Details</h2>
        <h3 className="h2x">Welcome {state.name}</h3>
        <h3 className="h2x">CF Username:- {state.username}</h3>
        <h3 className="h2x">Points:- {state.points}</h3>
        <hr style={{"color": "white"}}/>
        <h2 className="stm">Study Material</h2>
        <div class="container">
          <div class="row">
            <div class="col-sm slidecont">
              <h3>Slide Topic</h3>
              <h4>Slide 1 link</h4>
              <p>Upload Date</p>
            </div>
            <div class="col-sm slidecont">
              <h3>Slide Topic</h3>
              <h4>Slide 2 link</h4>
              <p>Upload Date</p>
            </div>
            <div class="col-sm slidecont">
              <h3 >Slide Topic</h3>
              <h4 >Slide 3 link</h4>
              <p>Upload Date</p>
            </div>
            <div class="col-sm slidecont">
              <h3>Slide Topic</h3>
              <h4>Slide 4 link</h4>
              <p>Upload Date</p>
            </div>            
          </div>
          <button className="btndrive">Drive Link</button>
        </div>                
      </div>            
      <div className="end"></div>            
    </div>
  );
}

export default Yourprofile;
