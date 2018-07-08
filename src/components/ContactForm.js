import React, { Component } from 'react';
import FormInput from './FormInput';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: 'NAME',
      email: 'EMAIL',
      message: 'MESSAGE'
    }
  }

  render() {
    return (
      <div>
        Contact Form 
        {this.state.name + ', ' + this.state.email + ', ' + this.state.message}
        <br/>
        <FormInput type="text" name="name" />
        <FormInput type="text" name="email" />
        <FormInput type="textarea" name="message" />
      </div>
    )
  }
}

export default ContactForm;