const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

console.log('running');


let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
      user: 'kbooth1000@gmail.com',
      clientId: '413926680678-m355i7glm7ijhdevsgej6d9d5rntqas7.apps.googleusercontent.com',
      clientSecret: 'h_e6AhXU8oGqc27izP1MDhyQ',
      refreshToken: '1/WpSCTbNjh3FI61WkpNkK8y5iU3lbAALcO9uPQvv4CmU'
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
