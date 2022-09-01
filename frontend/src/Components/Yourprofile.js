import Footer from "./Footer";
import axios from "axios";
import * as React from "react";
import data from "./data";
import data2 from "./data2";
import { Link } from "react-router-dom";
import moment from "moment";

function Yourprofile() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }  
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
      <div className="container mt-4 pb-5">
        <div className="card ">        
        <h2 align="center" className="upcomingContestHead" style={{fontWeight:"bold"}}>
          Your Details
        </h2>
        <br />
        <div className="container">
          <div className="head">
            <h4 className="h1x">Welcome:- {state.name}</h4>
            <h4 className="h1x">CF Username:- {state.username}</h4>        
            <h4 className="h1x">Points:- {state.points} { /*<Link to="/viewprize"><button className="btnpts">Redeem</button></Link>*/ }</h4>
          </div>
        <br />
        <br />
        <div className="flex">
        <div className="history card responsive">
          <h4 className="mt-2 pointsHead" align="center">
            Points History
          </h4>
          <hr />
          <table className="typ">
            <tbody>
              <tr>
                <th className="thx">Points</th>
                <th className="thx">Date</th>
              </tr>
              {points.length === 0 ? (
                <tr>
                  <td className="td2">Nothing Here</td>
                  <td className="td2">Nothing Here</td>
                </tr>
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
        <div className="history2 card responsive">
          <h4 className="mt-2 pointsHead" align="center">
            Points System
          </h4>
          <hr />
          <table className="typ">
            <tbody>
              <tr>
                <th className="thx">Points</th>
                <th className="thx">Rank</th>
              </tr>              
              <tr>
                <td className="td2 leaderTD">1000</td>
                <td className="td2 leaderTD">1</td>
              </tr>
              <tr>
                <td className="td2 leaderTD">800</td>
                <td className="td2 leaderTD">2</td>
              </tr>
              <tr>
                <td className="td2 leaderTD">600</td>
                <td className="td2 leaderTD">3</td>
              </tr>
              <tr>
                <td className="td2 leaderTD">400</td>
                <td className="td2 leaderTD">4</td>
              </tr>                  
              <tr>
                <td className="td2 leaderTD">400</td>
                <td className="td2 leaderTD">5</td>
              </tr>
              <tr>
                <td className="td2 leaderTD">150</td>
                <td className="td2 leaderTD">6-10</td>
              </tr>
              <tr>
                <td className="td2 leaderTD">70</td>
                <td className="td2 leaderTD">11-20</td>
              </tr>
              <tr>
                <td className="td2 leaderTD">30</td>
                <td className="td2 leaderTD">21-40</td>
              </tr>
              <tr>
                <td className="td2 leaderTD">10</td>
                <td className="td2 leaderTD"><span className="small" style={{fontSize:"13px"}}>Atleast 1 question</span></td>
              </tr>
            </tbody>
          </table>    
          <br/>
          <p align="center" className="small">10 point per day if all daily problems are completed.</p>
        </div>                                
        </div>
        </div>
        </div>
        <hr style={{ color: "white" }} />
       <div className="card">            
            <h2 className="stm upcomingContestHead">Daily Problem</h2>
            <div className="card carddp container">
              {dailyproblem.length !== 0 ? (
                <>
                {dailyproblem.map((post, id) => {
                  return (
                    <div className="dp" key={id}>
                      <h3>
                        Daily {post.username}
                        <a href="{post.link}"><button className="btnviewp">Solve Problem</button></a>
                      </h3>
                      <hr />
                    </div>                    
                  );
                })}                
              </>
              ) : (
                <div>
                  <h4 align="center">No Problems Today!</h4>
                  <br/>
                </div>
              )}   
              <Link to="/dailyprob" state={{dailyproblem: dailyproblem}}>
                  <button className="btnpastdp">View Past Problems</button>
                </Link>           
            </div>
            </div>
        
        
        <hr style={{ color: "white" }} />      
        <div className="card pb-5">
        <h2 className="stm upcomingContestHead">Study Material</h2>
        <div className="container smcont">
          <div className="row ">
            {notes.length !== 0 ? (
              notes.map((note) => {
                const date = new Date(note.date);
                return (
                  <div className="col-sm-3 slidecont mt-3">
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
              <><h4 align="center" style={{color:"white"}}>No Material Added Yet</h4></>
            )}
          </div>
          {notes.length !== 0 ? (
            <button className="btndrive">Drive Link</button>
          ) : (
            <></>
          )}          
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Yourprofile;
