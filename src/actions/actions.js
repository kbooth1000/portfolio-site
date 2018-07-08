const FETCH_PROJECTS = 'fetch_projects';
const SET_HEADER_CLASS = 'SET_HEADER_CLASS';

export function fetchProjects () { 
  return { type: FETCH_PROJECTS };
}
export function setHeaderClass (hclass){ 
   return {type: SET_HEADER_CLASS, headerClass:hclass};
};


