import React from 'react'

function Footer() {
  return (
    // <div>lauda</div>
    
    // // <div className='footer'>
    // //     <div className="container">
    // //         <h2 className="thanksNote" align="center">Thanks For Visiting!</h2>
    // //         <h5 className='insta'><a href="https://www.instagram.com/pclub_iiti/" className='instalink' target="_blank">Instagram</a></h5>                                  
    // //         <h5 className='disc'><a href="https://www.facebook.com/pclubiiti/" className='discord' target="_blank">Facebook</a></h5>                                  
    // //         <br/>                                                          
    // //     </div>
    // // </div>
    <footer className="text-center text-white">
      <h2 className="thanksNote" align="center">Thanks For Visiting!</h2>
      <h6 className='contact'>Contact Details : Jaskaran Singh - <span className="small">8872150472</span></h6>
      <div className="container p-4 pb-0">
        <section>
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/pclubiiti/" role="button"
            ><i className="fab fa-facebook-f"></i
          ></a>
    
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.iiti.ac.in/" role="button"
            ><i className="fab fa-google"></i
          ></a>
    
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/pclub_iiti/" role="button"
            ><i className="fab fa-instagram"></i
          ></a>
    
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/company/progclub-iiti/mycompany/" role="button"
            ><i className="fab fa-linkedin-in"></i
          ></a>
    
          <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/DaemonLab" role="button"
            ><i className="fab fa-github"></i
          ></a>
        </section>
      </div>
    
      <div className="text-center p-3">
        © 2022 Copyright:
        <a className="text-white" href="http://progclub.iiti.ac.in/"> The Programming Club, IIT Indore</a>
      </div>
    </footer>
  )
}

export default Footer