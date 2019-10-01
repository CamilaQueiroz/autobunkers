import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

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
        <div>
          {photos.map(photo => (
            <img key={photo.url} src={photo.url} alt="photos" />
          ))}
        </div>
      </div>
    </>
  );
}

export default connect(state => ({
  stock: state.Stock,
}))(Details);
