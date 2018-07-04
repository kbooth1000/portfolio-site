import React from 'react';
// import ContactInfo from './ContactInfo';
// import ContentDispenser from './utils/ContentDispenser';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setHeaderClass} from '../actions/actions';

let Logo = () => {
  return (
    <div className="logo">
      <h1>Kyle Booth</h1>
      <h2>Web Developer</h2>
    </div>
  );
};


let Header = (props) => {
  // console.log('stheadrcls: ', props.setMainClass('jgjg'));
  
  let handleClick = (projectkey) => {
    return props.setMainClass(projectkey);
  }

  return (
    <header className='header transition-3'>
      <Link to="/">
        <Logo />
      </Link>
      <ul className="nav-links">
        <li >
          <Link to="/about" onClick={()=>handleClick('content-page about')}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={()=>handleClick('content-page projects')}>
            Work
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={()=>handleClick('content-page contact')}>
            Contact
          </Link>
        </li>
      </ul>
      
    </header>
  );
};


let mapDispatchToProps = {
  setMainClass: setHeaderClass
};

let mapStateToProps = state => {
  return {
    headerClass: state.layout.headerClass
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

