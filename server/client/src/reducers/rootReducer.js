import projectsReducer from './projectsReducer';
import layoutReducer from './layoutReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  projects: projectsReducer,
  layout: layoutReducer
});