import React, { useState } from 'react';
import { connect } from 'react-redux';

import MarcasList from './MarcasList';
import SearchAdv from './SearchAdv';

function Search(props) {
  const [inputValue, setInputValue] = useState('');
  const handleSearch = e => {
    e.preventDefault();
    if (inputValue) {
      const { dispatch } = props;
      dispatch({
        type: 'FILTER_STOCK_TEXT',
        inputValue,
      });
      props.handleFiltered(inputValue);
    }
  };
  return (
    <>
      <p className="text-size--22">Encontre seu veículo</p>
      <div className="card bg-image--card--1 bg-transparent p-5">
        <div className="card-body">
          <form onSubmit={handleSearch} className="input-group input-group-lg">
            <input
              type="text"
              placeholder={
                props.mainStock.length <= 0
                  ? 'Carregando...'
                  : 'Qual carro está procurando?'
              }
              className="form-control border-danger"
              aria-label="Veiculo"
              aria-describedby="button-addon2"
              onChange={e => setInputValue(e.target.value.toLowerCase())}
            />
            <div className="input-group-append">
              <button
                className="btn btn-danger"
                type="button"
                id="button-addon1"
                data-toggle="tooltip"
                data-placement="top"
                title="Busca"
                onClick={handleSearch}
              >
                {props.mainStock.length <= 0 ? (
                  <>
                    <span
                      className="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Loading...</span>
                  </>
                ) : (
                  <>Pesquisar</>
                )}
              </button>
              <button
                className="btn btn-warning"
                type="button"
                id="button-addon2"
                data-toggle="modal"
                data-target={props.mainStock.length !== 0 && '#modalSearch'}
              >
                {props.mainStock.length <= 0 ? (
                  <>
                    <span
                      className="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Loading...</span>
                  </>
                ) : (
                  <i className="fab fa-searchengin" />
                )}
              </button>
            </div>
          </form>

          <div className="col-sm-12 col-md-12 col-lg-12 m-0">
            <p>
              <a
                className="text-dark"
                data-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Selecione a marca que preferir{' '}
                <i className="fas fa-angle-down" />
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card border-warning card-body">
                <MarcasList />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade bd-example-modal-lg"
        id="modalSearch"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Busca por marca
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <SearchAdv />
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(state => ({
  mainStock: state.Stock,
}))(Search);
