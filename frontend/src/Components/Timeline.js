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
                        <li className="usli">Venue - Gargi Seminar Hall</li>
                        <li className="usli">Time - 10:15-11:45am</li>
                      </ul>
                    ) : (
                      <ul>
                        <li className="usli">Topic - Binary Search + Interactive Problems</li>
                        <li className="usli">Tutor - Nishkarsh Luthra</li>
                        <li className="usli">Venue - POD 1-D 105</li>
                        <li className="usli">Time - 10:15-11:45am</li>
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
      ): (
        <div className="loadcont" style={{height:`${height}px`}}>
          <h2 align="center" className="mt-5" style={{color:"white"}}>Loading...</h2>
        </div>
      )}
      </div>
  ) 
}

export default Schedule