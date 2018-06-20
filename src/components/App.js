import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import ContentDispenser from './utils/ContentDispenser';
import Test from './Test';




class App extends Component {
  render() {
    return (
      <Provider><Router>
        <div>
      <div className="container">
      <Header />
      </div>
        <Route exact path="/test" component={ Test } />
        </div>
      </Router></Provider>
    );
  };
};

export default App;
