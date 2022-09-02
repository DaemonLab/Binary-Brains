import * as React from "react";
import data from "./data";
import data2 from "./data2";
import { Link } from "react-router-dom";
import axios from "axios";

function Rankings() {
  const today = new Date();
  const [upcomingContests, setUpcomingContests] = React.useState([]);
  const [beginner, setbeginner] = React.useState(data2);
  const [advanced, setadvanced] = React.useState(data2);    
  React.useEffect(() => {
    axios.get("https://p-club-iiti-cp.herokuapp.com/leaderboard").then((res) => {
      if (res.status === 200) {
        setbeginner(res.data.beginnerUsers);
        setadvanced(res.data.advancedUsers);
        console.log(res.data.beginnerUsers, res.data.advancedUsers)
      }
    });
    axios.get("https://p-club-iiti-cp.herokuapp.com/contests").then((res) => {
      if (res.status === 200) {
        let upcomingContest = [];      
        res.data.contests.forEach((contest)=>{
          const date = new Date(contest.date);
          if(date >= today) upcomingContest.push(contest);          
        });      
        setUpcomingContests(upcomingContest);
      }
    });
  }, []);

  return (
    // <div className='container contestcont'>
    <div className="container gridContainer">
      <div className="card contestcard">
        <div className="card-body">
          <h2 className="card-title upcomingContestHead">Upcoming Contests</h2>
          <hr />
          <div className="">    
          { upcomingContests.length !== 0 ? (              
              upcomingContests.map((contest) => {
                const date = new Date(contest.date);              
                return (
                  <>                
                    <div className="card-body contestbody" key={1}>
                      <h3 className="contestname">{` Contest ${contest.contest} - ${contest.name}`}</h3>
                      <h4 className="sm contestInfo">
                        ({contest.category}) {contest.date}
                      </h4>
                      <a href={contest.link}><button className="btncont">View Contest</button></a>
                    </div>                  
                  </>
              ) 
              })
            ) : (
              <div>
                <br/>
                  <h4 align="center" className="mb-4" style={{color:"white", fontSize:"35px"}}>No Contests Right Now</h4>
                <br/>
              </div>
            )}                                          
          </div>
        </div>
        {/* <div className="container">
          <hr />
        </div>
        <Link to="contests">
          <button className="btnmore">View All</button>
        </Link> */}
      </div>

      <div className="card contestcard-2 col-sm-12">
        <div className="container ">
          <h2 className="card-title contesttitle-2 mt-3 upcomingContestHead">
            Leaderboard
          </h2>
          <hr />
          <h3 className="upcomingContestHead" align="center">
            Beginner
          </h3>
          <div className="responsive">
            <table className="leaderboard">
              <tbody>
                <tr>
                  <th className="th1 leaderTH">Name</th>
                  <th className="th1 leaderTH">Username</th>
                  <th className="th1 leaderTH">Points</th>
                </tr>
                {beginner.map((rank, id) => {
                  return (
                    <tr key={id}>
                      <td className="td1 leaderTD">{rank.name}</td>
                      <td className="td1 leaderTD">{rank.codeforces_handle}</td>
                      <td className="td1 leaderTD">{rank.total_points}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <h3 className="upcomingContestHead" align="center">
            Advanced
          </h3>
          <div className="responsive leaderboard">
            <table className="leaderboard">
              <tbody>
                <tr>
                  <th className="th1 leaderTH">Name</th>
                  <th className="th1 leaderTH">Username</th>
                  <th className="th1 leaderTH">Points</th>
                </tr>
                {advanced.map((rank, id) => {
                  return (
                    <tr key={id}>
                      <td className="td1 leaderTD">{rank.name}</td>
                      <td className="td1 leaderTD">{rank.codeforces_handle}</td>
                      <td className="td1 leaderTD">{rank.total_points}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rankings;
