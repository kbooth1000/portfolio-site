import React from 'react';
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
     props.setMainClass(projectkey);
  }

  return (
    <header className='header transition-3'>
      <Link to="/" onClick={()=>handleClick('landing-screen')}>
        <Logo />
      </Link>
      <ul className="nav-links">
        <li className={(props.headerClass.includes('about'))?'active':''}>
          <Link to="/about" onClick={()=>handleClick('content-page about')}>
            About
          </Link>
        </li>
        <li className={(props.headerClass.includes('projects'))?'active':''}>
          <Link to="/projects" onClick={()=>handleClick('content-page projects')}>
            Work
          </Link>
        </li>
        <li className={(props.headerClass.includes('resume'))?'active':''}>
          <Link to="/resume" onClick={()=>handleClick('content-page resume')}>
            Resume
          </Link>
        </li>
        <li className={(props.headerClass.includes('contact'))?'active':''}>
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

