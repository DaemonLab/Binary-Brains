import * as React from "react";
import Footer from "./Footer";
import data2 from "./data2";
import axios from "axios";
import moment from "moment";

function Contests() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }
  const today = new Date();
  const [upcomingContests, setUpcomingContests] = React.useState([]);
  const [pastContests, setPastContests] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://p-club-iiti-cp.herokuapp.com/contests").then((res) => {
      if (res.status === 200) {
        let upcomingContest = [];
        let pastContest = [];
        res.data.contests.forEach((contest)=>{
          const date = new Date(contest.date);
          if(date>=today) upcomingContest.push(contest);
          else pastContest.push(contest);
        });
        setPastContests(pastContest);
        setUpcomingContests(upcomingContest);
      }
    });
  }, []);  
  return (
    <div>
      <div className="container mt-4">
        <h3 className="upcomingContestHead mb-4" style={{fontWeight:"bold"}} align="center">Upcoming Contests</h3>
        {upcomingContests.length !== 0 ? (
            upcomingContests.map((contest) => {
              const date = new Date(contest.date);
              return (
                <>
                  <div class="card">
                    <div class="card-body">
                      <h3 class="card-title">{`${contest.name}`}</h3>
                      <p class="card-text">{contest.desc}</p>
                      <p>Time: {moment(date).format("DD-MM-YYYY")}</p>
                      <a
                        href={`https://codeforces.com/contest/${contest.contest}`}
                        class="btnxxx"
                        target={"_blank"}
                      >
                        Contest(CF link)
                      </a>
                    </div>
                  </div>                  
                </>
              );
            })
            ):(
              <div>
                <br/>
                <h4 align="center" className="mb-4" style={{color:"white", fontSize:"35px"}}>No Contests Right Now</h4>
                <br/>
              </div>
            )}
        <h3 className="upcomingContestHead mb-4" style={{fontWeight:"bold"}} align="center">Past Contests</h3>
        {pastContests.length !== 0 ? (
            pastContests.map((contest) => {
              const date = new Date(contest.date);
              return (
                <>
                  <div class="card">
                    <div class="card-body">
                      <h3 class="card-title">{`${contest.name}`}</h3>
                      <p class="card-text">{contest.desc}</p>
                      <p>Time: {moment(date).format("DD-MM-YYYY")}</p>
                      <a
                        href={`https://codeforces.com/contest/${contest.contest}`}
                        class="btnxxx"
                        target={"_blank"}
                      >
                        Contest(CF link)
                      </a>
                    </div>
                  </div>
                </>
              );
            })
            ):(
              <div>
                <br/>
                  <h4 align="center" className="mb-4" style={{color:"white", fontSize:"35px"}}>No Contests Right Now</h4>
                <br/>
              </div>
            )}
      </div>
      <Footer />
    </div>
  );
}

export default Contests;
