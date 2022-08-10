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
      <div className="container ypcont">
        <h2 className="h2x">Welcome {state.name}</h2>
        <h2 className="h2x">CF Username:- {state.username}</h2>
        <h2 className="h2x">Points:- {state.points}</h2>
      </div>
    </div>
  );
}

export default Yourprofile;
