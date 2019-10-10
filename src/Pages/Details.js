import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import FsLightbox from 'fslightbox-react';
import logoSite from '../Images/logo-site.png';
import urusjpg from '../Images/urus.jpg';
import lojaCima from '../Images/autob-loja--vistacima.jpg';

import Loja from '../Images/autob-loja--2.jpg';
import '../Styles/Components.css';
import api from '../Services/api';

function Details(props) {
  const [vehicle, setVehicle] = useState({});
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [mainPicture, setMainPicture] = useState('');
  const [messageError, setMessageError] = useState('');
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    const idParam = Number(props.match.params.id);
    api
      .post('api/Veiculos/requestVeiculo', {
        iD_Veiculo: idParam,
      })
      .then(res => {
        if (res.status === 200) {
          setVehicle(res.data);
          setPhotos(res.data.fotos);
          setMainPicture(res.data.fotos[0].url);
        } else {
          setMessageError('Ocorreu um erro, tente novamente mais tarde');
        }
      })
      .catch(err => console.error(err));
    setLoading(false);
  }, [vehicle]);

  return (
    <div className="container-fluid mt-5 p-0">
      <div className="container-fluid p-0">
        <div className="d-flex">
          <div
            className="col-sm-12 col-md-12 col-lg-3 d-none d-xl-block bg-dark p-5"
            style={{
              backgroundImage: `url(${mainPicture})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              minHeight: '500px',
              maxHeight: '100%',
              opacity: 0.585,
            }}
          >
            <div className="col flex-column main-side--1 text-right text-dark">
              <p className="text-size--42 m-0">{vehicle.desc_VeicTipo}</p>
              <p className="text-size--72 m-0">
                <strong className="text-danger">
                  {vehicle.desc_VeicMarca}{' '}
                </strong>
                <span> {vehicle.desc_VeicModelo}</span>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9 px-0 px-md-3">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                  <div className="row">
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      {messageError && <h1>{messageError}</h1>}
                      {loading && (
                        <div className="col-4 justify-content-center">
                          <div className="timeline-item">
                            <div className="animated-background">
                              <div className="d-flex justify-content-center">
                                <div
                                  className="spinner-grow text-danger"
                                  role="status"
                                >
                                  <span className="sr-only">Loading...</span>
                                </div>
                              </div>
                            </div>
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
                            className={`carousel-item ${index === 0 &&
                              'active'}`}
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
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                  <h3 className="text-size--42 text-right">
                    R${vehicle.vlrWeb_Veiculo}
                  </h3>
                  <div className="alert alert-dark" role="alert">
                    Veja as imagens em tela cheia.
                    <a href="#" className="alert-link">
                      {' '}
                      Clique aqui
                    </a>{' '}
                    ou clique nas imagens.
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
                      customSources={[
                        photos.map(photo => (
                          <div>
                            <img src={photo.url} alt="Foto" />
                          </div>
                        )),
                      ]}
                      type="image"
                      key={photos}
                    />
                  </div>

                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row py-5 py-md-5">
                <div className="col-sm-12 col-md-12 col-lg-5 align-self-center bg-light p-0 p-md-3">
                  <h1 className="card-title">
                    <span>{vehicle.desc_VeicMarca}</span>
                    <span className="text-danger">
                      {vehicle.desc_VeicModelo}
                    </span>
                  </h1>
                  <p className="text-size--32">{vehicle.desc_VeicTipo}</p>

                  <div class="d-flex align-content-end flex-wrap">
                    <ul className="list-inline"></ul>
                    <li className="list-inline-item p-3"><h5 className="text-second text-size--12 text-danger">Ano </h5><span className="font-weight-bold text-size--22">{vehicle.anoveic}</span></li>
                    <li className="list-inline-item p-3"><h5 className="text-second text-size--12 text-danger">Km </h5><span className="font-weight-bold text-size--22">{vehicle.kM_Veiculo}</span></li>
                    <li className="list-inline-item p-3"><h5 className="text-second text-size--12 text-danger">Combustível </h5><span className="font-weight-bold text-size--22">{vehicle.desc_Combustivel}</span></li>
                    <li className="list-inline-item p-3"><h5 className="text-second text-size--12 text-danger">Situação </h5><span className="font-weight-bold text-size--22">{vehicle.desc_TipoVeiculo}</span></li>
                    <li className="list-inline-item p-3"><h5 className="text-second text-size--12 text-danger">Cor </h5><span className="font-weight-bold text-size--22">{vehicle.cor_Veiculo}</span></li>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-7 bg-dark text-white p-5">
                  <h3 className="card-title">
                    <span className="text-danger">Opicionais</span> do veículo
                  </h3>
                  <p>{vehicle.opcionais}</p>
                </div>
              </div>
              <div className="row p-0 p-md-5">
                <div className="col-sm-12 col-md-12 col-lg-8 p-0 p-md-4">
                  <img className="img-fluid" src={lojaCima} alt="..." />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 bg-light text-dark p-5 align-self-center">
                  <h3 className="card-title">
                    <span className="text-danger">Sobre</span> a Auto Bunkers
                  </h3>
                  <p>{vehicle.obs_Veiculo}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({ stock: state.Stock }))(Details);
