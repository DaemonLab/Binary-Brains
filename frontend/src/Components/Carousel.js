import React from 'react'
import img1 from '../1920.jpg'


function Carousel() {
  return (    
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img className="imgx" src={img1} />                
            <div className="carousel-content">
                <h4>This image is about a beach</h4>                                        
            </div>                
        </div>
    </div>
  )
}

export default Carousel