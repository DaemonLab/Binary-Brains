import React from 'react';
import Poster from './Poster';
import Schedule from './Schedule';
import Rankings from './Rankings';
import Prizes from './Prizes';
import Footer from './Footer';

import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Homepage() {
  return (
    <div>             
      <Poster />        
      <Schedule /> 
      <Rankings />     
      <Prizes />
      <Footer />                  
    </div>
  )
}

export default Homepage