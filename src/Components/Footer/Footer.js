import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function Footer() {
    return (
        <div className="container-fluid mt-5 container-footer">
            <div className="row text-right">
                <div className="col-sm-12 col-md-12 col-lg-12 p-5">
                    <ul className="list-group list-unstyled list-footer--1">
                        <li>
                            <a className="item-link" href="https://www.autobunkers.com.br/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="item-link" href="https://www.autobunkers.com.br/empresa" target="_blank">
                                Empresa
                            </a>
                        </li>
                        <li>
                            <Link to={`/`} className="item-link">
                                Veículos
                            </Link>
                        </li>
                        <li>
                            <a className="item-link" href="https://www.autobunkers.com.br/consignado" target="_blank">
                                Consignado
                            </a>
                        </li>
                        <li>
                            <a className="item-link" href="https://www.autobunkers.com.br/parceiros" target="_blank">
                                Parceiros
                            </a>
                        </li>
                        <li>
                            <a className="item-link" href="https://www.autobunkers.com.br/informacoes" target="_blank">
                                Informações
                            </a>
                        </li>
                        <li>
                            <a className="item-link" href="https://www.autobunkers.com.br/contato" target="_blank">
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 p-5">
                    <ul className="list-inline list-footer--2">
                        <li className="list-inline-item px-3"><a href="https://facebook.com/autobunkers" className="item-link" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="list-inline-item px-3"><a href="https://instagram.com/autobunkers" className="item-link" target="_blank"><i className="fab fa-instagram"></i></a></li>
                        <li className="list-inline-item px-3"><a href="#" className="item-link" target="_blank"><i className="fab fa-whatsapp"></i></a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
