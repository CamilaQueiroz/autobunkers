import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Components/Loading';

export default function Card({ vehicle }) {
  const [DescVeic, setDescVeic] = useState('');
  useEffect(() => {
    const descriptionCar = vehicle.descveiccompleto.replace(/ /gi, '-');
    setDescVeic(descriptionCar);
  }, [vehicle.descveiccompleto]);
  return (
    <div className="card mb-3 shadow-sm">
      <Loading />
      <div className="row no-gutters">
        <Link to={`/detalhes/${vehicle.iD_Veiculo}/${DescVeic}`}>
          <img
            src={vehicle.fotos[0].url}
            className="card-img-top shadow"
            alt="..."
          />
          <div className="card-img-overlay">
            <p className="text-light card-vehicle-title shadow-md">
              {vehicle.desc_VeicMarca} {vehicle.desc_VeicModelo}
            </p>
          </div>
          <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
            <p className="d-flex m-1 text-size--22">
              <span className="flex-fill">
                <i className="fas fa-grip-horizontal text-success" />
              </span>
              <span className="flex-fill text-light text-right card-vehicle-title--2">
                R${vehicle.vlrWeb_Veiculo}{' '}
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
