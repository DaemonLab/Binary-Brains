import * as React from 'react'
import data from './data'
import data2 from './data2'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Rankings() {

  const [contests, setContests] = React.useState(data)
  const [ranks, setRanks] = React.useState(data2)

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/leaderboard")
      .then((res) => {
        if (res.status === 200) {
          setRanks(res.data.users);
        }
      });
  }, []);

  return (
    
    // <div className='container contestcont'>
    <div className='container gridContainer'>
      <div className="card contestcard" >       
        <div className="card-body"> 
          <h2 className="card-title upcomingContestHead">Upcoming Contests</h2>     
          <hr />
          <div className="">            
            <div className="card-body contestbody" key={1}>
              <h3 className='contestname'>{` Contest ${contests[0].id} - ${contests[0].name}`}</h3>  
              <h4 className='sm contestInfo'>(Beginner) {contests[0].date}</h4>                                        
              <button className="btncont">CF Page</button>
            </div>                                    
            <div className="card-body contestbody" key={2}>
              <h3 className='contestname'>{` Contest ${contests[1].id} - ${contests[1].name}`}</h3>                            
              <h4 className='sm contestInfo'>(Advanced) {contests[1].date}</h4>                    
              <button className="btncont">CF Page</button>
            </div>                                    
            <div className="card-body contestbody" key={3}>
              <h3 className='contestname'>{` Contest ${contests[2].id} - ${contests[2].name}`}</h3>                            
              <h4 className='sm contestInfo'>(Advanced) {contests[2].date}</h4>                    
              <button className="btncont">CF Page</button>
            </div>
          </div>                             
        </div>
        <div className="container">
          <hr/>
        </div>
        <Link to="contests"><button className='btnmore' >View All</button></Link>
      </div> 

      <div className="card contestcard-2 col-sm-12" >       
      <div className="container ">
      <h2 className="card-title contesttitle-2 leaderboardHead">Leaderboard</h2>
      <hr/>
      <h3 className="leaderboardHead" align="center">Beginner</h3>
      <div className="responsive">
        <table className='leaderboard'>
          <tbody>
            <tr>
              <th className='th leaderTH'>Name</th>
              <th className='th leaderTH'>Username</th>
              <th className='th leaderTH'>Points</th>
            </tr>
            {
              ranks.map((rank, id) => {
                return(
                  <tr key={id}>
                    <td className='td leaderTD'>{rank.name}</td>
                    <td className='td leaderTD'>{rank.username}</td>
                    <td className='td leaderTD'>{rank.points}</td>
                  </tr>
                )
              })
            }     
          </tbody>   
        </table>
        <h1></h1>
        </div>
        <h3 className="leaderboardHead" align="center">Advanced</h3>        
        <div className="responsive leaderboard">
          <table>
            <tbody>
              <tr>
                <th className='th leaderTH'>Name</th>
                <th className='th leaderTH'>Username</th>
                <th className='th leaderTH'>Points</th>
              </tr>
              {
                ranks.map((rank, id) => {
                  return(
                    <tr key={id}>
                      <td className='td leaderTD'>{rank.name}</td>
                      <td className='td leaderTD'>{rank.username}</td>
                      <td className='td leaderTD'>{rank.points}</td>
                    </tr>
                  )
                })
              }     
            </tbody>   
          </table>        
        </div>
      </div>
      </div>
    </div>   
  
  )
}

export default Rankings