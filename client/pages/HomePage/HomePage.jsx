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
            <p className='explain'>At Kemps MPS, we service life jackets as we understand the importance of keeping your 
      life jackets in peak condition.</p>
      </div>
    </div>
    <div className="features">
      <div className="row">
        <div className="col-md-4">
          <div className="feature-card text-center p-5">
            <FontAwesomeIcon icon={faLifeRing} size="3x" className="mb-3 ring"/>
            <h4 className='iconTitle'>Safety</h4>
            <p>When it comes to your safety on the water, there's no room for compromise. 
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
            <p >Add some text about experience.</p>
            </div>
            </div>
      </div>
      </div>
    </>
    
  )
}

export default HomePage