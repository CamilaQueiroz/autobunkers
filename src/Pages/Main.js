import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import api from '../Services/api';
import Card from '../Components/Card';
import MarcasList from '../Components/MarcasList';
import Search from '../Components/Search';
import SearchAdv from '../Components/SearchAdv';

function Main(props) {
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    api
      .post('/api/Veiculos/requestVeiculos', {
        iD_Categoria: 1,
        iD_TipoVeiculo: 0,
        ordenacao: 1,
        paginaCorrente: 1,
        qtdItensPagina: 5000,
      })
      .then(async response => {
        if (response.status !== 200) {
          setMessageError('Ocorreu um erro, tente novamente mais tarde');
          return;
        }
        setStock(response.data);

        const { dispatch } = props;
        dispatch({
          type: 'ADD_STOCK',
          stock: response.data,
        });

        setLoading(false);
      })
      .catch(error => {
        console.error(`error ${error}`);
        setMessageError('Ocorreu um erro, tente novamente mais tarde');
      });
  });

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <SearchAdv />
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3 align-center">
            <MarcasList />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            {messageError && <h1>{messageError}</h1>}
            {loading === true && props.mainStock.length === 0 && (
              <div className="d-flex justify-content-center">
                <div className="spinner-grow text-danger" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
            {props.mainStock.map(car => (
              <div key={car.iD_Veiculo}>
                <Card vehicle={car} />
              </div>
            ))}
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3">
            <img
              className="img-fluid"
              src="https://autobunkers.com.br/Images/ann/lexus/thumb-estoque-lexus-300x300.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({
  mainStock: state.Stock,
}))(Main);
