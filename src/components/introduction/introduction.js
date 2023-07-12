import React from 'react'
import './introduction.css'
import logo from '../../images/techdata logo.png'
import headerimage from '../../images/network.jpg'
// import Navbar from '../navbar/Navbar'
const introduction = () => {
  return (
    <div id='home'>
        <div className='container-fluid main-container' >
            
            <div className='row intro-row2'>
              
                <div className='col intro-col' >
                    
                <img className="imageheader" variant="top" src={headerimage} />
                <div className='overlay'>
                {/* <div className='liquidshape'></div> */}
                </div>
                
                <div className='heading'>
                  <h1 className='heading1'>TECHDATA Technologies Limited</h1><br/>
                </div>
                  {/* <img className="img" variant="top" src={logo} /> */}
                
                </div>


              
            </div>
              
        </div>
        
        <div className='animation'>
                <div class="div1" id="one"></div>
                <div class="div1" id="two"></div>
                <div class="div2" id="three"></div>
                <div class="div2" id="four"></div>
              </div>
    </div>
  )
}

export default introduction