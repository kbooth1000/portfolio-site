import React, { Component } from 'react';

class PrintInfo extends Component {
  render() {
    return (
      <div className="resume-print-button">
        <a onClick={()=>window.print()} href="#">
          print
        </a>
      </div>
    );
  }
}

export default PrintInfo;
