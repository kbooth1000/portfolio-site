import React, { Component } from 'react';
import squirrel from './images/squirrel.1.svg';
import  './css/squirrel.css';

class Squirrel extends Component {
  render() {
    return (
      <div className="squirrel squirrel-ani2" style={{
        backgroundImage: `url(${squirrel})`
      }}>
      </div>
    )
  }
}

export default Squirrel;