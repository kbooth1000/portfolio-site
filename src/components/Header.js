import React from 'react';
import ContactInfo from './ContactInfo';
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
    <header className="header landing">

      <ContentDispenser label="Contact" content={<ContactInfo />} />
     
      <div className="logo-holder">
        
      </div>
      <Logo />
    </header>
  );
};

export default Header;