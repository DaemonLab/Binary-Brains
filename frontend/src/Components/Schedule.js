import React from 'react'

function Schedule() {  
  return (
    <div className='container'>
      <div className="card" >       
        <div className="card-body">
          <h2 className="card-title courseDetailsHead">Details Of The Course</h2>
          <div className="container pointsCourse">
            <h4>1) Points About Course</h4>
            <h4>2) Points About Course</h4>
            <h4>3) Points About Course</h4> 
          </div>
          <h3 className="courseDetailsHead2" align="Center">Schedule Of The Course</h3>         
          <div className="container lectureTime">
            <h5>When there will be lectures, when contests etc.</h5>
            <h5>When there will be lectures, when contests etc.</h5>
            <h5>When there will be lectures, when contests etc.</h5> 
          </div>
          <br />
          <h4 className="card-text courseDetailsTime" align="center">Timeline or something like that</h4>       
          <br/>             
        </div>
      </div>
    </div>
  ) 
}

export default Schedule