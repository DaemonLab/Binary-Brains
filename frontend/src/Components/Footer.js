import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <h2 className="thanksNote" align="center">Thanks For Visiting!</h2>
            <button className='btninsta' href="https://www.instagram.com/pclub_iiti/"><h5><a href="https://www.instagram.com/pclub_iiti/" className='instalink' target="_blank">Instagram</a></h5></button>
            <button className='btnfb' href="https://www.facebook.com/pclubiiti/" ><h5><a href="https://www.facebook.com/pclubiiti/" className='discord' target="_blank">Facebook</a></h5></button>
            <h6 className='contact'>Contact Details : Jaskaran Singh - <span className="small">8872150472</span></h6>
            <br/>                                                          
        </div>
    </div>
  )
}

export default Footer