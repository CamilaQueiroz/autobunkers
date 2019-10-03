import React, { useState } from 'react';
import { connect } from 'react-redux';
import MarcasList from './MarcasList';

function Search(props) {
  const [inputValue, setInputValue] = useState('');
  const handleSearch = e => {
    e.preventDefault();
    const { dispatch } = props;
    dispatch({
      type: 'FILTER_STOCK',
      inputValue,
    });
  };
  return (
    <>
      <p className="text-size--22">Encontre seu veículo</p>
      <div className="card bg-image--card--1 bg-transparent p-5">
        <div className="card-body">
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control border-danger"
              placeholder="Qual carro está procurando?"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-danger"
                type="button"
                id="button-addon1"
                data-toggle="tooltip"
                data-placement="top"
                title="Busca"
              >
                Pesquisar
              </button>
              <button
                className="btn btn-warning"
                type="button"
                id="button-addon2"
                data-toggle="modal"
                data-target="#modalSearch"
              >
                <i className="fab fa-searchengin" />
              </button>
            </div>
          </div>
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
                Modal title
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
            <div className="modal-body">
              <p />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(state => ({
  stock: state.Stock,
}))(Search);
