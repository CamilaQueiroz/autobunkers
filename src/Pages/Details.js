import React, { useEffect, useState } from 'react';
import api from '../Services/api';

export default function Details({ match }) {
  const [vehicle, setVehicle] = useState({});
  const [loading, setLoading] = useState(true);
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
            <div>
              {vehicle.fotos.map(foto => {
                return <img src={foto.url} alt="foto" />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
