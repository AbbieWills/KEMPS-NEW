import React from 'react';
import './ServicesPage.css';

const ServicesPage = () => {

  return (
    <>
        <div className='background'>
      </div>
      <div className="about">
        <h1>Servicing and Pricing</h1>
        <p className='price-list'>
        Price list: <br/>
          -Solas approved lifejacket service- £20 (this doesn't include the cost of any replaceable parts)
          <br/>-non-solas lifejacket service- £15 (this doesn't include the cost of any replaceable parts)
        </p>
        <p className='contact-link-text'> <a className='contact-link' href='/contact'>Contact us</a> today to learn more about our services and how we can help you stay safe on the water.</p>
    
      </div>

    </>
  );
};

export default ServicesPage;
