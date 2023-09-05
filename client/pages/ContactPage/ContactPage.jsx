import React, { useState } from 'react';
import './ContactPage.css';
import axios from 'axios';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    business: '',
    location: '',
    email: '',
    phone: '',
    subject: '',
    brand: '',
    type: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/send-email', formData);
      if (response.data.success) {
        alert('Email sent successfully.');
        setFormData({
          firstname: '',
          lastname: '',
          business: '',
          location: '',
          email: '',
          phone: '',
          subject: '',
          brand: '',
          type: '',
          quantity: '',
        });
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the email. Please try again later.');
    }
  };

  return (
    <div className="contact-form">
      <h3 className="address">Bookings Information</h3>
      <p className="address">
        Located in Hull East Yorkshire, UK. <br /> Contact now to book a collection slot (30 mile radius) or delivery (rest of UK). <br /> <br />
        info@kempsmps.com <br /> <br/>
      </p>
      <form className='form' onSubmit={handleSubmit}>
        <h2 className="address">Contact Form</h2>
        <div className="row">
        <div className="col-md-6">
          <label htmlFor="name">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." required />
          </div>
        <div className="col-md-6">
          <label htmlFor="business">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." required />
          </div>
          </div>
        <div className="row">
        <div className="col-md-6">
          <label htmlFor="name">Business</label>
          <input type="text" id="business" name="business" placeholder="Your business name (optional).." />
          </div>
        <div className="col-md-6">
          <label htmlFor="business">Location</label>
          <input type="text" id="address" name="location" placeholder="Your address.." required />
          </div>
          </div>
        <div className="row">
        <div className="col-md-6">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email.." required />
          </div>
        <div className="col-md-6">
          <label htmlFor="location">Phone</label>
          <input type="number" id="phone" name="phone" placeholder="Your phone number.." required />
          </div>
          </div>
        <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write here.." required></textarea>
          <label htmlFor="life-jacket-brand">Brand of life jacket</label>
          <input type="text" id="life-jacket-brand" name="brand" placeholder="Enter brand.." required />
        <div className="row">
        <div className="col-md-6">
          <label htmlFor="life-jacket-type">Type of life jacket</label>
          <select id="life-jacket-type" name="type" required>
            <option value="" disabled selected>
              Select a type
            </option>
            <option value="solas">Solas</option>
            <option value="non-solas">Non-Solas (ISO)</option>
          </select>
          </div>
        <div className="col-md-6">
          <label htmlFor="quantity">Quantity of life jackets</label>
          <input type="number" id="quantity" name="quantity" placeholder="Enter quantity.." required />
          <br />
          </div>
          </div>          
             <button id="submit" className="submit" type="submit" value="Submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
