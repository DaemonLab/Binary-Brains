import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Schedule() {  

  const [state, setState] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      const res1 = await axios.get("https://p-club-iiti-cp.herokuapp.com/profile", {
        headers: { token: localStorage.getItem("token") },
      });
      setState(res1.data)
    })();
  },[]);

  return (
    <div className='container mt-4' style={{height:"1100px"}}>
      <div className="card">       
        <div className="card-body">    
        <h2 className="upcomingContestHead" align="center">Schedule Of The Course</h2>
        <h4 align="center" className="mt-4 usHead" >Upcoming Session</h4>
            <div className="responsive scrollTable">
            <table className='tabtop leaderboard scrollTable'>
              <tbody>                
                <tr>
                  <td className="tdtop">
                    <div className="anythinglisting4">
                    { state.difficulty == 'beginner' ? (
                      <ul>
                        <li className="usli">Topic - C++ Basics I</li>
                        <li className="usli">Tutor - Jaskaran Singh</li>
                        <li className="usli">Venue - Maitreya Hall</li>
                        <li className="usli">Time - 4:30pm</li>
                      </ul>
                    ) : (
                      <ul>
                        <li className="usli">Topic - Binary Search + Interactive Problems</li>
                        <li className="usli">Tutor - Nishkarsh Luthra</li>
                        <li className="usli">Venue - Maitreya Hall</li>
                        <li className="usli">Time - 4:30pm</li>
                      </ul>
                    )}
                    </div>
                  </td>                                  
                </tr>
              </tbody>
            </table>         
            </div>
          </div>
          <br />               
          <br/>             
        </div>
      </div>
  ) 
}

export default Schedule