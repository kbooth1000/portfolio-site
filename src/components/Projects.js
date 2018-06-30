import React from 'react';
import {Link} from 'react-router-dom';
import projects from './projectsObject';
import './css/projects.css';

let Projects = () => {

    let projectsList=projects.map(project=>(
      <li key={project.title} >
        <Link to={project.href}>
        <img src={project.picurl} alt={project.title} className='projectThumbnail' />
        {project.title}
        </Link>
        </li>
    ))

  return (

    <div style={{ width:"100%", textAlign:"center" }}>
     { console.log('projects: ', projects)}
     <ul className="projects-list">
      {projectsList}</ul>
      Work
    </div>
  )
}

export default Projects;