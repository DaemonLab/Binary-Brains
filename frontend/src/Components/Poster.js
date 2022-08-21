import React from 'react'
import img1 from './BBposterx.png'
import img2 from './logox.png'
import { Link } from 'react-router-dom'

function Poster() {
  return (
    <div className="container conts">
        <img src={img1} className="poster"/>
        <Link to="/signup"><button className="btnx">Register For The Course!</button></Link>
    </div>
  )
}

export default Poster