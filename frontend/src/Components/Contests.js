import React, {useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import data from './data'


function Contests() {
    const [contests, Setcontests] = useState(data)
  return (    
    <div>
        <div className="container">                
        <h4 className='upc'>Upcoming</h4>
            {
                contests.map((contest) => {
                    return(
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">{`${contest.name} ${contest.id}`}</h3>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p>(If upcoming or In-progress)Time: {contest.date}</p>
                            <a href="#" class="btn btn-primary">Contest(CF link)</a>
                        </div>
                    </div> 
                    )
                })
            }    
            <h4 className='upc2'>Past Contests</h4>                
            <div class="card">            
                <div class="card-body">
                    <h3 class="card-title">Contest 3</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                    
                    <a href="#" class="btn btn-primary">Contest(CF link)</a>
                </div>
            </div>            
        </div>    
        <Footer />
    </div>         
  )
}

export default Contests