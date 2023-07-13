import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-parent bg-info' id='contacts'>
    <div className="contact-container bg-info">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <div className="contact-section">
          <h3>Location</h3>
          <div className="contact-info">TECHDATA Technologies Ltd</div>
          <div className="contact-info">1st Fl, Bhagwanji House</div>
          <div className="contact-info">P.O. Box 19490 00100</div>
          <div className="contact-info">Nairobi, Kenya</div>
        </div>
        <div className="contact-section">
          <h3>Official Contact</h3>
          <div className="contact-info">Phone: +254 722 970671 / +254 715 594957</div>
          <div className="contact-info">Email: info@techdatatechnologies.com</div>
          <div className="contact-info">Website: www.techdatatechnologies.com</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact