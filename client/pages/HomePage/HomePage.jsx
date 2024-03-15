import React from 'react';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faShip, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import Grid from '../../components/Grid/Grid';
import ContactLink from '../../components/Contact/Contact-link';
import Shop from '../../components/Shop/Shop';
// import ImageCarousel from '../../components/Carousel/carousel.jsx';

const HomePage = () => {
  return (
    <>

      <div className="row intro-explain-container">
          {/* <ImageCarousel /> */}
          <p className='welcome'>Welcome to Kemps Maritime Professional Services. <br />
          We provide a local ship food chandlery service for all ports on the River Humber, Trent, and Ouse, as well as covering a range of in-house marine services 24 hours a day.</p>
          <Shop />
          <Grid />
      </div>

    <div className="features">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <div className="feature-card text-center">
            <FontAwesomeIcon icon={faClock} size="3x" className="mb-3 clock"/>
            <h4 className='iconTitle'>Here for you, any time</h4>
            <p>We appreciate that businesses are juggling many jobs around all at once and you want simplicity. 
              We don’t have complex communication lines, we assign one person to your request and they will see you through the full process of your requirements. 
              We are flexible and if you need a service provider last minute you can call on us to be there. </p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <div className="feature-card text-center">
            <FontAwesomeIcon icon={faLocationDot} size="3x" className="mb-3 route"/>
            <h4 className='iconTitle'>Ideal Location</h4>
            <p>Ideally located in Hull, East Yorkshire, we are perfectly suited to provide our services across the entire Humber. Our proximity allows us to offer same-day and next-day ordering and delivery for our in-person services!</p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6" >
          <div className="feature-card text-center">
            <FontAwesomeIcon icon={faTruckFast} size="3x" className="mb-3 truck" />
            <h4 className='iconTitle'>Quick Turnaround</h4>
            <p>With our efficient operations, proactive planning, and dedicated team, we offer round-the-clock services. We pride ourselves on providing reliable completion times and are committed to going the extra mile with our 'can-do' mentality to ensure every job is completed on time and to your standard.</p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <div className="feature-card text-center">
            <FontAwesomeIcon icon={faShip} size="3x" className="mb-3 ship"/>
            <h4 className='iconTitle'>Experienced</h4>
            <p>Our team members come from maritime and transportation backgrounds, bringing years of industry experience to provide you with a trusted and dedicated service.</p>
          </div>
        </div>
      </div>      
      </div>
      <ContactLink />


    </>
    
  )
}

export default HomePage