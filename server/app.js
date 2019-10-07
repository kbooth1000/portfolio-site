const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
      user: 'kbooth1000@gmail.com',
      clientId: '413926680678-m355i7glm7ijhdevsgej6d9d5rntqas7.apps.googleusercontent.com',
      pass: '',
      clientSecret: '',
      refreshToken: '1/TjqeALCnZgUxXfcDu6qtvEy7eckIVXeSszRQCLXZoYo',
      accessToken: 'ya29.Glv1BYXHCdPu0ofOsnzn2_a45RZDb-rGcnRQp7r_2L2fe9jjg1-hQSFD7c2g5s6oHeauQ7YbY63koO2CZFnZCTsewuowPbUd3D3UUl6zsjXj47EIQm-EqCWeG7M-'
    })
  }
})

let mailOptions = {
  from: 'kylebooth-portfolio',
  to: 'kbooth1000@gmail.com',
  subject: 'Nodemailer test',
  text: 'Hey Woooorld!!'
}


transporter.sendMail(mailOptions, function(err, res) {
  if(err){
    console.log('--Error--', err);    
  } else {
    console.log('Email Sent');
  }
})
