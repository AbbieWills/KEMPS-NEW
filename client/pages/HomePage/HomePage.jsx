import React from 'react';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLifeRing, faLocationDot, faShip, faTruckFast, faSterlingSign, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import ImageCarousel from '../../components/Carousel/carousel.jsx';

const HomePage = () => {
  return (
    <>
    <div>
    <div className="background-home">
    </div>
      <div className="row intro-explain-container">
          <h1 className='intro'>Life Jacket Servicing</h1>
          <ImageCarousel />
            <p className='explain'>Welcome to Kemps MPS, your trusted partner for life jacket servicing. We understand the
          importance of safety on the water, and that's why we're committed to keeping your life jackets
          in peak condition. <br/>We make sure your life jackets are ready for any adventure. 
    </p>
      </div>
    </div>
    <div className="features">
      <div className="row">
        <div className="col-md-4">
          <div className="feature-card text-center p-5">
            <FontAwesomeIcon icon={faLifeRing} size="3x" className="mb-3 ring"/>
            <h4 className='iconTitle'>Safety</h4>
            <p>Safety is our top priority. Whether you are a recreational boater, a fisherman,
          or an adventure seeker, you can trust us to provide reliable and professional life jacket
          servicing. 
    </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-card text-center p-4">
            <FontAwesomeIcon icon={faLocationDot} size="3x" className="mb-3 route"/>
            <h4 className='iconTitle'>Ideal Location</h4>
            <p>Located close to Hull, East Yorkshire. We are in the optimal location for all your needs!</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-card text-center p-4">
            <FontAwesomeIcon icon={faCalendarCheck} size="3x" className="mb-3 calendar"/>
            <h4 className='iconTitle'>Quick Service</h4>
            <p >Add some text about quick and good service.</p>
          </div>
        </div>
        <div className="col-md-4" >
          <div className="feature-card text-center p-4">
            <FontAwesomeIcon icon={faTruckFast} size="3x" className="mb-3 truck" />
            <h4 className='iconTitle' >Quick Turnaround</h4>
            <p>Add some text about quick delivery and collection.</p>
            </div>
            </div>
            <div className="col-md-4" >
          <div className="feature-card text-center p-4">
            <FontAwesomeIcon icon={faSterlingSign} size="3x" className="mb-3 pound"/>
            <h4 className='iconTitle' >Competitive Pricing</h4>
            <p>Add some text about pricing.</p>
            </div>
            </div>
            <div className="col-md-4">
          <div className="feature-card text-center p-4">
            <FontAwesomeIcon icon={faShip} size="3x" className="mb-3 ship"/>
            <h4 className='iconTitle'>Experienced</h4>
            <p>With years of experience in the industry, our team of experts is dedicated to ensuring that
          your life jackets meet the highest safety standards.</p>
            </div>
            </div>
      </div>
      </div>
    </>
    
  )
}

export default HomePage