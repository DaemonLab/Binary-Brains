import Footer from "./Footer";
import axios from "axios";
import * as React from "react";
import data2 from "./data2";
import {Link} from 'react-router-dom'

function Yourprofile() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }
  const [posts, setPosts] = React.useState(data2);
  const [state, setState] = React.useState(false);
  const [notes, setNotes] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/profile", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        if (res.status === 200) {
          setState(res.data);
          axios
            .get("http://localhost:5000/getnotes", {
              category: res.data.difficulty,
            })
            .then((res2) => {
              if (res2.status === 200) {
                setNotes(res2.data);
              }
            });
        }
      });
  }, []);
  return (
    <div>
      <div className="container ypcont mt-4 pb-5">
        <div className="history card2 responsive">
          <h4 className="mt-2 leaderboardHead-2" align="center">
            Points History
          </h4>
          <hr />
          <table className="typ">
            <tbody>
              <tr>
                <th className="th2">Points</th>
                <th className="th2">Date</th>
              </tr>
              {state.history === [] ? (
                state.history.map((pt, id) => {
                  return (
                    <tr key={id}>
                      <td className="td2 leaderTD">{pt.points}</td>
                      <td className="td2 leaderTD">{pt.date}</td>
                    </tr>
                  );
                })
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
        <h2 align="center" style={{ color: "white" }}>
          Your Details
        </h2>
        <br />
        <h3 className="h2x">Welcome {state.name}</h3>
        <h3 className="h2x">CF Username:- {state.username}</h3>
        <h3 className="h2x">Points:- {state.points}</h3>
        <br />
        <br />
        <hr style={{ color: "white" }} />
        <h2 className="stm">Daily Problem</h2>              
                <div className="card carddp container">
                  {
                      posts.map((post,id) => {
                        return(
                          <div className="dp" key={id}>
                            <h3>Daily {post.username}
                            <button className="btndp">{post.points} link123</button>
                            </h3>
                            <hr/>
                          </div>
                        )
                      }) 
                  }   
                  <Link to="/dailyprob"><button className="btnpastdp">View Past Problems</button></Link>
                </div>              
        <hr style={{ color: "white" }} />        
        <h2 className="stm">Study Material</h2>
        <div className="container">
          <div className="row">
            {notes === [] ? (
              notes.map((note) => {
                return (
                  <div className="col-sm-3 slidecont">
                    <h3>{note.name}</h3>
                    <h4>
                      <a href={note.link} target={"_blank"}>
                        Link
                      </a>
                    </h4>
                    <p>{note.date}</p>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
          <button className="btndrive">Drive Link</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Yourprofile;
