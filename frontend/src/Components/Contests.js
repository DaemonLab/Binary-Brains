import * as React from "react";
import Footer from "./Footer";
import data from "./data";
import axios from "axios";
import moment from "moment";

function Contests() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }
  const today = new Date();
  const [contests, setContests] = React.useState(data);
  React.useEffect(() => {
    axios.get("http://localhost:5000/contests").then((res) => {
      if (res.status === 200) {
        setContests(res.data.contests);
      }
    });
  }, []);
  return (
    <div>
      <div className="container">
        <h4 className="upc">Upcoming</h4>
        {contests.map((contest) => {
          const date = new Date(contest.date);
          return date > today ? (
            <>
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">{`${contest.name}`}</h3>
                  <p class="card-text">{contest.desc}</p>
                  <p>Time: {date.toISOString()}</p>
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
          ) : (
            <></>
          );
        })}
        <h4 className="upc2">Past Contests</h4>
        {contests.map((contest) => {
          const date = new Date(contest.date);
          return date <= today ? (
            <>
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">{`${contest.contest}: ${contest.name}`}</h3>
                  <p class="card-text">{contest.desc}</p>
                  <p>Time: {moment(date).fromNow()}</p>
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
          ) : (
            <></>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Contests;
