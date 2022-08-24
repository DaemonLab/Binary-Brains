import React from 'react'
import {Link} from 'react-router-dom'

function Schedule() {  
  return (
    <div className='container'>
      <div className="card" >       
        <div className="card-body">
          <h2 className="card-title courseDetailsHead">Details Of The Course</h2>
          <div className="container pointsCourse">
            <p className="details">Welcome to <strong>The Binary Brains CP Course</strong> website brought to you by <strong>The Programming Club, IIT Indore</strong>. This is a free CP course for the students of IIT Indore willing to learn Competetive Programming. Offline lectures would be conducted by the seniors of IIT INDORE and also the contests would be held every week based on the topic.</p>
            <p className="details" align="center"><strong>Deadline for registrations is 31st August.</strong></p>
            <p className="details-2">&bull; Course will be starting from 3rd of September and will be 11 weeks long.</p>            
            <p className="details-2">&bull; Course is divided in two Batches - Beginner and Advanced.</p>
            <p className="details-2">&bull; The classes will be held on weekends, preferably on Saturday.</p>
            <p className="details-2">&bull; The duration of each class is  1 ½ - 2 hour.</p>
            <p className="details-2">&bull; The classes will be conducted in the lecture hall and the seminar hall for advanced and beginners &nbsp;&nbsp;&nbsp;respectively.</p>
            <p className="details-2">&bull; The students will get a chance of taking part in a contest every friday night (day and time might vary).</p>
            <p className="details-2">&bull; Students are awarded points based on their performance in the contests and also by solving the daily &nbsp;&nbsp; practice problem.</p>
            <p className="details-2">&bull; Students can also redeem these points for <strong>Exciting Prizes!!</strong></p>
            <p align="center" className='h4x'>All the doubt support will be handled on the <strong>Discord server</strong>.<span className='small'>(Link will be shared on 1st Sept via mail)</span></p>
          </div>
          <h3 className="courseDetailsHead2" align="Center">Difference between Beginner and Advanced</h3>                   
          <div className="container tabletop">
            <table className='tabtop'>
              <tbody>
              <tr>
                <th className='thtop'>Beginner</th>                
                <th className='thtop'>Advanced</th>                                    
              </tr>
              <tr>
                  <td className="tdtop-2 tdbeg"> This level is for complete beginners and is intended to get your CP journey kick started from absolute scratch. A major focus in this level will be on making students comfortable in thinking about various approaches to solve problems, reasoning on good and bad ideas, and finally being able to implement them on their own. There are no prerequisites for beginners level.</td>  
                  <td className="tdtop-2 tda"> This level is for people who are comfortable in solving at least 2 problems in most Div2 rounds in codeforces. After completing this course, students can expect to be comfortable in approaching most problems rated greater than 1600 on codeforces. Here, we will focus on making you comfortable in  solving the 3rd problem in codeforces Div2 Rounds. For advanced level you need to know all the topics covered in beginners level.</td>
                </tr> 
              </tbody>               
            </table>
            <br/>
            <h3 className="courseDetailsHead2" align="center">Topics to be covered</h3>
            <div className="responsive scrollTable">

            <table className='tabtop leaderboard scrollTable'>
              <tbody>
                <tr>
                  <th className='thtop'>Beginner</th>                
                  <th className='thtop'>Advanced</th>                                    
                </tr>                          
                <tr>
                  <td className="tdtop">
                    <div className="anythinglisting4">
                    <ul>
                        <li>C++ Basics I</li>
                        <li>C++ Basics II</li>
                        <li>Time Complexity And Basic Problem Solving</li>
                        <li>Recursion Backtracking</li>
                        <li>Searching Sorting And Two Pointers</li>
                        <li>STL I</li>
                        <li>STL II</li>
                        <li>Prefix Sum, Circular Arrys And Difference Arrays</li>
                        <li>Number Theory I</li>
                        <li>Number Theory II</li>
                        <li>Bit Manipulation</li>
                    </ul>
                    </div>
                  </td>
                  <td className="tdtop">
                    <div className="anythinglisting4">
                    <ul>
                        <li>Binary Search + Interactive Problems</li>
                        <li>Number Theory I</li>
                        <li>Number Theory II</li>
                        <li>Trees I</li>
                        <li>Trees II</li>
                        <li>Dynamic Programming I</li>
                        <li>Dynamic Programming II</li>
                        <li>Dynamic Programming III</li>
                        <li>Graphs I</li>
                        <li>Graphs II</li>
                        <li>Range Questions</li>
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
    </div>
  ) 
}

export default Schedule