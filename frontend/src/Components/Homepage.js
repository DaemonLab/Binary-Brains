import React from 'react';
import Navbar from './Navbar';
import Poster from './Poster';
import Schedule from './Schedule';
import Rankings from './Rankings';
import Footer from './Footer';

import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Homepage() {
  return (
    <div>             
      <Poster />        
      <Schedule /> 
      <Rankings />                 
    </div>
  )
}

export default Homepage