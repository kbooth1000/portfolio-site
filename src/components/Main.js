import React, { Component } from 'react';
import Header from './Header';
import Projects from './Projects';
import About from './About';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      headerClass: 'landing-screen'
    };
  }

  render() {
    let mainClass = this.props.location.pathname.split('/')[1];
    if (mainClass === '') mainClass = 'landing-screen';

    return (
      <div>
        <div className={'container transition-3 ' + mainClass}>
          <div className="row r1">
            <div className="c c1">1</div>
            <div className="c c2">2</div>
            <div className="c c3">3</div>
          </div>
          <div className="row r2">
            <div className="c c4">4</div>
            <div className="c c5">
              <Header />
            </div>
            <div className="c c6">6</div>
          </div>
          <div className="row r3">
            <div className="c c7">
              <About />
            </div>
            <div className="c c8">
              <Projects />
            </div>
            <div className="c c9">CONTACT</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
