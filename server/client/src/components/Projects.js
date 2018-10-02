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
      chosenTech: 'all'
    };
  }

  handleClick = projectkey => {
    this.setMainClass(projectkey);
  };

  chooseTech = skill => this.setState({ chosenTech: skill });

  render() {
    let { chosenTech } = this.state;
    let techs = {
      all: 'view all',
      react: 'ReactJS',
      node: 'Node.js',
      js: 'JavaScript',
      html: 'HTML5/CSS3',
      wp: 'Wordpress',
      php: 'PHP'
    };
    let importAll = r => r.keys().map(r);
    let imagepaths = importAll(
      require.context('./images/projectImages', false, /\.(png|jpe?g|svg|gif)$/)
    );

    let ProjectTechsButton = Object.keys(techs).map(skill => (
      <button key={skill} onClick={() => this.chooseTech(skill)}>
        {techs[skill]}
      </button>
    ));

    let ProjectsList = projectsObject.projects.map(project => {
      let pic = imagepaths.find(path => path.includes(project.key));
      return (
        <li
          key={project.key}
          className={
            'projectBox ' +
            (project.tech.includes(chosenTech) || chosenTech === 'all'
              ? 'project-open '
              : '') +
            project.key
          }
        >
          <Link
            to={`/project/${project.key}`}
            onClick={() => this.handleClick('content-page ' + project.key)}
          >
            <img src={pic} alt={project.title} className="projectThumbnail" />
            <div className="project-thumb-title">{project.title}</div>
            <div className="project-thumb-techs">
              {project.tech.map(skill => (
                <span key={skill}>{techs[skill]}</span>
              ))}
            </div>
          </Link>
        </li>
      );
    });

    return (
      <div className="Projects">
        <div className="project-techs-buttons">
          <h3> technologies used:</h3>
          {ProjectTechsButton}
        </div>
        <ul className="projects-list">{ProjectsList}</ul>
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
