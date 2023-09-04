import React, { useState } from 'react';
import './ContactPage.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    business: '',
    location: '',
    email: '',
    phone: '',
    subject: '',
    jacketBrand: '',
    jacketType: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert('Email sent successfully.');
        // Clear the form
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
        Located in Hull East Yorkshire, UK. <br /> Contact now to book a collection slot (30 mile radius) or delivery (rest of UK). <i className="fa-solid fa-car"></i>
        <br /> <br />
        generalenquiries@kempsmps.com <br /> bookingenquiries@kempsmps.com<br /> <br />
      </p>
      <form className='form'>
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
          <input type="text" id="location" name="location" placeholder="Your location.." required />
          </div>
          </div>
        <div className="row">
        <div className="col-md-6">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Your email.." required />
          </div>
        <div className="col-md-6">
          <label htmlFor="location">Phone</label>
          <input type="number" id="phone" name="phone" placeholder="Your phone number.." required />
          </div>
          </div>
        <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write here.." required></textarea>
          <label htmlFor="life-jacket-brand">Brand of life jacket</label>
          <input type="text" id="life-jacket-brand" name="life-jacket-brand" placeholder="Enter brand.." required />
        <div className="row">
        <div className="col-md-6">
          <label htmlFor="life-jacket-type">Type of life jacket</label>
          <select id="life-jacket-type" name="life-jacket-type" onChange={(e) => setSelectedType(e.target.value)} required>
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
