import React from 'react'
import AA from '../images/AA.jpg'
import AK from '../images/AK.jpg'
import DSJ from '../images/DSJ.jpg'
import GM from '../images/GM.jpg'
import IP from '../images/IP.jpg'
import JS from '../images/JS.jpg'
import KA from '../images/KA.jpg'
import KS from '../images/KS.jpg'
import KT from '../images/KT.jpg'
import MP from '../images/MP.jpg'
import MT from '../images/MT.jpg'
import NL from '../images/NL.jpg'
import NS from '../images/NS.JPG'
import PV from '../images/PV.jpeg'
import RD from '../images/RD.jpg'
import SKS from '../images/SKS.jpg'
import SN from '../images/SN.jpg'
import TW from '../images/TW.jpg'
import VS from '../images/VS.jpg'
import Footer from './Footer'

function AboutUs() {
  return (
    <>
    <div className="container aboutBody">
        <div className="container mt-4 organizer">
            <h3 className="aboutHead2 mb-2" align="Center"><strong>Organizer</strong></h3>                    
            <br/>                   
            <img className=" z-depth-2 mb-3 mt-2 img-o" alt="100x100" src={JS} data-holder-rendered="true" />
            <h5 align="center"><strong>Jaskaran Singh</strong></h5>
        </div>
      <div className="p-5 text-center">
        <h1 className="mb-3 aboutHead2"><strong>Teaching Team</strong></h1>     
        <br/>    
        <div className="row">
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={JS} style={{"width": "180px","height":"180px", "borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Jaskaran Singh</strong></h5>
            </div>
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={AA} style={{"width": "180px","height":"180px","borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Anurag Agarwal</strong></h5>
            </div>
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={DSJ} style={{"width": "180px","height":"180px", "borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Deepkamal Singh Jassal</strong></h5>
            </div>
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={SKS} style={{"width": "180px","height":"180px", "borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Saurabh Kumar Singh</strong></h5>
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                <img className="z-depth-2 mb-3" alt="100x100" src={KS} style={{"width": "180px","height":"180px","borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Krishanu saini</strong></h5>
            </div>
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={MT} style={{"width": "180px","height":"180px", "borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Mayank tayal</strong></h5>
            </div>
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={NS} style={{"width": "180px","height":"180px", "borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Nishchay Shroff</strong></h5>
            </div>
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={NL} style={{"width": "180px","height":"180px", "borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Nishkarsh luthra</strong></h5>
            </div>
        <div className="row">           
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={KT} style={{"width": "180px","height":"180px", "borderRadius":"10px"}} data-holder-rendered="true" /> 
                <h5 className="mb-2"><strong>Karri Trived</strong></h5>
            </div>
        </div>
    </div>
  </div>
  <hr color='white' />
  <div className="p-5 text-center">
        <h1 className="mb-3 aboutHead2"><strong>Web Team</strong></h1>
        <br/>
        <div className="row">
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={SN} style={{"width": "180px","height":"180px", "borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Sarthak Nandre</strong></h5>
            </div>
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={KA} style={{"width": "180px","height":"180px", "borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Krish Agarwal</strong></h5>
            </div>
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={PV} style={{"width": "180px","height":"180px", "borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>P.V.Sekhar</strong></h5>
            </div>
        </div>
    </div>
    <hr color='white' />
    <div className="p-5 text-center">
        <h1 className="mb-3 aboutHead2"><strong>Logistics Team</strong></h1>        
        <br/>
        <div className="row">
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={AK} style={{"width": "180px","height":"180px", "borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Anjani Kumar</strong></h5>
            </div>
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={GM} style={{"width": "180px","height":"180px", "borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Gaurav</strong></h5>
            </div>
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={PV} style={{"width": "180px","height":"180px","borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>P.V.Sekhar</strong></h5>
            </div>
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={IP} style={{"width": "180px","height":"180px","borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Ishaan Porwal</strong></h5>
            </div>
        </div>        
    </div>
    <hr color='white' />
    <div className="p-5 text-center">
        <h1 className="mb-3 aboutHead2"><strong>Creative Team</strong></h1>  
        <br/>     
        <div className="row">
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={MP} style={{"width": "180px","height":"180px", "borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Mihir Patel</strong></h5>
            </div>
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={RD} style={{"width": "180px","height":"180px", "borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Rohit Dhanotia</strong></h5>
            </div>
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={TW} style={{"width": "180px","height":"180px", "borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Tanvi Warvadekar</strong></h5>
            </div>
            <div className="col-sm">
                <img className=" z-depth-2 mb-3" alt="100x100" src={VS} style={{"width": "180px","height":"180px", "borderRadius":"10px"}} data-holder-rendered="true" />
                <h5 className="mb-2"><strong>Vineet</strong></h5>
            </div>
        </div>
    </div>            
  </div>
  <br/>
  <br/>
  <Footer />
  </>
  )
}

export default AboutUs