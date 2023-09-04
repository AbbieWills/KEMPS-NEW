import React from 'react'
import './homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLifeRing, faLocationDot, faShip, faTruckFast, faSterlingSign, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import ImageCarousel from '../../components/Carousel/carousel.jsx';


const HomePage = () => {
  return (
    <>
    <div data-testid="title_container">
    <div className="background-home">
    </div>
      <div className="row intro-explain-container">
          <h1 className='intro' data-testid = "home_title">Life-Jacket Servicing!</h1>
          <ImageCarousel />
            <p className='explain' data-testid = "home_description">At Kemps MPS, we service life jackets as we understand the importance of keeping your 
      life jackets in peak condition.</p>
      </div>
    </div>
    <div className="features" data-testid="icons_container">
      <div className="row">
        <div className="col-md-4" data-testid="explore_container">
          <div className="feature-card text-center p-5">
            <FontAwesomeIcon icon={faLifeRing} size="3x" className="mb-3 ring" data-testid="explore_icon"/>
            <h4 className='iconTitle' data-testid="explore_title" >Safety</h4>
            <p data-testid="explore_description">When it comes to your safety on the water, there's no room for compromise. 
    </p>
          </div>
        </div>
        <div className="col-md-4" data-testid="routes_container">
          <div className="feature-card text-center p-4">
            <FontAwesomeIcon icon={faLocationDot} size="3x" className="mb- route" data-testid="routes_icon" />
            <h4 className='iconTitle' data-testid="routes_title">Ideal Location</h4>
            <p data-testid="routes_description">Located close to Hull, East Yorkshire. We are in the optimal location for all your needs!</p>
          </div>
        </div>
        <div className="col-md-4" data-testid="sustainable_container">
          <div className="feature-card text-center p-4">
            <FontAwesomeIcon icon={faCalendarCheck} size="3x" className="mb-3 calendar" data-testid="sustainable_icon"/>
            <h4 className='iconTitle' data-testid="sustainable_title">Quick Service</h4>
            <p data-testid="sustainable_description">Add some text about quick and good service.</p>
          </div>
        </div>
        <div className="col-md-4" data-testid="sustainable_container">
          <div className="feature-card text-center p-4">
            <FontAwesomeIcon icon={faTruckFast} size="3x" className="mb-3 truck" data-testid="sustainable_icon"/>
            <h4 className='iconTitle' data-testid="sustainable_title">Quick Turnaround</h4>
            <p data-testid="sustainable_description">Add some text about quick delivery and collection.</p>
            </div>
            </div>
            <div className="col-md-4" data-testid="sustainable_container">
          <div className="feature-card text-center p-4">
            <FontAwesomeIcon icon={faSterlingSign} size="3x" className="mb-3 pound" data-testid="sustainable_icon"/>
            <h4 className='iconTitle' data-testid="sustainable_title">Competitive Pricing</h4>
            <p data-testid="sustainable_description">Add some text about pricing.</p>
            </div>
            </div>
            <div className="col-md-4" data-testid="sustainable_container">
          <div className="feature-card text-center p-4">
            <FontAwesomeIcon icon={faShip} size="3x" className="mb-3 ship" data-testid="sustainable_icon"/>
            <h4 className='iconTitle' data-testid="sustainable_title">Experienced</h4>
            <p data-testid="sustainable_description">Add some text about experience.</p>
            </div>
            </div>
      </div>
      </div>
    </>
    
  )
}

export default HomePage