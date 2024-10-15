const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Create test Ethereal email account
nodemailer.createTestAccount((err, account) => {
  if (err) {
    console.error('Failed to create test account. ' + err.message);
    return;
  }

  // Create a Nodemailer transporter using Ethereal's SMTP details
  const transporter = nodemailer.createTransport({
    host: account.smtp.host,
    port: account.smtp.port,
    secure: account.smtp.secure, // true for 465, false for other ports
    auth: {
      user: account.user, // generated ethereal user
      pass: account.pass, // generated ethereal password
    },
  });

  // POST route for handling the quote form
  router.post('/send-quote', (req, res) => {
    const { name, phone, email, description } = req.body;

    const mailOptions = {
      from: email,
      to: 'am.washingllc@gmail.com', // Your email where leads will be sent
      subject: 'New Lead!',
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Description: ${description}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error sending email.' });
      }

      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.status(200).json({
        message: 'Email sent successfully!',
        previewUrl: nodemailer.getTestMessageUrl(info),
      });
    });
  });
});

module.exports = router;

