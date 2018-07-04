import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import projectsObject from './projectsObject';
import './css/projects.css';
import { setHeaderClass } from '../actions/actions';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      chosenTech: 'node'
    }
  }

  handleClick = projectkey => {
    this.setMainClass(projectkey);
  };

  render() {
    let {chosenTech} = this.state;
    let importAll = r => r.keys().map(r);
    let imagepaths = importAll(
      require.context('./images/projectImages', false, /\.(png|jpe?g|svg)$/)
    );

    let projectsList = projectsObject.projects.map(project => {
      let pic = imagepaths.find(path => path.includes(project.key));
      return (
        <li
          key={project.key}
          className={'projectBox ' + ((project.tech.includes(chosenTech)||chosenTech==='all')&&'project-open ') + project.key}
        >
          <Link
            to={`/project/${project.key}`}
            onClick={() => this.handleClick('content-page ' + project.key)}
          >
            <img src={pic} alt={project.title} className="projectThumbnail" />
            <div className="project-thumb-title">{project.title}</div>
            <div className="project-thumb-tech">{project.tech.map(skill=>skill+', ')}</div>
          </Link>
        </li>
      );
    });

    return (
      <div className="Projects">
        {console.log('projects: ', projectsObject.projects)}
        <ul className="projects-list">{projectsList}</ul>
        {/* <div className="sky"></div> */}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  headerClass: state.layout.headerClass
});

let matchDispatchToProps = {
  setMainClass: setHeaderClass
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Projects);
