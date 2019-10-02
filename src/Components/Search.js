import React from 'react';

export default function Search() {
  return (
    <>
    <div className="card p-5 my-3">
      <div className="card-body">
        <div className="input-group input-group-lg mb-3">
          <input type="text" className="form-control border-danger" placeholder="Qual carro está procurando?" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <div className="input-group-append">
            <button className="btn btn-danger border-danger" type="button" id="button-addon1" data-toggle="tooltip" data-placement="top" title="Busca"><i className="fas fa-search"></i></button>
            <button className="btn btn-danger border-danger" type="button" id="button-addon2" data-toggle="modal" data-target="#modalSearch"><i className="fab fa-searchengin"></i></button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade bd-example-modal-lg" id="modalSearch" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>...</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
