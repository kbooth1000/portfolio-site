import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import ContentDispenser from './utils/ContentDispenser';
import Test from './Test';
import Projects from './Projects';
import About from './About';

class App extends Component {
  constructor() {
    super();
    this.state = {
     headerClass: 'landing-screen'
    }
  }
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <div className={'container transition-3 ' + this.state.headerClass}>
              <Header retractHeader={()=>this.setState({headerClass:'top'})} expandHeader={()=>this.setState({headerClass:'landing-screen'})} />
            </div>
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
