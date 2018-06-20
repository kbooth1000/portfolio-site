import projectsReducer from './projectsReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  projects: projectsReducer
});