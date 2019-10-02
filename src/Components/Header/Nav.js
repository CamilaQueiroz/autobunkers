import React from 'react';

export default function Nav() {
  return (

    <nav className="navbar navbar-light shadow-md navbar-transparent navbar-expand-lg shadow-md sticky-top">
      <a className="navbar-brand text-size--42" href="https://autobunkers.com.br/"><strong className="text-dark"><span className="text-secondary">Auto</span> Bunkers</strong></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Empresa
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Veículos
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Consignado
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Parceiros
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Informações
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contato
                </a>
            </li>
          </ul>
        </div>
    </nav>
  );
}
