import express from 'express';
import { createTransport } from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client')));


// Enable CORS
app.use(cors());

const access_token = '';

const transporter = createTransport({
  service: 'gmail',
  // host: 'smtp.gmail.com',
  // port: 465,
  // secure: true,
  auth: { 
    type: 'OAuth2',
    user: 'missabbiewills@gmail.com',
    clientId: '309394794434-23sfn2gufi0pouo06ni8fpbta2d025jd.apps.googleusercontent.com',
    clientSecret: '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',
    refreshToken: '',
    accessToken: 'access_token',
  },
});

app.get('/', (req, res) => {
  res.send('Welcome to the Express server.');
});

// Define a route to handle form submissions
app.post('/send-email', (req, res) => {
  console.log('received request');
  const { firstname, lastname, business, location, email, phone, subject, brand, type, quantity } = req.body;
  console.log(req.body);
  res.send('received request');


  // Compose email message

  const mailOptions = {
    from: 'abbiekatiewills@gmail.com',
    to: 'missabbiewills@gmail.com',
    subject: `${subject}`,
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
