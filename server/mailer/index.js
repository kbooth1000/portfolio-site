var nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
var smtpTransport = require('nodemailer-smtp-transport');

let transporter = nodemailer.createTransport({
  host: 'mail.boothwebproduction.com',
  port: 465,
  secure: true,
  auth: {
    user: 'kyle@boothwebproduction.com',
    pass: 'Tw!ggal0'
  },
  tls:{
    rejectUnauthorized:false
  }
})

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from: '"kyle@boothwebproduction.com" <kyle@boothwebproduction.com>',
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