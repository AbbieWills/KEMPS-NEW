import React from 'react';
import './ServicesPage.css';
import ContactLink from '../../components/Contact/Contact-link';



const ServicesPage = () => {

  return (
    <>
      <div className="about">
        <h1 className='servicing-title'>Services</h1>
        <p className='pricing-intro'>At KempsMPS, we understand that quality services should also come with affordability. That's why we take pride in offering competitive pricing for all our customers.</p>
        <div className='services-container'>
          <div className='services-main'>
          <h2 className='service-main-heading'>Services We Offer</h2>
              <ul>
                <li>24/7 service</li>
                <li>Ship chandlery (provisions and stores)</li>
                <li>Food catering and delivery service for cafes, farm shops, and restaurants (catering and general products)</li>
                <li>Crew transfers & general transport</li>
                <li>General courier service</li>
                <li>Crew travel agent (flights, transport, and hotel bookings)</li>
                <li>LSA servicing and stock</li>
              </ul>
            </div>
        </div>
        <div className='service-info'>
        <h2 className='service-heading'>Service Infomation</h2>
          <div className='services'>
          <h3 className='service-subheading'>Ship Chandlery</h3>
                <p className='service-text'>
                Is your vessel needing provisions and stores when on the Humber? Well look no further. <br />  We're your local food chandler for the river Humber and all surrounding ports and wharfs. <br /> 
                All new customers are eligible for a 20% discount for the first 3 orders. <br />
                Contact the office for our product catalogue (full price list included) <a className='mail' href="mailto:enquiries@kempsmps.com">enquiries@kempsmps.com</a> and quote ‘ship chandler service’. <br /> 
                We can cater to deep sea or coastal vessels and provide you with a competitive price 24/7, 365 days a year. </p>
                </div>

                <div className='services'>
                <h3 className='service-subheading'>Catering and General Products</h3>
                <div className="list-container">
                      <p className='service-text'>
                      <ul className="list-1">
                        <li className="list-item">Dairy</li>
                        <li className="list-item">Meats</li>
                        <li className="list-item">Fish</li>
                        <li className="list-item">Cooking ingredients</li>
                        <li className="list-item">Salt, herbs, spices</li> 
                        <li className="list-item">Frozen products</li>
                        <li className="list-item">Sauces</li>
                        <li className="list-item">Hot drinks</li>
                        <li className="list-item">Cold drinks</li>
                      </ul>
                    </p>
                    <p className='service-text'>
                      <ul className="list-2">
                        <li className="list-item">Breads</li>
                        <li className="list-item">Fruit</li>
                        <li className="list-item">Vegetables</li>
                        <li className="list-item">Sweets/biscuits</li>
                        <li className="list-item">Bottled drinks</li>
                        <li className="list-item">Laundry</li>
                        <li className="list-item">Cleaning products</li>
                        <li className="list-item">Kitchen products</li>
                        <li className="list-item">Paper products</li>
                      </ul>
                    </p>
                    </div>
                    <p className='service-text'>
                    We are always looking how we can optimise our services, if there are items you cant find, get in touch and we can easily stock it.  <br />
                    Ordering couldn’t be made more simple. <br />
                    <ul>
                      <li>Directly over the phone (07733404928)</li>
                      <li>Via email <a className='mail' href="mailto:enquiries@kempsmps.com">enquiries@kempsmps.com</a></li>
                      <li>Using our ordering program (sent via email)</li>
                      <li>Using our online shopping portal (coming soon)</li>
                    </ul>
                    All products are quality controlled.
                    </p>
                </div>

                <div className='services'>
                <h3 className='service-subheading'>Our Services Include:</h3>
                <p className='service-text'> 
                <ul>
                  <li>24/7 service</li>
                  <li>Same day and next day delivery (T&C’s apply) no extra charge.</li>
                  <li>No upfront payments required.</li>
                  <li>Delivery to all areas of East Yorkshire.</li>
                  <li>Minimum order of only £40.</li>
                  <li>Payments made within the first 7 days of placing your order grants a 5% discount.</li>
                </ul>
                </p>
                </div>

                <div className='services'>
                <h3 className='service-subheading'>Crew Transfers & General Transport</h3>
                <p className='service-text'>
                      Do you need a last minute crew transfer or an item delivering to or from the vessel? <br />
                      Contact our 24hrs phone line on 07733404928 and let us take care of the situation. <br />
                      <ul>
                        <li>We have 5 seater and 9 seater vans available.</li> 
                        <li>Get in touch for an accurate and competitive quote.</li>
                      </ul>
                      For an accurate quote email: <a className='mail' href="mailto:enquiries@kempsmps.com">enquiries@kempsmps.com</a> and quote 'Transport'
                </p>
                </div>

                <div className='services'>
                <h3 className='service-subheading'>Crew Travel Agent</h3>
                <p className='service-text'>
                We’re fully set up to arrange your crews travel arrangements, be it from flights, transportation and hotels, with a full aftercare included. <br />
                We’re available 24/7 to assist with any changes to your travel arrangements while your crews are on the move using our services. <br />
                For this service contact: <a className='mail' href="mailto:enquiries@kempsmps.com">enquiries@kempsmps.com</a> and quote ‘Travel agent’
                </p>
                </div>

                <div className='services'>
                <h3 className='service-subheading'>General Courier Service</h3>
                <p className='service-text'> Need a reliable and fully insured courier? Well look no further. <br />
                    We have small vans and large vans to cover your delivery needs. <br /> 
                    Ranging from a payload of 730kg for our small vans to 1.7t in our large sized vans. <br /> 
                    <ul>
                      <li>Small van dimensions: L1.78m x B1.56m x H1.1m </li>
                      <li> Large van dimensions: L2.5m x B1.7m xH1.7m </li>
                    </ul>
                    For an accurate quote email: <a className='mail' href="mailto:enquiries@kempsmps.com">enquiries@kempsmps.com</a> and quote ‘Courier’ 
                </p>
                </div>

                <div className='services'>
                <h3 className='service-subheading'>LSA</h3>
                <p className='service-text'>We fully stock all SOLAS and ISO lifejackets, covering a range from inherently buoyant options for recreation users to 100N to 300N+ lifejackets. (All lifejackets are serviced before sent out) <br />
                <ul>
                  <li>We stock a range of SOLAS approved LSA, contact the office with your product query.</li>
                  <li>Lalizas approved lifejacket service center. We service ISO and SOLAS approved lifejackets.</li>
                  <li>We can even rent lifejackets out!</li>

                  </ul>
                  Get in touch for LSA enquiries, advice and products: <a className='mail' href="mailto:enquiries@kempsmps.com">enquiries@kempsmps.com</a> and quote ‘LSA’ 
                </p>
            </div>
        </div>
      </div>
      <ContactLink />
      </>
  );
};


