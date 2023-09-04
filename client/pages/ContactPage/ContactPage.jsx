import React, { useState } from 'react';
import './ContactPage.css';

const ContactForm = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const toggleOtherInput = (inputType, selectValue) => {
    if (selectValue === 'other') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="contact-form">
      <h3 className="address">Bookings Information</h3>
      <p className="address">
        Located in Hull East Yorkshire, UK <br />
        <br />
        Contact now to book a collection slot (30 mile radius) or delivery (rest of UK) <i className="fa-solid fa-car"></i>
        <br /> <br />
        generalenquiries@kempsmps.com <br /> <br /> bookingenquiries@kempsmps.com<br /> <br />
      </p>
      <form className='form'>
        <label htmlFor="name">Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." required />

        <label htmlFor="business">Business</label>
        <input type="text" id="business" name="business" placeholder="Your business.." />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email.." required />

        <label htmlFor="location">Location</label>
        <input type="text" id="lname" name="location" placeholder="Your location.." required />

        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write here.." required></textarea>

        <label htmlFor="life-jacket-brand">Brand of life jacket</label>
        <select id="life-jacket-brand" name="life-jacket-brand" onChange={(e) => setSelectedBrand(e.target.value)} required>
          <option value="" disabled selected>
            Select a brand
          </option>
          <option value="crewsaver">Crewsaver</option>
          <option value="baltic">Baltic</option>
          <option value="other">Other</option>
        </select>

        {toggleOtherInput('brand', selectedBrand) && (
          <div id="other-brand-container">
            <label htmlFor="other-brand">Other Brand</label>
            <input className="other" type="text" id="other-brand" name="other-brand" placeholder="Enter other brand..." required />
          </div>
        )}

        <label htmlFor="life-jacket-type">Type of life jacket</label>
        <select id="life-jacket-type" name="life-jacket-type" onChange={(e) => setSelectedType(e.target.value)} required>
          <option value="" disabled selected>
            Select a type
          </option>
          <option value="solas">Solas</option>
          <option value="non-solas">Non-Solas</option>
          <option value="other">Other</option>
        </select>

        {toggleOtherInput('type', selectedType) && (
          <div id="other-type-container">
            <label htmlFor="other-type">Other Type</label>
            <input className="other" type="text" id="other-type" name="other-type" placeholder="Enter other type..." required />
          </div>
        )}

        <label htmlFor="quantity">Quantity of life jackets</label>
        <input type="number" id="quantity" name="quantity" placeholder="Enter quantity.." required />
        <br />
        <button id="submit" className="submit" type="submit" value="Submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
