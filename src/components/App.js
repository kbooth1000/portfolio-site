import React, { Component } from 'react';
import './App.css';
import ContactInfo from './ContactInfo';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ContentDispenser from './utils/ContentDispenser';

let Logo = () => {
  return (
    <div className="logo">
      <h1>Kyle Booth</h1>
      <h2>Web Developer</h2>
    </div>
  );
};

let Header = () => {
  return (
    <header className="header -landing">

      <ContentDispenser label="Contact" content={<ContactInfo />} />
     
      <div className="logo-holder">
        
      </div>
      <Logo />
    </header>
  );
};

class App extends Component {
  render() {
    return (
      <Provider><Router>
      <div className="container">
        <Header />
      </div>
      </Router></Provider>
    );
  }
}

export default App;
