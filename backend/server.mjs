// const express = require('express');
// const { createTransport } = require('nodemailer');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors');

import express from 'express';
import { createTransport } from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(bodyParser.json());
// Enable CORS
app.use(cors());

const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { 
    user: 'missabbiewills@gmail.com'
  },
});




// Define a route to handle form submissions
app.post('/send-email', (req, res) => {
  const { firstname, lastname, business, location, email, phone, subject, brand, type, quantity } = req.body;

  // Compose email message
  const mailOptions = {
    from: email,
    to: 'missabbiewills@gmail.com',
    subject: subject,
    html: `
      <p>First Name: ${firstname}</p>
      <p>Last Name: ${lastname}</p>
      <p>Business: ${business}</p>
      <p>Location: ${location}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Brand of Life Jacket: ${brand}</p>
      <p>Type of Life Jacket: ${type}</p>
      <p>Quantity of Life Jackets: ${quantity}</p>
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to send email.' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ success: true, message: 'Email sent successfully.' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
