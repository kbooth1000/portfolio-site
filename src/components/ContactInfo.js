import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class ContactInfo extends Component {
  render() {
    return (
     <div className="contact-content dispenser-inner">
     <ul>
       <li>
       <i class="fas fa-phone fa-sm"></i>&nbsp;
         <span>phone:</span>{' '}
         <span>
           <Link to="tel:4044888721">(404) 488-8721</Link>
         </span>
       </li>
       <li>
       <i class="fas fa-envelope-square fa-sm"></i>&nbsp;
         <span>email:</span>{' '}
         <span>
           <Link to="mailto:kbooth1000@gmail.com">kbooth1000@gmail.com</Link>
         </span>
       </li>
       <li>
       <i class="fab fa-linkedin fa-sm"></i>&nbsp;
         <span>linkedIn:</span>{' '}
         <span>
           <Link to="https://www.linkedin.com/in/kylejbooth/">kylejbooth</Link>
         </span>
       </li>
       <li>
       <i class="fab fa-github fa-sm"></i>&nbsp;
         <span>github:</span>{' '}
         <span>
           <Link to="https://github.com/kbooth1000">kbooth1000</Link>
         </span>
       </li>
       <li>
       {/* <i class="fas fa-building fa-sm"></i>&nbsp; */}
         <span>location:</span> <span>Atlanta</span>
       </li>
     </ul>
   </div>
    )
  }
}

export default ContactInfo;