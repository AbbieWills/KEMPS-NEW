import React from 'react';
import './ServicesPage.css';
import hundered from './hundered.png'
import hundredfifty from './onefifty.png'
import twohundredseventyfive from './twosevenfive.png'


const ServicesPage = () => {

  return (
    <>
      <div className="about">
        <h1 className='servicing-title'>Servicing and Pricing</h1>
        <h2>Finding The Right Jacket For You </h2>
        <p className='right-jacket-text'>Determining the ideal lifejacket for your needs requires thoughtful consideration. Below is a helpful guide to assist you in making the right selection. </p>
          <p className='sizing-guidelines'> Sizing Guidelines: </p>
          <p className='sizing-text'>
          The majority of level 150 and level 275 inflatable lifejackets are manufactured in a single size, typically designed for adults weighing over 40kg. However, it is crucial to refer to the manufacturer's specifications for the specific weight range accommodated by each lifejacket model.<br/>
          <p className='understanding'> Understanding Lifejacket Standards: </p>
          All new lifejackets sold in the UK and Europe must adhere to ISO 12402 standards.
          Lifejackets produced prior to the introduction of ISO 12402 standards must meet the EN393 to EN399 standards. Deciphering ISO 12402:
          ISO 12402 establishes international standards for personal flotation devices, encompassing both life jackets and buoyancy aids.</p>
        <div className='row levels-section'>
          <h2 className='levels-title'>Exploring Life Jacket Levels </h2>
          <div className='individual'>
            <p className='levels'>Level 100:</p>
            <p className='levels-text'>
            This life jacket is suitable for calm, flat waters. It may not possess the capability to right an individual solely through its buoyancy force. Level 100 lifejackets are typically non-SOLAS approved.</p> <img className='lj-photo' src={hundered} alt="100-lf" />
          </div>
          <div className='individual'>
          <p className='levels'>Level 150:</p>
          <p className='levels-text'>
              The standard life jacket for use in coastal and offshore waters. Level 150 lifejackets are designed to high standards and can effectively right an unconscious person based on buoyancy alone. Note that the thickness and weight of clothing worn may influence its performance.</p> <img className='lj-photo' src={hundredfifty} alt="150-lf" />
          </div>
          <div className='individual'>
          <p className='levels'>Level 275+:</p>
          <p className='levels-text'>
            This life jacket is intended for rugged offshore conditions. Similar to the Level 150, it can right an unconscious person, even when wearing heavy clothing such as immersion suits.</p> <img className='lj-photo' src={twohundredseventyfive} alt="275-lf" />
          </div>
        </div>
       <div className='pricing'>
          <h2>Pricing</h2>
          <ul className='price-list'>
            <li>
              <strong>Solas approved lifejacket service:</strong> £20 (excluding the cost of any replaceable parts)
            </li>
            <li>
              <strong>Non-Solas lifejacket service:</strong> £15 (excluding the cost of any replaceable parts)
            </li>
          </ul>
        </div>

        <p className='contact-link-text'> <a className='contact-link' href='/contact'>Contact us</a> today to learn more about our services and how we can help you stay safe on the water.</p>
    
      </div>

    </>
  );
};


export default ServicesPage;
