import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Card from '../Components/Card';
import Search from '../Components/Search';
import bannerStock from '../Images/auto-bunkers-banner-home.jpg';

function Main(props) {
  const [page, setPage] = useState(
    sessionStorage.getItem('currentPage')
      ? Number(sessionStorage.getItem('currentPage'))
      : 0
  );
  const [stock, setStock] = useState([]);
  const size = 12;
  const qtdVeiculos = props.mainStock.length;
  const pageCount = Math.ceil(qtdVeiculos / size);

  useEffect(() => {
    sessionStorage.setItem('currentPage', page);
    const start = page * size;
    const end = start + size;
    setStock(props.mainStock.slice(start, end));
  }, []);

  return (
    <div className="container-fluid">
      <div className="">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 my-4">
            <div className="container">
              <Search />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-2 col-lg-2 align-center main-side--1 text-right">
            <p className="text-size--22 m-0">
              <small className="text-danger bold">
                {' '}
                - Referência em veículos
              </small>
            </p>
            <p className="display-4 m-0">Auto Bunkers</p>
          </div>
          <div className="col-sm-12 col-md-10 col-lg-10">
            <div className="row">
              <div className="col-12 mb-2">
                {qtdVeiculos !== 0 && (
                  <p className="text-right">
                    Temos <b>{qtdVeiculos}</b> veículos em nosso estoque{' '}
                  </p>
                )}
              </div>
              {/* stock.length === 0 && <h1>Não há veiculos para esta busca</h1> */}
              {qtdVeiculos === 0 && (
                <div className="d-flex justify-content-center">
                  <div className="spinner-grow text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
              {stock.map(car => (
                <div
                  key={car.iD_Veiculo}
                  className="col-sm-12 col-md-6 col-lg-4 card-vehicle-stock"
                >
                  <Card vehicle={car} />
                </div>
              ))}
            </div>
            <div className="row justify-content-around my-5">
              {pageCount !== 0 && qtdVeiculos > size && (
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className={`page-item ${page <= 0 && 'disabled'}`}>
                      <a
                        className="page-link"
                        href="javascript:void(0)"
                        onClick={() => setPage(page - 1)}
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="page-link pagination"
                        href="javascript:void(0)"
                        aria-label="Previous"
                      >
                        Página {page + 1} de {pageCount}{' '}
                      </a>
                    </li>

                    <li
                      className={`page-item ${page + 1 === pageCount &&
                        'disabled'}`}
                    >
                      <a
                        className="page-link"
                        href="javascript:void(0)"
                        onClick={() => setPage(page + 1)}
                        aria-label="Next"
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              )}
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
  textInput: state.textFilter,
}))(Main);
