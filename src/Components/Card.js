import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Card({ vehicle }) {
  const [DescVeic, setDescVeic] = useState('');
  useEffect(() => {
    const descriptionCar = vehicle.descveiccompleto.replace(/ /gi, '-');
    setDescVeic(descriptionCar);
  }, [vehicle.descveiccompleto]);
  return (
    <>
      <Link to={`/detalhes/${vehicle.iD_Veiculo}/${DescVeic}`} className="card">
        <div className="card-divider">
          <h1>{vehicle.descveic}</h1>
        </div>
        <img src={vehicle.fotos[0].url} alt="Carro" />
        <div className="card-section">
          <h2>Description</h2>
        </div>
      </Link>
    </>
  );
}
