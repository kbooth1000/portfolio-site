import React from 'react';
import {Redirect} from 'react-router-dom';
import sanitizeHtml from 'sanitize-html-react';
import { Link } from 'react-router-dom';
import projectsObject from './projectsObject';
import './css/project.css';
import { setHeaderClass } from '../actions/actions';

let onClickHandler = (fn,cl) => fn(cl);

let Project = props => {
  let routeClass = props.location.pathname.split(/[:/]+/).pop();
  let project = projectsObject.get(routeClass);
if(!project) {
  return <Redirect to="/" />;
}
  let importAll = r => r.keys().map(r);
  let imagepaths = importAll(
    require.context('./images/projectImages', false, /\.(png|jpe?g|svg)$/)
  );
  let pic = imagepaths.find(path => path.includes(project.key));

  return (
    <div className="project-page">
      <Link onClick={onClickHandler(setHeaderClass,'rerender')} to="/projects">  <i className="far fa-arrow-alt-circle-left fa-sm"></i>&nbsp;
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
