import React, { Component } from 'react';
import FormInput from './FormInput';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: 'NAME',
      email: 'EMAIL',
      message: 'MESSAGE'
    };
  }

  render() {
    return (
      <div>
        Contact Form
        <form method="POST">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" />

          <label htmlFor="message">Message</label>
          <textarea name="message" rows="3" />

          <input type="submit" />
        </form>
        {/* <br />
        <FormInput type="text" name="name" label="Name" />
        <FormInput type="text" name="email" label="Email" />
        <FormInput type="textarea" name="message" label="Message" />
        <FormInput type="submit" /> */}
      </div>
    );
  }
}

export default ContactForm;
