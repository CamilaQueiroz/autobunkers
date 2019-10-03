import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import store from './Store/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'popper.js';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
