import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import projectsObject from './projectsObject';
import './css/projects.css';
import { setHeaderClass } from '../actions/actions';

let Projects = props => {
  console.log('props: ', props);

  let importAll = r => r.keys().map(r);

  let imagepaths = importAll(
    require.context('./images/projectImages', false, /\.(png|jpe?g|svg)$/)
  );

  let projectsList = projectsObject.projects.map(project => {
    let pic = imagepaths.find(path => path.includes(project.key));

    let handleClick = projectkey => {
      props.setMainClass(projectkey);
    };

    return (
      <li
        key={project.key}
        className={'projectBox project-open ' + project.key}
      >
        <Link to={`/project/${project.key}`} onClick={() => handleClick('content-page ' + project.key)}>
          <img
            src={pic}
            alt={project.title}
            className="projectThumbnail"
          />
          {project.key}
        </Link>
      </li>
    );
  });

  return (
    <div className="Projects">
      {console.log('projects: ', projectsObject.projects)}
      <ul className="projects-list">{projectsList}</ul>
    </div>
  );
};

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
