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
  let timer = null;
  const [pageFilter, setPageFilter] = useState(
    sessionStorage.getItem('currentPageFilter')
      ? Number(sessionStorage.getItem('currentPageFilter'))
      : 0
  );

  const [stock, setStock] = useState([]);
  const [filteredStock, setFilteredStock] = useState([]);
  const size = 12;
  const [qtdVeiculos, setQtdVeiculos] = useState(0);
  const pageCount = Math.ceil(qtdVeiculos / size);
  const [messageNotFound, setMessageNotFound] = useState('');

  useEffect(() => {
    sessionStorage.setItem('currentPage', page);
  }, [page]);

  useEffect(() => {
    sessionStorage.setItem('currentPageFilter', pageFilter);
    const start = pageFilter * size;
    const end = start + size;
    if (props.textFilteredStock) {
      setQtdVeiculos(props.textFilteredStock.length);
      setFilteredStock(props.textFilteredStock.slice(start, end));
    }
  }, [props.textFilteredStock, pageFilter]);

  useEffect(() => {
    if (props.stateStockFilter) {
      setQtdVeiculos(props.mainStock.length);
      const start = page * size;
      const end = start + size;
      setStock(props.mainStock.slice(start, end));
    }
  }, [props.mainStock, page, props.stateStockFilter]);

  const handleFiltered = text => {
    if (text !== '') {
      setPageFilter(0);
      sessionStorage.setItem('currentPageFilter', 0);
      const filterText = props.mainStock.filter(car => {
        return car.descveiccompleto.toLowerCase().includes(text);
      });
      const start = pageFilter * size;
      const end = start + size;

      if (filterText.length > 0) {
        setQtdVeiculos(filterText.length);
        const { dispatch } = props;
        dispatch({
          type: 'FILTERED_STOCK',
          filterStock: filterText,
        });
        dispatch({
          type: 'SHOW_STOCK_FILTER',
          state: false,
        });
        setFilteredStock(filterText.slice(start, end));
      } else {
        setMessageNotFound('Não encontramos veículos para essa busca');
        timer = setTimeout(() => {
          setMessageNotFound('');
        }, 5000);
      }
    }
  };

  useEffect(() => {
    return () => clearTimeout(timer);
  }, []);

  const changeStateStockFilter = () => {
    const { dispatch } = props;
    dispatch({
      type: 'SHOW_STOCK_FILTER',
      state: true,
    });
  };

  return (
    <div className="container-fluid">
      <div className="">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 my-4">
            <div className="container">
              <Search handleFiltered={handleFiltered} />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-2 col-lg-2 align-center main-side--1 text-right">
            <div className="col d-none d-md-block">
              <p className="text-size--22 m-0">
                <small className="text-danger bold">
                  - Referência em veículos
                </small>
              </p>
              <p className="display-4 m-0">Auto Bunkers</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-10 col-lg-10">
            <div className="row">
              <div className="col-12 mb-2">
                {props.stateStockFilter === false && (
                  <button
                    type="button"
                    onClick={() => changeStateStockFilter()}
                  >
                    Remover busca
                  </button>
                )}
                {qtdVeiculos !== 0 && (
                  <p className="text-right">
                    Temos <b>{qtdVeiculos}</b> veículos em nosso estoque{' '}
                  </p>
                )}
              </div>
              <div className="col-12 mb-2">
                {messageNotFound && <h1>{messageNotFound}</h1>}
              </div>
              {qtdVeiculos === 0 && (
                <div className="col-4 justify-content-center">
                  <div className="timeline-item">
                    <div className="animated-background">
                      <div className="d-flex justify-content-center">
                        <div className="spinner-grow text-danger" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {props.stateStockFilter
                ? stock.map(car => (
                    <div
                      key={car.iD_Veiculo}
                      className="col-sm-12 col-md-6 col-lg-4 card-vehicle-stock"
                    >
                      <Card vehicle={car} />
                    </div>
                  ))
                : filteredStock.map(car => (
                    <div
                      key={car.iD_Veiculo}
                      className="col-sm-12 col-md-6 col-lg-4 card-vehicle-stock"
                    >
                      <Card vehicle={car} />
                    </div>
                  ))}
            </div>

            {props.stateStockFilter ? (
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
            ) : (
              <div className="row justify-content-around my-5">
                {pageCount !== 0 && qtdVeiculos > size && (
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li
                        className={`page-item ${pageFilter <= 0 && 'disabled'}`}
                      >
                        <a
                          className="page-link"
                          href="javascript:void(0)"
                          onClick={() => setPageFilter(pageFilter - 1)}
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
                          Página {pageFilter + 1} de {pageCount}{' '}
                        </a>
                      </li>

                      <li
                        className={`page-item ${pageFilter + 1 === pageCount &&
                          'disabled'}`}
                      >
                        <a
                          className="page-link"
                          href="javascript:void(0)"
                          onClick={() => setPageFilter(pageFilter + 1)}
                          aria-label="Next"
                        >
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                )}
              </div>
            )}

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
  textFilteredStock: state.StockFilter,
  stateStockFilter: state.NoFilter,
}))(Main);
