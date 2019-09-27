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
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-12">
            <img src={vehicle.fotos[0].url} className="card-img" alt="..." />
          </div>
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title">{vehicle.desc_VeicMarca} {vehicle.desc_VeicModelo}</h5>
              <p className="card-text">{vehicle.desc_VeicTipo}</p>
              <p className="card-text"><small className="text-muted">{vehicle.obs_Veiculo.substr(0,200)} 
              <Link to={`/detalhes/${vehicle.iD_Veiculo}/${DescVeic}`}> ver mais...</Link></small></p>
              <Link to={`/detalhes/${vehicle.iD_Veiculo}/${DescVeic}`} className="btn btn-outline-danger btn-block">
                Ver veículo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
