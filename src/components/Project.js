import React from 'react';
import sanitizeHtml from 'sanitize-html-react';
import { Link } from 'react-router-dom';
import projectsObject from './projectsObject';
import './css/project.css';
import { setHeaderClass } from '../actions/actions';

let htmlDecode = input => {
  var doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.documentElement.textContent;
};

let cleanHTML = input => sanitizeHtml(input);

let Project = props => {
  let routeClass = props.location.pathname.split(/[:/]+/).pop();
  let project = projectsObject.get(routeClass);

  let importAll = r => r.keys().map(r);
  let imagepaths = importAll(
    require.context('./images/projectImages', false, /\.(png|jpe?g|svg)$/)
  );
  let pic = imagepaths.find(path => path.includes(project.key));

  let escapedHTML = escape(project.description);
  return (
    <div className="project-page">
      <Link onClick={setHeaderClass('rerender')} to="/projects">  <i class="far fa-arrow-alt-circle-left fa-sm"></i>&nbsp;
         <span>back</span>
        </Link>
      <div className="project-title">
        <h1>{project.title}</h1>
      </div>
      
      <div className="content-box">
        <img src={pic} alt="" className="project-img-main" /><br />
      <div className="project-description"><p dangerouslySetInnerHTML = { {__html: sanitizeHtml(project.description)} }></p></div>
      </div>
    </div>
  );
};

export default Project;
