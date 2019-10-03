import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import FsLightbox from 'fslightbox-react';
import api from '../Services/api';
import logoSite from '../Images/logo-site.png';
import urusjpg from '../Images/urus.jpg';
import '../Styles/Components.css';

function Details(props) {
  const [vehicle, setVehicle] = useState({});
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [messageError, setMessageError] = useState('');
  const [toggler, setToggler] = useState(false);
  const [productIndex, setProductIndex] = useState(0);
  useEffect(() => {
    if (props.stock.length > 0) {
      const idParam = Number(props.match.params.id);
      let vehicleDetail = '';
      props.stock.some(car => {
        if (car.iD_Veiculo === idParam) {
          vehicleDetail = car;
          setVehicle(car);
          setPhotos(car.fotos);
        }
        return car.iD_Veiculo === idParam;
      });
    }
  });

  return (
    <div className="container-fluid mt-5 p-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-7">
            <div className="row">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                {messageError && <h1>{messageError}</h1>}
                {loading && (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-danger" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                )}
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  />
                </ol>
                <div className="carousel-inner">
                  {photos.map((photo, index) => (
                    <div
                      key={photo.url}
                      className={`carousel-item ${index === 0 && 'active'}`}
                    >
                      <img
                        id="carouselImage"
                        className="img-fluid"
                        src={photo.url}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="col-div-lightbox mt-3">
                {photos.map(photo => (
                  <img
                    className="img-lightbox-custom"
                    onClick={() => setToggler(!toggler)}
                    key={photo.url}
                    src={photo.url}
                    alt="photos"
                  />
                ))}
                <FsLightbox
                  toggler={toggler}
                  customSources={photos.map(photo => (
                    <img
                      className="img-lightbox-custom"
                      key={photo.url}
                      src={photo.url}
                      alt="photos"
                    />
                  ))}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className="card bg-dark-gray">
              <div className="card-body">
                <h3 className="card-title text-right">
                  R${vehicle.vlrWeb_Veiculo}
                </h3>
                <div className="card-text">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <ul className="list-group custom-list list-group-horizontal flex-wrap">
                        <li className="list-group-item border-0">
                          <h2 className="text-danger">Ano</h2>
                          <strong> {vehicle.anoveic}</strong>
                        </li>
                        <li className="list-group-item border-0">
                          <h2 className="text-danger">KM</h2>
                          <strong> {vehicle.anoveic}</strong>
                        </li>
                        <li className="list-group-item border-0">
                          <h2 className="text-danger">Câmbio</h2>
                          <strong> {vehicle.anoveic}</strong>
                        </li>
                        <li className="list-group-item border-0">
                          <h2 className="text-danger">Carroceria</h2>
                          <strong> {vehicle.anoveic}</strong>
                        </li>
                        <li className="list-group-item border-0">
                          <h2 className="text-danger">Combustível</h2>
                          <strong> {vehicle.anoveic}</strong>
                        </li>
                        <li className="list-group-item border-0">
                          <h2 className="text-danger">Cor</h2>
                          <strong> {vehicle.anoveic}</strong>
                        </li>
                        <li className="list-group-item border-0">
                          <h2 className="text-danger">Final de placa</h2>
                          <strong> {vehicle.anoveic}</strong>
                        </li>
                        {/* <li className="list-group-item border-0">
                    <h2 className="">ano</h2><strong> {vehicle.anoveic}</strong>
                  </li> */}
                      </ul>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title" />
                          <div className="card-text">
                            <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">
                                Nome
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="nome"
                                placeholder="name@examplo.com"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">
                                E-mail
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="name@examplo.com"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleFormControlSelect1">
                                Motivo do contato
                              </label>
                              <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                              >
                                <option>opções</option>
                                <option>opções</option>
                                <option>opções</option>
                                <option>opções</option>
                                <option>opções</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleFormControlTextarea1">
                                Deixe uma mensagem
                              </label>
                              <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-success btn-block"
                            >
                              Enviar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12 col-md-12 col-lg-12 p-0">
            <div className="card card-custom custom-card--2">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-3">
                    <h1 className="card-title">
                      <span>{vehicle.desc_VeicMarca}</span>{' '}
                      <span className="text-danger">
                        {vehicle.desc_VeicModelo}
                      </span>
                    </h1>
                    <p className="card-text">{vehicle.desc_VeicTipo}</p>
                    <img className="img-fluid" src={logoSite} alt="Logo" />
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="card custom-card--3">
                      <div className="card-body">
                        <h3 className="card-title">Opicionais do veículo</h3>
                        <div className="card-text">
                          <p>{vehicle.obs_Veiculo}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-3">
                    <img className="img-fluid" src={logoSite} alt="Logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="card">
                <div className="card-body">
                  {/* <p className="card-text"></p> */}
                  <div className="jumbotron">
                    <h3>Opicionais do veículo</h3>
                    <hr className="my-4" />
                    <p>{vehicle.opcionais}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
              <img className="img-fluid" src={urusjpg} alt="..." />
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12">
              <p>{vehicle.obs_Veiculo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({ stock: state.Stock }))(Details);
