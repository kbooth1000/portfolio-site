import React, { Component } from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import Header from './Header';
import Projects from './Projects';
import Project from './Project';
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
    mainClass === ''
      ? (mainClass = 'landing-screen')
      : (mainClass = 'content-page ' + mainClass);

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
            <div className="content-block">
              <div className="content-flex">
                <div className="c c7">
                  <About />
                </div>
                <div className="c c8">
                  <Switch>
                    <Route path="/project" component={Project} />
                    <Route path="/projects" component={Projects} />
                  </Switch>
                </div>
                <div className="c c9">CONTACT</div>
              </div>
            </div>
          </div>
          <div className="row r4 footer">footer</div>
        </div>
      </div>
    );
  }
}

export default Main;
