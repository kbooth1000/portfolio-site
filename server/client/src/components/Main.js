import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setHeaderClass } from '../actions/actions';
import Header from './Header';
import Projects from './Projects';
import Project from './Project';
import About from './About';
import ContentDispenser from './utils/ContentDispenser';
import MoreInfo from './MoreInfo';
import PrintInfo from './PrintInfo';
import Contact from './Contact';
import Resume from './Resume';
import Squirrel from './Squirrel';
import './css/fonts.css';

class Main extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    console.log('componentdidmount');
    
    let routePath = this.props.location.pathname.split(/[:/]+/);
    let routeClass = routePath[routePath.length - 1];
    if (routePath[routePath.length - 2] === 'project') {
      routeClass += ' display-project ';
    }

    let contentPages = ['about', 'projects', 'contact', 'resume'];

      if (contentPages.find(page=>page===routeClass) || routeClass.includes('display-project')) {
        this.props.setMainClass('content-page ' + routeClass);
      } else {
        this.props.setMainClass('landing-screen');
      }
    };

  render() {
    let mainClass = this.props.headerClass;

    console.log('mainClass: ', mainClass);

    return (
      <div>
        <div className={'container transition-3 ' + mainClass}>
          <div className="row r1">
            <div className="c c1">1</div>
            <div className="c c2">2</div>
            <div className="c c3">
              <Resume />
            </div>
          </div>
          <div className="row r2" style={{ width: 
           mainClass.includes('resume') ? 
            0 : '100%'
            }}>
            <div className="c c4">4</div>
            <div className="c c5">
            <Squirrel />
              <Header />
              {mainClass.includes('resume')?
              <PrintInfo style={{marginTop: '1.1rem',
  display: 'block',
  width: 'auto',
  height: '1rem',
  overflow: 'hidden',
  transition: '.5s 2.1s'}} /> : 
              <ContentDispenser
                label="more..."
                content={<MoreInfo />}
                cssClass="more-info"
              /> 
              }
            </div>
            <div className="c c6">6</div>
          </div>
          <div className="row r3" style={{ width: 
           mainClass.includes('resume') ? 
            0 : '100%'
            }}>
            <div className="content-block">
              <div className="content-flex">
                <div className="c c7">
                <Route exact path="/about" component={About} />

                </div>
                <div className="c c8">
                  <Switch>                    
                    <Route path="/project" component={Project} />
                    <Route exact path="/projects" component={Projects} />
                  </Switch>
                </div>
                <div className="c c9">
                  <Route exact path="/contact" component={Contact} />
                </div>
              </div>
            </div>
          </div>
          <div className="row r4 footer">Copyright &copy; {new Date().getFullYear()}</div>
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
