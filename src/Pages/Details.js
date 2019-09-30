import React, { useEffect, useState } from 'react';
import api from '../Services/api';

export default function Details({ match }) {
  const [vehicle, setVehicle] = useState({});
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    api
      .post('/api/Veiculos/requestVeiculo', {
        iD_Veiculo: match.params.id,
      })
      .then(async response => {
        if (response.status !== 200) {
          setMessageError('Ocorreu um erro, tente novamente mais tarde');
          return;
        }
        setVehicle(response.data);

        setLoading(false);
        setPhotos(response.data.fotos);
      })
      .catch(error => {
        console.error(`error ${error}`);
        setMessageError('Ocorreu um erro, tente novamente mais tarde');
      });
  });
  return (
    <>
      <div className="container">
        <div className="grid-x grid-padding-x">
          <div className="cell small-12">
            {messageError && <h1>{messageError}</h1>}
            {loading && <h1>Carregando...</h1>}
            <h1>{vehicle.descveic}</h1>
            <h2>{vehicle.cor_Veiculo}</h2>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>

      <h1>{vehicle.descveiccompleto}</h1>
      <h2>{vehicle.cor_Veiculo}</h2>
    </>
  );
}
