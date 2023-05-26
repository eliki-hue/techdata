import React from 'react';
// import Carousel from './Carousel';
import microsoft from '../../images/partners/microsoft.png'
import dell from '../../images/partners/dell.png'
import cisco from '../../images/partners/cisco.png'
import opliciti from '../../images/partners/oplicit.png'
import hp from '../../images/partners/hp.png'
  // customers import
import afa from '../../images/customers/afa.png'
import ana from '../../images/customers/ana ltd.png'
import cphrm from '../../images/customers/cphrm group.png'
import face  from '../../images/customers/face tech.png'
import ntsa from '../../images/customers/ntsa.png'
import nwaha from '../../images/customers/nwaha.png'
import uspc from '../../images/customers/uspc.png'

// const images = [
//   microsoft,
//   dell,
//   hp,
//   opliciti,
//   cisco
// ];

const Partners = () => {
  return (
    <>
      <h1>Our Partners</h1><br/><br/>
    <div className="slideshow">
      
      <div className='imagesslide'>
        <div className='imgslide'>
        <img className="img " variant="top" src={cisco} />
      <img className="img " variant="top" src={microsoft}/>
        <img className="img " variant="top" src={hp} />
      <img className="img " variant="top" src={opliciti} />
      <img className="img " variant="top" src={microsoft} />
      <img className="img " variant="top" width="" src={dell} />
      <img className="img " variant="top" src={hp} />
      <img className="img " variant="top" src={opliciti} />
      <img className="img " variant="top" src={cisco} />
      <img className="img " variant="top" src={microsoft} />
      <img className="img " variant="top" src={dell} />
      <img className="img " variant="top" src={hp} />
      <img className="img " variant="top" src={opliciti} />
      <img className="img " variant="top" src={cisco} />
      <img className="img " variant="top" src={microsoft} />
      <img className="img " variant="top" src={dell} />
      <img className="img " variant="top" src={hp} />
      <img className="img " variant="top" src={opliciti} />
      <img className="img " variant="top" src={cisco} />
      <img className="img " variant="top" src={hp} />
      <img className="img " variant="top" src={opliciti} />
      <img className="img " variant="top" src={cisco} />
      <img className="img " variant="top" src={hp} />
      
      </div>
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>




    </div>

    {/* customers */}

    <h1>Our Customers</h1><br/><br/><br/>
    <div className="slideshow">
      
      <div className='imagesslide'>
        <div className='imgslide'>
        <img className="img " variant="top" src={face} />
        <img className="img " variant="top" src={afa} />
      <img className="img " variant="top" src={ana}/>
        <img className="img " variant="top" src={cphrm} />
      <img className="img " variant="top" src={face} />
      <img className="img " variant="top" src={ntsa} />
      <img className="img " variant="top" width="" src={uspc} />
      <img className="img " variant="top" width="" src={nwaha} />
      <img className="img " variant="top" src={afa} />
      <img className="img " variant="top" src={ana}/>
        <img className="img " variant="top" src={cphrm} />
      <img className="img " variant="top" src={face} />
      <img className="img " variant="top" src={ntsa} />
      <img className="img " variant="top" width="" src={uspc} />
      <img className="img " variant="top" width="" src={nwaha} />
      <img className="img " variant="top" src={afa} />
      <img className="img " variant="top" src={ana}/>
        <img className="img " variant="top" src={cphrm} />
      <img className="img " variant="top" src={face} />
      <img className="img " variant="top" src={ntsa} />
      {/* <img className="img " width="50%" variant="top" src={ana}/> */}
      <img className="img " variant="top" width="" src={nwaha} />
        <img className="img " variant="top" src={cphrm} />
      <img className="img " variant="top" src={face} />
      <img className="img " variant="top" src={ntsa} />
     
      </div>
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>




    </div>
    </>
  );
};

export default Partners;






