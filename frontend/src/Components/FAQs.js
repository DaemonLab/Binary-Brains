import React from 'react'

function FAQs() {  
  return (
    <div className='container mt-4'>
      <div className="card" >       
        <div className="card-body">
          <h3 className="card-title FaqHead">Difference Between Advanced and Beginners</h3>
          <div className="container pointsCourse">
          <p className="details-2">&bull; The difficulty level of problems in beginner batch is from 900 to 1300 (with reference to Codeforces) &nbsp;&nbsp;and that of the advanced is 1500 to 1800.</p>
          <p className="details-2">&bull; There are no prerequisites required for the beginner level but for the advanced level, you are expected &nbsp;&nbsp;&nbsp;to know all the topics included in the beginners batch. </p>            
          <p className="details-2">&bull; Though the levels are different, the prizes would be same for all the students.</p>
          </div>                        
        </div>
      </div>
      <div className="end"></div>
      <div className="end"></div> 
    </div>
  ) 
}

export default FAQs