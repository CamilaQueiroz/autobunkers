import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import logoSite from '../Images/logo-site.png';

function Details(props) {
  const [vehicle, setVehicle] = useState({});
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    if (props.stock.length > 0) {
      const idParam = Number(props.match.params.id);
      let vehicleDetail = '';
      props.stock.some(car => {
        if (car.iD_Veiculo === idParam) {
          vehicleDetail = car;
        }
        return car.iD_Veiculo === idParam;
      });
      console.info(vehicleDetail);
      setVehicle(vehicleDetail);
      setPhotos(vehicleDetail.fotos);
    } else {
      setMessageError('Ocorreu um erro, tente novamente mais tarde');
    }
    setLoading(false);
  });
  return (
    <div className="container-fluid mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8">
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
                  <div className={`carousel-item ${index === 0 && 'active'}`}>
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
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Opicionais do veículo</h3>
                <div className="card-text">
                  <p>{vehicle.obs_Veiculo}</p>
                  <img className="img-fluid" src={logoSite} alt="Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">
                  <span>{vehicle.desc_VeicMarca}</span>{' '}
                  <span className="text-danger">{vehicle.desc_VeicModelo}</span>
                </h1>
                <p className="card-text">{vehicle.desc_VeicTipo}</p>
                <div className="">
                  <ul className="d-flex list-group list-group-horizontal">
                    <li className="flex-fill list-group-item border-0">
                      <h2 className="">Ano</h2>
                      <strong> {vehicle.anoveic}</strong>
                    </li>
                    <li className="flex-fill list-group-item border-0">
                      <h2 className="">KM</h2>
                      <strong> {vehicle.anoveic}</strong>
                    </li>
                    <li className="flex-fill list-group-item border-0">
                      <h2 className="">Câmbio</h2>
                      <strong> {vehicle.anoveic}</strong>
                    </li>
                    <li className="flex-fill list-group-item border-0">
                      <h2 className="">Carroceria</h2>
                      <strong> {vehicle.anoveic}</strong>
                    </li>
                  </ul>
                  <ul className="d-flex list-group list-group-horizontal">
                    <li className="flex-fill list-group-item border-0">
                      <h2 className="">Combustível</h2>
                      <strong> {vehicle.anoveic}</strong>
                    </li>
                    <li className="flex-fill list-group-item border-0">
                      <h2 className="">Cor</h2>
                      <strong> {vehicle.anoveic}</strong>
                    </li>
                    <li className="flex-fill list-group-item border-0">
                      <h2 className="">Final de placa</h2>
                      <strong> {vehicle.anoveic}</strong>
                    </li>
                    {/* <li className="flex-fill list-group-item border-0">
                    <h2 className="">ano</h2><strong> {vehicle.anoveic}</strong>
                  </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

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
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({
  stock: state.Stock,
}))(Details);
