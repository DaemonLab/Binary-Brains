import React from 'react'
import {Link} from 'react-router-dom'

function Schedule() {  
  return (
    <div className='container'>
      <div className="card" >       
        <div className="card-body">
          <h2 className="card-title courseDetailsHead">Details Of The Course</h2>
          <div className="container pointsCourse">
            <p className="details">Welcome to <strong>The Binary Brains CP Course</strong> website brought to you by <strong>The Programming Club, IIT Indore</strong>. This is a free CP course for the students of IIT Indore willing to learn Competetive Programming. There will be offline lectures conducted by the seniors of IIT INDORE also there will be contests for the students conducted every week and much more. </p>
            <p className="details-2">&bull; Course will be starting from 3rd of September and will be 11 weeks long.</p>            
            <p className="details-2">&bull; Course is divided in two Batches - Beginner and Advanced. <span className='linkfaq'>(Dont know what to choose?<Link to="/faq" className='linkfaq'> Click Here.</Link>)</span></p>
            <p className="details-2">&bull; The classes will be held on weekends, preferably on Saturday.</p>
            <p className="details-2">&bull; The duration of each class is  1 ½ - 2 hour.</p>
            <p className="details-2">&bull; The classes will be conducted in the lecture hall and the seminar hall for advanced and beginners &nbsp;&nbsp;&nbsp;respectively.</p>
            <p className="details-2">&bull; The students will get a chance of taking part in a contest every friday night (day and time might vary).</p>
            <p className="details-2">&bull; Students are awarded points based on their performance in the contests and also by solving the daily &nbsp;&nbsp; practice problem.</p>
            <p className="details-2">&bull; Students can also redeem these points for <strong>Exciting Prizes!!</strong><Link to="/viewprize" className='pr2'> (View Prizes)</Link></p>
            <p align="center" className='h4x'>Join the discord server <strong>NOW</strong> for doubt solving and further communications!</p>
          </div>
          <h3 className="courseDetailsHead2" align="Center">Topics Of The Course</h3>         
          <h5 className="h5x" align="center">(Lecture wise List of Topics)</h5>
          <div className="container tabletop">
            <table className='tabtop'>
              <tbody>
                <tr>
                  <th className='thtop'>Beginner</th>                
                  <th className='thtop'>Advanced</th>                  
                </tr>                                
                {/* <tr>
                  <div class="container no-oldie">
                      <p class="arrow_box">&bull; C++ Basics I</p>
                  </div>
                  <div class="arrow"><span>&bull; C++ Basics I</span></div>
                  <td className="tdtop">&bull; C++ Basics I</td>  
                  <td className="tdtop">&bull; Binary Search + Interactive Problems</td>
                  <div class="container no-oldie">
                      <p class="arrow_box">&bull; Binary Search + Interactive Problems</p>
                  </div>
                </tr>                
                <tr>
                  <td className="tdtop">&bull; C++ Basics II</td>  
                  <td className="tdtop">&bull; Number Theory I</td>
                </tr>                
                <tr>
                  <td className="tdtop">&bull; Time Complexity And Basic Problem Solving</td>  
                  <td className="tdtop">&bull; Number Theory II</td>
                </tr>                
                <tr>
                  <td className="tdtop">&bull; Recursion Backtracking</td>  
                  <td className="tdtop">&bull; Trees I</td>
                </tr>                
                <tr>
                  <td className="tdtop">&bull; Searching Sorting And Two Pointers</td>  
                  <td className="tdtop">&bull; Trees II</td>
                </tr>                
                <tr>
                  <td className="tdtop">&bull; STL I</td>  
                  <td className="tdtop">&bull; Dynamic Programming I</td>
                </tr>                
                <tr>
                  <td className="tdtop">&bull; STL II</td>  
                  <td className="tdtop">&bull; Dynamic Programming II</td>
                </tr>                
                <tr>
                  <td className="tdtop">&bull; Prefix Sum, Circular Arrys And Difference Arrays</td>  
                  <td className="tdtop">&bull; Dynamic Programming III</td>
                </tr>                
                <tr>
                  <td className="tdtop">&bull; Number Theory I</td>  
                  <td className="tdtop">&bull; Graphs I</td>
                </tr>                
                <tr>
                  <td className="tdtop">&bull; Number Theory II</td>  
                  <td className="tdtop">&bull; Graphs II</td>
                </tr>                
                <tr>
                  <td className="tdtop">&bull; Bit Manipulation</td>  
                  <td className="tdtop">&bull; Range Questions</td>
                </tr>                 */}
                <tr>
                  <td className="tdtop">
                    <div class="anythinglisting4">
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
                    <div class="anythinglisting4">
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
          <br />               
          <br/>             
        </div>
      </div>
    </div>
  ) 
}

export default Schedule