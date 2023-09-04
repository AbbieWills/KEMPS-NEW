import React from 'react';
import './JourneyPage.css';
import waves from './Wave.svg'

const AboutPage = () => {

  return (
    <>
        <div className='background'>
      <img className='waves' src={waves} alt="Waves" />
      </div>
      <div className="about">
        <h1>About Us</h1>
        <p>
          Welcome to Kemps MPS, your trusted partner for life jacket servicing. We understand the
          importance of safety on the water, and that's why we're committed to keeping your life jackets
          in peak condition.
        </p>
        <p>
          With years of experience in the industry, our team of experts is dedicated to ensuring that
          your life jackets meet the highest safety standards. We offer comprehensive servicing and
          inspection to make sure your life jackets are ready for any adventure.
        </p>
        <p>
          At Kemps MPS, safety is our top priority. Whether you're a recreational boater, a fisherman,
          or an adventure seeker, you can trust us to provide reliable and professional life jacket
          servicing.
        </p>
        <p> <a className='contact-link' href='/contact'>Contact us</a> today to learn more about our services and how we can help you stay safe on the water.</p>
        <div className='service-text'>
        <h2>The service</h2>
        <p>All life jackets are serviced same etc. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>

    </>
  );
};

export default AboutPage;
