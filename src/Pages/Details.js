import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import FsLightbox from 'fslightbox-react';
import logoSite from '../Images/logo-site.png';
import urusjpg from '../Images/urus.jpg';
import '../Styles/Components.css';
import api from '../Services/api';

function Details(props) {
  const [vehicle, setVehicle] = useState({});
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
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
        } else {
          setMessageError('Ocorreu um erro, tente novamente mais tarde');
        }
      })
      .catch(err => console.error(err));
    setLoading(false);
  }, [vehicle]);

  return (
    <div className="container-fluid mt-5 p-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8">
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
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
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
        <div className="row">
          <div className="row m-5">
            <div className="col-sm-12 col-md-12 col-lg-5 align-self-center">
              <h1 className="card-title">
                <span>{vehicle.desc_VeicMarca}</span>
                <span className="text-danger">{vehicle.desc_VeicModelo}</span>
              </h1>
              <p className="text-size--42">{vehicle.desc_VeicTipo}</p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7">
              <h3 className="card-title">Opicionais do veículo</h3>
              <p>{vehicle.opcionais}</p>
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
