import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './Components/Header/Nav';
import Footer from './Components/Footer/Footer';
import Routes from './routes';
import './Styles/Components.css';
import api from './Services/api';

function App(props) {
  useEffect(() => {
    api
      .post('/api/Veiculos/requestVeiculos', {
        iD_Categoria: 1,
        iD_TipoVeiculo: 0,
        ordenacao: 3,
        paginaCorrente: 1,
        qtdItensPagina: 150,
      })
      .then(async response => {
        if (response.status !== 200) {
          return;
        }
        localStorage.setItem('stock', JSON.stringify(response.data));
        const { dispatch } = props;
        dispatch({
          type: 'ADD_STOCK',
          stock: response.data,
        });
      })
      .catch(error => {
        console.error(`error ${error}`);
      });
  });

  return (
    <BrowserRouter>
      <Nav />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default connect(state => ({
  mainStock: state.Stock,
}))(App);
