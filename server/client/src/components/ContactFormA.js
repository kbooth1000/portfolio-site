import React from 'react';
import './css/contact.css';

// import './ContactForm.css'

const ContactFormA = () => (
  <form className="contact-form" method="POST" action="/#success" name="contact-form" data-netlify="true">
    <div className="form-field">
      <label htmlFor="name">
        <div className="label-content">Name:</div>
        <input type="text" name="name" required />
      </label>
    </div>

    <div className="form-field">
      <label htmlFor="email">
        <div className="label-content">Email:</div>
        <input type="email" name="email" required />
      </label>
    </div>

    <div className="form-field">
      <label htmlFor="message">
        <div className="label-content">Message:</div>
        <textarea className="stretch" name="message" rows="5" required />
      </label>
    </div>

    <button type="submit">Send</button>


  </form>
)

export default ContactFormA
