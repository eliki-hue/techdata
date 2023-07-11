import React from 'react';
import './About.css';
import businessImage from '../../images/business.jpg';

function About() {
  return (
    <div className='about-parent bg-info'>
    <div className="about-container bg-light">
      <img src={businessImage}  alt="About Us" className="about-image" />
      <div className="about-text">
        <h1>About Us</h1>
        <p>The company was founded in the year 2016 and
incorporated in March 2018 as a private limited
liability company with major focus on offering
advanced IT professional services in the region.
TECHDATA Technologies leverages its advanced
solutions capabilities and domain expertise across
its regional network to deliver managed solutions to
East African consumers.
TECHDATA Technologies is a rapidly growing
business based in East Africa with significant
partnerships within the region. Going forward, the
company is focusing on new technologies and
innovation to drive its business in East Africa.
Anchored in Kenya and wedded to its traditional
values and strong ethics, TECHDATA
Technologies is building a multinational business
which will achieve growth through excellence and
innovation, while balancing the interests of its
shareholders, its employees and wider society</p>
      </div>
    </div>
    </div>
  );
}

export default About;