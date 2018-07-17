let initialState = {headerClass:'landing-screen'};

let layoutReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_HEADER_CLASS':    
      return { ...state, 
        headerClass: action.headerClass
      };

    default:
      return state;
  }
};

export default layoutReducer;
