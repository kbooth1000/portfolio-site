import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

import axios from 'axios';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(reduxThunk))
);

window.axios = axios;


ReactDOM.render( <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'));