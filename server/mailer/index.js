var nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
      user: 'kbooth1000@gmail.com',
      clientId: '413926680678-m355i7glm7ijhdevsgej6d9d5rntqas7.apps.googleusercontent.com',
      pass: 'strongishCaliLoo0',
      clientSecret: 'h_e6AhXU8oGqc27izP1MDhyQ',
      refreshToken: '1/QuLrEys1Mi9RUG1TnzK1zkpUv7M3aWofsIxQ7_ohzlc',
      accessToken: 'ya29.Glv1BU1lweKfwp4cWijPGlRHHClFmLoiG1AA_tYN2ftgLIl0yU93uL4QQJtpbzujLHNku25qp6CEYTllXjimp_Yw85zC14M0l9oplmaLixcQ-bNO7EBqYvalVq83'
    })
  }
}));

// // setup e-mail data with unicode symbols
// var mailOptions = {
//     from: '"Fred Foo ?" <kjbooth1000@gmail.com>', // sender address
//     to: 'kjbooth1000@gmail.com', // list of receivers
//     subject: 'Hello', // Subject line
//     text: 'Hello world ?', // plaintext body
//     html: '<b>Hello world ?</b>' // html body
// };

// // send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
// });

// let nodemailer = require('nodemailer');

// let config = require('./config');

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     type: 'OAuth2',
//     ...config
//   }
// });

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: 'kbooth1000@gmail.com',
    subject: `New message from ${from}`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = send;