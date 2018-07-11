import React, { Component } from 'react';

class MoreInfo extends Component {
  render() {
    return (
      <div className="contact-content dispenser-inner">
        <ul>
          <li>
            <i class="fab fa-linkedin fa-sm" />&nbsp;
            <span>linkedIn:</span>{' '}
            <span>
              <a href="https://www.linkedin.com/in/kylejbooth/">kylejbooth</a>
            </span>
          </li>
          <li>
            <i class="fab fa-github fa-sm" />&nbsp;
            <span>github:</span>{' '}
            <span>
              <a href="https://github.com/kbooth1000">kbooth1000</a>
            </span>
          </li>
          <li>
            <span>location:</span> <span>Atlanta</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default MoreInfo;
