let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let mailer = require('./mailer');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => {
  res.redirect(
    '/'
  );
});

app.post('/contact-form', (req, res) => {
  const { email = '', name = '', message = '' } = req.body;

  mailer({ email, name, text: message })
    .then(() => {
      console.log(`Sent the message "${message}" from <${name}> ${email}.`);
      res.redirect('/#success');
    })
    .catch(error => {
      console.log(
        `Failed to send the message "${message}" from <${name}> ${email} with the error ${error &&
          error.message}`
      );
      res.redirect('/#error');
    });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
