import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './Store/store';
import Nav from './Components/Header/Nav';
import Routes from './routes';
import './Styles/Components.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
