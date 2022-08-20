import React from 'react'
import {Link} from 'react-router-dom'
import './Style2.css'

function Prizes() {
  return (
    <div className='container'>
    <div className="card" >       
      <div className="card-body">
        <h2 className="card-title courseDetailsHead">Prizes</h2>
        <div className="container prizeCourse">
          <p className='prc'>Every action has an equal and opposite reaction, 
            so for every problem you solve here, you get a reward 
            from us in form of <strong>Points.</strong> By redeeming the points you can win  
            <strong> Exciting Prizes</strong> of your choice. The exact point system would be revealed later, so stay tuned!
          </p>      
          <Link to="/viewprize"><button className="btnpr">View Prizes</button></Link>
        </div>        
      </div>
    </div>
  </div>
  )
}

export default Prizes