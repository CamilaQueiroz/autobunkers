import React, { useEffect, useState } from 'react';
import api from '../Services/api';
import Card from '../Components/Card';
import MarcasList from '../Components/MarcasList';
import Search from '../Components/Search';
import SearchAdv from '../Components/SearchAdv';

export default function Main() {
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
          <div className="col-sm-12 col-md-12 col-lg-12">
            <Search />
          </div>
          {/* <SearchAdv /> */}
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-2 col-lg-2 align-center">
            <MarcasList />
          </div>
          <div className="col-sm-12 col-md-10 col-lg-10">
            <div className="row">
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
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">4</a></li>
                  <li class="page-item"><a class="page-link" href="#">5</a></li>
                  <li class="page-item"><a class="page-link" href="#">6</a></li>
                  <li class="page-item"><a class="page-link" href="#">7</a></li>
                  <li class="page-item"><a class="page-link" href="#">8</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* <div className="col-sm-12 col-md-3 col-lg-3">
            <img
              className="img-fluid" src="https://autobunkers.com.br/Images/ann/lexus/thumb-estoque-lexus-300x300.jpg" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
