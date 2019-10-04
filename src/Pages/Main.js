import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import api from '../Services/api';
import Card from '../Components/Card';
import MarcasList from '../Components/MarcasList';
import Search from '../Components/Search';
import SearchAdv from '../Components/SearchAdv';
import bannerStock from '../Images/auto-bunkers-banner-home.jpg'

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
        qtdItensPagina: 12,
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
      <div className="">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 my-4">
            <div class="container">
              <Search />
            </div>
          </div>
          {/* <div className="col-sm-12 col-md-12 col-lg-12">
            <p>
              <a className="text-dark text-size--22" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Selecione a marca que preferir <i className="fas fa-angle-down"></i>

              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card bg-transparent border-warning card-body">
                <MarcasList />
              </div>
            </div>
          </div> */}
          {/* <SearchAdv /> */}
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-2 col-lg-2 align-center main-side--1 text-right">
            <p className="text-size--22 m-0"><small className="text-danger bold"> - Referência em veículos</small></p>
            <p className="display-4 m-0">Auto Bunkers</p>
          </div>
          <div className="col-sm-12 col-md-10 col-lg-10">
            <div className="row">
              <div className="col-12 mb-2"><p className="text-right">Temos <b>121</b> veículos em nosso estoque </p></div>
              {messageError && <h1>{messageError}</h1>}
              {loading && (
                <div className="d-flex justify-content-center">
                  <div className="spinner-grow text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}

              {stock.map(car => (
                <div key={car.iD_Veiculo} className="col-sm-12 col-md-6 col-lg-4 card-vehicle-stock">
                  <Card vehicle={car} />
                </div>
              ))}
            </div>
            <div className="row justify-content-around my-5">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">4</a></li>
                  <li className="page-item"><a className="page-link" href="#">5</a></li>
                  <li className="page-item"><a className="page-link" href="#">6</a></li>
                  <li className="page-item"><a className="page-link" href="#">7</a></li>
                  <li className="page-item"><a className="page-link" href="#">8</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="row">
              <div className="col-12">
                <img className="img-fluid" src={bannerStock} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({
  mainStock: state.Stock,
}))(Main);
