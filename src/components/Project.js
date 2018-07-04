import React from 'react';
import projectsObject from './projectsObject';
import './css/projects.css';

let Project = (props) => {
  
  let routeClass = props.location.pathname.split(/[:/]+/).pop();
  let project = projectsObject.get(routeClass);
  

  return (
    <div>
      <div>
<h1 className="projectTtile">{project.title}</h1>
      Project
      Project
      Project
      Project
      Project
      Project
      Project
      </div>
    </div>
  )
}

export default Project;