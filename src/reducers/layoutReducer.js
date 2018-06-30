import { setHeaderClass } from '../actions/actions';

let initialState = {headerClass:'landing-screen'};

let layoutReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_HEADER_CLASS':
    console.log('SET-HEADER..', action);
    
      return { ...state, 
        headerClass: action.headerClass
      };

    default:
      return state;
  }
};

export default layoutReducer;
