import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
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
              <a className="nav-link" href="https://www.autobunkers.com.br/" target="_blank">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.autobunkers.com.br/empresa" target="_blank">
                Empresa
                </a>
            </li>
            <li className="nav-item">
              <Link to={`/`} className="nav-link">
                Veículos
                </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.autobunkers.com.br/consignado" target="_blank">
                Consignado
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.autobunkers.com.br/parceiros" target="_blank">
                Parceiros
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.autobunkers.com.br/informacoes" target="_blank">
                Informações
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.autobunkers.com.br/contato" target="_blank">
                Contato
                </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
