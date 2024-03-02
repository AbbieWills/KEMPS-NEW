import React from 'react';
import logoAbout from './aboutLogo.png';
import ContactLink from '../../components/Contact/Contact-link';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <div className="about">
        <h1>About Us</h1>
        <div className="service-text">
          <div className="row">
            <img className="logoAbout" src={logoAbout} alt="logo" />
            <p className="harry-intro">
              Kemps Maritime Professional Services was founded in 2023. Over the past year, KEMPS has grown from being a single lifesaving appliance service station to expanding into a multifaceted service provider for the maritime industry, as well as catering to the food industry.
              <br />
              <br />
              We are strategically located around the River Humber, which enables us to provide all of our services to ships visiting ports around the Humber and along the River Trent and Ouse. KEMPS specialises in ship chandlery and has recently diversified into catering delivery services for companies in the local area (K Chandler).
              <br />
              <br />
              It became apparent that restaurant and café owners were having to use multiple food chandlers due to a lack of trust in certain products and unreliable delivery times. We quickly adapted to cater to the needs of owners in our local area by applying our ship chandler model to cafes and farm shops. We listened to feedback and implemented changes accordingly.
              <br />
              <br />
              KEMPS was formally established to provide a comprehensive in-house service for ship owners and management companies, offering a one-stop shop for all maritime-related services. Our goal is to deliver on our promises by cutting out the time required to search for individual service providers, reducing overall costs, and being readily available at all times when needed.
              <br />
              <br />
              Our goal at KEMPS is to provide our customers with the best service possible. We achieve this by being completely transparent, maintaining a 'can-do' attitude, and always finding solutions to challenges. We actively listen to our customers to understand how we can best collaborate with them. Our flexibility is paramount; we understand that maritime businesses operate outside normal schedules, which is why we are available 365 days a year. If your shipping company operates 24 hours a day, so do we.
              <br />
              <br />
              With KEMPS, you can trust that your needs will be met efficiently and effectively, allowing you to focus on what matters most: the success of your operations.
            </p>
          </div>
        </div>
      </div>
      <ContactLink />

    </>
  );
};

export default AboutPage;