import Footer from "./Footer";
import axios from "axios";
import * as React from "react";
import data2 from "./data2";
import { Link } from "react-router-dom";
import moment from "moment";

function Yourprofile() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }
  const [posts, setPosts] = React.useState(data2);
  const [state, setState] = React.useState(false);
  const [notes, setNotes] = React.useState([]);
  const [dailyproblem, setDailyProblem] = React.useState([]);
  const [points, setPoints] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const res1 = await axios.get("https://p-club-iiti-cp.herokuapp.com/profile", {
        headers: { token: localStorage.getItem("token") },
      });
      const [res2, res3] = await Promise.all([
        axios.post("https://p-club-iiti-cp.herokuapp.com/getnotes", {
          category: res1.data.difficulty,
        }),
        axios.post("https://p-club-iiti-cp.herokuapp.com/getdailyproblem", {
          category: res1.data.difficulty,
        }),
      ]);
      setState(res1.data);
      setNotes(res2.data.notes);
      setDailyProblem(res3.data.dailyproblems);
      setPoints(res1.data.history);
    })();
  }, []);
  // React.useEffect(() => {
  //   async () => {
  //     const res1 = await axios.get("https://p-club-iiti-cp.herokuapp.com/profile", {
  //       headers: { token: localStorage.getItem("token") },
  //     });
  //     const [res2, res3] = await Promise.all([
  //       axios.get("https://p-club-iiti-cp.herokuapp.com/getnotes", {
  //         category: res1.data.difficulty,
  //       }),
  //       axios.get("https://p-club-iiti-cp.herokuapp.com/getdailyproblem", {
  //         category: res1.data.difficulty,
  //       }),
  //     ]);
  //     console.log(res1.data);
  //     console.log(res2.data);
  //     console.log(res3.data);
  //   };
  //   // axios
  //   //   .get("https://p-club-iiti-cp.herokuapp.com/profile", {
  //   //     headers: { token: localStorage.getItem("token") },
  //   //   })
  //   //   .then((res) => {
  //   //     if (res.status === 200) {
  //   //       setState(res.data);
  //   //       axios
  //   //         .get("https://p-club-iiti-cp.herokuapp.com/getnotes", {
  //   //           category: res.data.difficulty,
  //   //         })
  //   //         .then((res2) => {
  //   //           if (res2.status === 200) {
  //   //             setNotes(res2.data.notes);
  //   //             axios
  //   //               .get("https://p-club-iiti-cp.herokuapp.com/getdailyproblem", {
  //   //                 category: res.data.difficulty,
  //   //               })
  //   //               .then((res3) => {
  //   //                 if (res3.status === 200) {
  //   //                   setDailyProblem(res3.data.dailyproblems);
  //   //                 }
  //   //               });
  //   //           }
  //   //         });
  //   //     }
  //   //   });
  // }, []);
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
              {points.length === 0 ? (
                <></>
              ) : (
                points.map((pt, id) => {
                  return (
                    <tr key={id}>
                      <td className="td2 leaderTD">{pt.points}</td>
                      <td className="td2 leaderTD">{pt.date}</td>
                    </tr>
                  );
                })
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
        <h3 className="h2x">Points:- {state.points} <Link to="/viewprize"><button className="btnpts">Redeem</button></Link></h3>
        <br />
        <br />
        {dailyproblem.length !== 0 ? (
          <>
            <hr style={{ color: "white" }} />
            <h2 className="stm">Daily Problem</h2>
            <div className="card carddp container">
              {dailyproblem.length !== 0 ? (
                dailyproblem.map((post, id) => {
                  return (
                    <div className="dp" key={id}>
                      <h3>
                        Daily {post.username}
                        <button className="btndp">{post.link}</button>
                      </h3>
                      <hr />
                    </div>
                  );
                })
              ) : (
                <></>
              )}
              <Link to="/dailyprob" state={{dailyproblem: dailyproblem}}>
                <button className="btnpastdp">View Past Problems</button>
              </Link>
            </div>
          </>
        ) : (
          <></>
        )}
        <hr style={{ color: "white" }} />
        <h2 className="stm">Study Material</h2>
        <div className="container">
          <div className="row">
            {notes.length !== 0 ? (
              notes.map((note) => {
                const date = new Date(note.date);
                return (
                  <div className="col-sm-3 slidecont">
                    <h3>{note.name}</h3>
                    <h4>
                      <a href={note.link} target={"_blank"}>
                        Link
                      </a>
                    </h4>
                    <p>{moment(date).format("DD-MM-YYYY")}</p>
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
