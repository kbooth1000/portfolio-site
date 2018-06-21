import React from 'react';
import ContactInfo from './ContactInfo';
import ContentDispenser from './utils/ContentDispenser';
import { Link } from 'react-router-dom';

let Logo = () => {
  return (
    <div className="logo">
      <h1>Kyle Booth</h1>
      <h2>Web Developer</h2>
    </div>
  );
};

let Header = ({ retractHeader, expandHeader }) => {
  return (
    <header className="header transition-3">
      <ContentDispenser label="Contact" content={<ContactInfo />} />

      <div className="logo-holder transition-3" />
      <Link to="/" onClick={expandHeader} >
        <Logo />
      </Link>
      <ul className="main-nav">
        <li>
          <Link to="/about" onClick={retractHeader}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={retractHeader}>
            Work
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
