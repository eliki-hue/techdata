import React from 'react'
import './introduction.css'
import logo from '../../images/techdata logo.png'
import headerimage from '../../images/network.jpg'
// import Navbar from '../navbar/Navbar'
const introduction = () => {
  return (
    <div>
        <div className='container-fluid' >
            <div>
              {/* <img className="img image" variant="top" src={logo} /> */}
             </div>
            <div className='row intro-row2'>
              
                <div className='col intro-col' >
                    
                <img className="img imageheader" variant="top" src={headerimage} />
                <div className='overlay'>
                {/* <Navbar/> */}
                </div>
                
                <div className='heading'>
                  <h1 className='heading1'>TECHDATA Technologies Limited</h1><br/>
                </div>
                  {/* <img className="img" variant="top" src={logo} /> */}
                
                </div>

            </div>

        </div>
    </div>
  )
}

export default introduction