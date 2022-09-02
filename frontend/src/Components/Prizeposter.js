import React from 'react'
import img from './prizeposter.png'
import LazyLoad from 'react-lazy-load'

function Prizeposter() {
  return (
    <div className='container'>
      <LazyLoad>
        <img src={img} alt="..." className='pposter'/>
      </LazyLoad>  
    </div>
  )
}

export default Prizeposter