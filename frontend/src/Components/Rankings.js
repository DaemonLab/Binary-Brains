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
    
    <div className='container contestcont'>
      <div className="card contestcard" >       
        <div className="card-body"> 
          <h2 className="card-title">Contests And Rankings</h2>     
          <hr />
          <div className="">            
            <div className="card-body contestbody" key={1}>
              <h3 className='contestname'>{` Contest ${contests[0].id} - ${contests[0].name}`}</h3>                            
              <p className='contestrank'>1st - {contests[0].rank1} <br/> 2nd - {contests[0].rank2} <br/> 3rd - {contests[0].rank3}</p>                                                                                                      
            </div>                                    
            <div className="card-body contestbody" key={2}>
              <h3 className='contestname'>{` Contest ${contests[1].id} - ${contests[1].name}`}</h3>                            
              <p className='contestrank'>1st - {contests[1].rank1} <br/> 2nd - {contests[1].rank2} <br/> 3rd - {contests[1].rank3}</p>                                                                                                      
            </div>                                    
          </div>                   
        </div>
        <Link to="contests"><button className='btnmore' >View All</button></Link>
      </div>    
      <div className="card contestcard-2" >       
      <div className="container">
      <h2 className="card-title contesttitle-2">Leaderboard</h2>
      <hr/>
      <div className="responsive">
        <table className='leaderboard'>
          <tbody>
            <tr>
              <th className='th'>Name</th>
              <th className='th'>Username</th>
              <th className='th'>Points</th>
            </tr>
            {
              ranks.map((rank, id) => {
                return(
                  <tr key={id}>
                    <td className='td'>{rank.name}</td>
                    <td className='td'>{rank.username}</td>
                    <td className='td'>{rank.points}</td>
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