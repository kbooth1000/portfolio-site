import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {setHeaderClass} from '../actions/actions';
import Header from './Header';
import Projects from './Projects';
import Project from './Project';
import About from './About';
import ContentDispenser from './utils/ContentDispenser';
import MoreInfo from './MoreInfo';
import Contact from './Contact';

class Main extends Component {
  constructor(props){
    super();
  }

  componentDidMount(){
    
    let routePath = this.props.location.pathname.split(/[:/]+/);
    let routeClass = routePath[routePath.length - 1];
    (routePath[routePath.length - 2] === 'project') ? routeClass += ' display-project ' : routeClass = routeClass;
    
    console.log('routeClass: ', routeClass);
    if(routeClass === '' )
     {this.props.setMainClass('landing-screen')} else
    { this.props.setMainClass('content-page ' + routeClass);}
  }
  
  render() {

    let mainClass = this.props.headerClass;
    
    console.log('mainClass: ', mainClass);
    
    

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
              <ContentDispenser label="more..." content={<MoreInfo />} cssClass="more-info" />
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
                <div className="c c9"><Contact /></div>
              </div>
            </div>
          </div>
          <div className="row r4 footer">Copyright &copy; 2018</div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  headerClass: state.layout.headerClass
});

let mapDispatchToProps = {
  setMainClass: setHeaderClass
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
