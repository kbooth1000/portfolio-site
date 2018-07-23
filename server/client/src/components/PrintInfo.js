import React, { Component } from 'react';

class PrintInfo extends Component {
  render() {
    return (
      <div className="contact-content dispenser-inner">
        <a onClick={()=>window.print()} href="#">
          print
        </a>
      </div>
    );
  }
}

export default PrintInfo;
