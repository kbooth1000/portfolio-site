import React from 'react';
import ReactDOM from 'react-dom';
import redux, {createStore, compose, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import './index.css';
import App from './components/App';

import axios from 'axios';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


window.axios = axios;

const store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(reduxThunk))
);
ReactDOM.render(<App />, document.getElementById('root'));