export default ServicesPage;




        {/* <h2 className='sizing-guidelines' id='sizing'>Finding The Right Jacket For You </h2>
        <p className='right-jacket-text'>Determining the ideal life jacket for your needs requires thoughtful consideration. Below is a helpful guide to assist you in making the right selection: </p>
          <p className='sizing-guidelines'> Sizing Guidelines: </p>
          <p className='sizing-text'>
          The majority of level 150 and level 275 inflatable life jackets are manufactured in a single size, typically designed for adults weighing over 40kg. However, it is crucial to refer to the manufacturer's specifications for the specific weight range accommodated by each life jacket model.<br/>
          <p className='understanding'> Understanding Life Jacket Standards: </p>
          All new life jackets sold in the UK and Europe must adhere to ISO 12402 standards.
          Life jackets produced prior to the introduction of ISO 12402 standards must meet the EN393 to EN399 standards. Deciphering ISO 12402:
          ISO 12402 establishes international standards for personal flotation devices, encompassing both life jackets and buoyancy aids.</p>
        <div className='row levels-section'>
          <h2 className='levels-title'>Exploring Life Jacket Levels </h2>
          <div className='individual'>
            <p className='levels'>Level 100:</p>
            <p className='levels-text'>
            This life jacket is suitable for calm, flat waters. It may not possess the capability to right an individual solely through its buoyancy force. Level 100 life jackets are typically non-SOLAS approved.</p> 
            <img className='lj-photo' src={hundered} alt="100-lf" />
          </div>
          <div className='individual'>
          <p className='levels'>Level 150:</p>
          <p className='levels-text'>
              The standard life jacket for use in coastal and offshore waters. Level 150 life jackets are designed to high standards and can effectively right an unconscious person based on buoyancy alone. Note that the thickness and weight of clothing worn may influence its performance.</p> 
            <img className='lj-photo' src={hundredfifty} alt="150-lf" />
          </div>
          <div className='individual'>
          <p className='levels'>Level 275+:</p>
          <p className='levels-text'>
            This life jacket is intended for rugged offshore conditions. Similar to the Level 150, it can right an unconscious person, even when wearing heavy clothing such as immersion suits.</p>
          <img className='lj-photo' src={twohundredseventyfive} alt="275-lf" />
          </div>
        </div>
      </div> */}

