import React, { useEffect, useState } from 'react';
import api from '../Services/api';
import Card from '../Components/Card';

export default function Main() {
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    api
      .post('/api/Veiculos/requestVeiculos', {
        iD_Categoria: 1,
        iD_TipoVeiculo: 0,
        ordenacao: 1,
        paginaCorrente: 1,
        qtdItensPagina: 5000,
      })
      .then(async response => {
        if (response.status !== 200) {
          setMessageError('Ocorreu um erro, tente novamente mais tarde');
          return;
        }
        setStock(response.data);

        setLoading(false);
      })
      .catch(error => {
        console.error(`error ${error}`);
        setMessageError('Ocorreu um erro, tente novamente mais tarde');
      });
  });

  return (
    <div classNameNameName="container">
      <div classNameNameName="grid-x grid-padding-x">
        {messageError && <h1>{messageError}</h1>}
        {loading && <h1>Carregando...</h1>}
        {stock.map(car => (
          <div
            classNameNameName="column small-12 medium-6"
            key={car.iD_Veiculo}
          >
            <Card vehicle={car} />
          </div>
        ))}
      </div>
    </div>
  );
}
