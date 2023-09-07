// import express from 'express';
// import { nodemailer, createTransport } from 'nodemailer';
// import cors from 'cors';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import { google } from ('googleapis');
// import { send } from 'process';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


// const app = express();
// const port = process.env.PORT || 3002;

// // Middleware
// app.use(express.json());
// app.use(express.static(path.join(__dirname, '/client')));


// // Enable CORS
// app.use(cors());

// const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectURL);
// oAuth2Client.setCredentials({ refresh_token: refreshToken });

// const transporter = createTransport({
//   service: 'gmail',
//   // host: 'smtp.gmail.com',
//   // port: 465,
//   // secure: true,
//   auth: { 
//     type: 'OAuth2',
//     user: 'missabbiewills@gmail.com',
//     clientId: '1000397497067-f88outj6r13hf9vd7a8e187busav4gr6.apps.googleusercontent.com',
//     clientSecret: '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',
//     refreshToken: '1//0450NonHmD337CgYIARAAGAQSNwF-L9IrPNmj3mOIo-kRZJKmMYhWneWh7c7Q-Yn9wgfZLF_EdASzYlWnu8bnLniK0lXaCt6KY9E',
//     // accessToken: 'ya29.a0AfB_byAAWJyI4brl6ZgDPaVqwpMpNAHts1t78uJ3nIkzVjFOY4Ceism2DzDFNTrl2BcpNhK4gAoTJwLlaA0nIfxQzwbhVhEGh_6v32Trr6WfP4uPcwym6imYY2VC_6D6PXL1iEcSkPFQKWXS5lJ3vFEmd3JbQggXGQaCgYKAa0SARASFQHsvYls8BRtEt0OdYhXygbh6qetfA0169',
//     redirectURL: 'https://developers.google.com/oauthplayground',
//   },
// });

// async function sendMail() {
//   try {
//     const accessToken = await oAuth2Client.getAccessToken();

//     const transport = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: 'missabbiewills@gmail.com',
//         clientId: 'clientId',
//         clientSecret: 'clientSecret',
//         refreshToken: 'refreshToken',
//         accessToken: 'accessToken',
//       },
//     });





// app.get('/', (req, res) => {
//   res.send('Welcome to the Express server.');
//   console.log('Welcome to the Express server.');
// });

// // Define a route to handle form submissions
// app.post('/send-email', (req, res) => {
//   console.log('received request');
//   const { firstname, lastname, business, location, email, phone, subject, brand, type, quantity } = req.body;
//   console.log(req.body);
//   res.send('received request');


//   // Compose email message

//   const mailOptions = {
//     from: 'abbiekatiewills@gmail.com',
//     to: 'missabbiewills@gmail.com',
//     subject: 'New Message from Contact Form',
//     text: 'Hello World',
//     html: '<h1>Hello World</h1>',
//     // subject: `${subject}`,
//     // html: `
//     //   <p>First Name: ${firstname}</p>
//     //   <p>Last Name: ${lastname}</p>
//     //   <p>Business: ${business}</p>
//     //   <p>Location: ${location}</p>
//     //   <p>Email: ${email}</p>
//     //   <p>Phone: ${phone}</p>
//     //   <p>Brand of Life Jacket: ${brand}</p>
//     //   <p>Type of Life Jacket: ${type}</p>
//     //   <p>Quantity of Life Jackets: ${quantity}</p>
//     // `,
//   };

//   const result = await transport.sendMail(mailOptions);
//   return result;

// } catch (error) {
//   return error;
// }
// }

//   sendMail().then((result) => console.log('Email sent...', result))
//   .catch((error) => console.log(error.message));

//  // Send the email
//  transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Failed to send email.' });
//   } else {
//     console.log('Email sent: ' + info.response);
//     res.status(200).json({ success: true, message: 'Email sent successfully.' });
//   }
// });
// });


 
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

import { createTransport } from 'nodemailer';
import { google } from 'googleapis';

// These id's and secrets should come from .env file.
const CLIENT_ID = '1000397497067-f88outj6r13hf9vd7a8e187busav4gr6.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//0450NonHmD337CgYIARAAGAQSNwF-L9IrPNmj3mOIo-kRZJKmMYhWneWh7c7Q-Yn9wgfZLF_EdASzYlWnu8bnLniK0lXaCt6KY9E';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'missabbiewills@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'missabbiewills@gmail.com',
      to: 'abbiekatiewills@gmail.com',
      subject: 'Hello from gmail using API',
      text: 'Hello from gmail email using API',
      html: '<h1>Hello from gmail email using API</h1>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));