import React from 'react'
import {Link} from 'react-router-dom'

function Schedule() {  
  return (
    <div className='container mt-4' style={{height:"1100px"}}>
      <div className="card">       
        <div className="card-body">    
        <h2 className="upcomingContestHead" align="center">Schedule Of The Course</h2>
            <div className="responsive scrollTable">
            <table className='tabtop leaderboard scrollTable'>
              <tbody>
                <tr>
                  <th className='thtop'>Beginner</th>
                  <th className='thtop'>Advacned</th>
                </tr>                                                        
                <tr>
                  <td className="tdtop">
                    <div className="anythinglisting4">
                    <ul>
                        <li>C++ Basics I</li>                        
                    </ul>
                    </div>
                  </td>
                  <td className="tdtop">
                    <div className="anythinglisting4">
                    <ul>
                        <li>C++ Basics I</li>                        
                    </ul>
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