import React from 'react';
import CarouselCustomer from './CarouselCustomer';
import Carousel from '../partners/Carousel'
import microsoft from '../../images/partners/microsoft.png'
import dell from '../../images/partners/dell.png'
import cisco from '../../images/partners/cisco.png'
import opliciti from '../../images/partners/oplicit.png'
import hp from '../../images/partners/hp.png'





const images = [
  microsoft,
  dell,
  hp,
  opliciti,
  cisco
];

const Customers = () => {
  return (
    <>
      <h1>Our Customers</h1>
    <div className="slideshow2">
      
      {/* <Carousel className="images" images={images} /> */}
      <div className='imagesslide2'>
        <div className='imgslide2'>
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
      </div>
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>




    </div>
    </>
  );
};

export default Customers;






