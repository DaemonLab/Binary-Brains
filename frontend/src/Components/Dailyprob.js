import React from "react";
import data from "./data";
import data2 from "./data2";
import { useLocation } from "react-router-dom";

function Dailyprob() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }
  const today = new Date();
  const location = useLocation();
  // const dailyprob = location.state.dailyproblem;
  const [posts, setPosts] = React.useState(data2);
    // React.useEffect(() => {
    //   axios.post("https://p-club-iiti-cp.herokuapp.com/getdailyproblems").then((res) => {
    //     if (res.status === 200) {
    //       setPosts(res.data.dailyproblems);
    //     }
    //   });
    // }, []);
  return (
    <div>
      <div className="container contpast">
        <h3 className="upcomingContestHead mt-4" align="center">Today's Problems</h3>
        <div className="card carddp container mt-4">
          {posts.map((post, id) => {
            const date = new Date(post.date);
            if (today.toDateString() === date.toDateString()) {
              return (
                <div className="dp" key={id}>
                  {id != 0 ? <hr /> : <></>}
                  <h3>Daily {post.name}</h3>
                  <a href="{post.link}"><button className="btnviewp">Solve Problem</button></a>
                  <p>{post.date}</p>
                </div>
              ); 
            } else {
              return <></>;
            }
          })}
        </div>
        <h3 className="upcomingContestHead" align="center">Past Problems</h3>
        <div className="card carddp container mt-4">
          {posts.map((post, id) => {
            const date = new Date(post.date);
            if (today.toDateString() !== date.toDateString()) {
              return (
                <div className="dp" key={id}>
                  {id != 0 ? <hr /> : <></>}
                  <h3>Daily {post.name}</h3>
                  <a href="{post.link}"><button className="btnviewp">Solve Problem</button></a>
                  <p>{post.date}</p>
                </div>
              );
            } else {
              return <></>;
            }
          })}
        </div>
      </div>      
    </div>
  );
}

export default Dailyprob;
