import React from 'react';
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
      <Footer />            
    </div>
  )
}

export default Homepage