import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


function useWindowSize() {
  const [size, setSize] = React.useState([window.innerHeight, window.innerWidth]);
  React.useEffect(() =>{
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    }
    window.addEventListener("resize", handleResize);
  },[])
  return size;
}

function Schedule() {  
  const [height,width] = useWindowSize();
  const [state, setState] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      const res1 = await axios.get("https://p-club-iiti-cp.herokuapp.com/profile", {
        headers: { token: localStorage.getItem("token") },
      });
      setState(res1.data);
      setLoading(true);
    })();
  },[]);

  return (
    <div className='container mt-4' style={{height:"1100px"}}>
      {loading ? (
      <div className="card">       
        <div className="card-body">    
        <h2 className="upcomingContestHead" align="center">Schedule Of The Course</h2>
        <h4 align="center" className="mt-4 usHead" style={{paddingLeft:"40px"}}>Upcoming Session</h4>
            <div className="responsive scrollTable">
            <table className='tabtop leaderboard scrollTable'>
              <tbody>                
                <tr>
                  <td className="tdtop">
                    <div className="anythinglisting4">                      
                    { state.difficulty == 'beginner' ? (
                      <div>
                        <h3 align="center">Saturday</h3>
                        <ul>
                          <li className="usli">Topic - C++ Basics II</li>
                          <li className="usli">Tutor - Nischay Shroff</li>                          
                          <li className="usli">Venue - Gargi Seminar Hall</li>
                          <li className="usli">Time - 5:00-6:30pm</li>
                        </ul>
                        <br/>
                        <h3 align="center">Sunday</h3>
                        <ul>
                        <li className="usli">Topic - Time Complexity + Basic problem solving</li>
                        <li className="usli">Tutor - Krishanu Saini</li>                        
                        <li className="usli">Venue - Gargi Seminar Hall</li>
                        <li className="usli">Time - 11:30-1:00pm</li>
                      </ul>
                    </div>
                    ) : (
                      <div>
                        <h3 align="center">Saturday</h3>
                        <ul>
                          <li className="usli">Topic - Number Theory I</li>
                          <li className="usli">Tutor - Nishkarsh Luthra</li>
                          <li className="usli">Venue - Sandipani Seminar Hall</li>
                          <li className="usli">Time - 5:00-6:30pm</li>
                        </ul>
                        <br/>
                        <h3 align="center">Sunday</h3>
                        <ul>
                          <li className="usli">Topic - Number Theory II</li>
                          <li className="usli">Tutor - Nishkarsh Luthra</li>
                          <li className="usli">Venue - Sandipani Seminar Hall</li>
                          <li className="usli">Time - 11:30-1:00pm</li>
                        </ul>
                      </div>
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
      ): (
        <div className="loadcont" style={{height:`${height}px`}}>
          <h2 align="center" className="mt-5" style={{color:"white"}}>Loading...</h2>
        </div>
      )}
      </div>
  ) 
}

export default Schedule