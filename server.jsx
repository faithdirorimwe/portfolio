const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const config = require('./config.jsx');

app.use(express.json());

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the contact form');
});

app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter with your email provider settings
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'taithdone@gmail.com',
      pass: config.gmailPassword,
    },
  });

  // Construct the email details
  const mailOptions = {
    from: 'taithdone@gmail.com',
    to: 'taithdone@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.sendStatus(500); // Send a server error response
    } else {
      console.log('Email sent:', info.response);
      res.sendStatus(200); // Send a success response
    }
  });
});

const port = 3001; // You can choose any available port number

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});