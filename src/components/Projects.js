import React from 'react';
import { Link } from 'react-router-dom';
import projects from './projectsObject';
import './css/projects.css';

let Projects = () => {
  let importAll = r => r.keys().map(r);

  let imagepaths = importAll(
    require.context('./images/projectImages', false, /\.(png|jpe?g|svg)$/)
  );
  let root = 'localhost:3000';

  let projectsList = projects.map(project => {
    let pic = imagepaths.find(path => path.includes(project.key));

    return (
      <li key={project.title}>
        <Link to={'/project:'+project.key}>
          <img src={pic} alt={project.title} className="projectThumbnail" />
          {project.title}
        </Link>
      </li>
    );
  });

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      {console.log('projects: ', projects)}
      <ul className="projects-list">{projectsList}</ul>
    </div>
  );
};

export default Projects;
