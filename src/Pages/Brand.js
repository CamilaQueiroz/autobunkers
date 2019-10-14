import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Card from '../Components/Card';

function Brand({ match, stock }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const filteredStock = stock.filter(car =>
      car.descveiccompleto
        .toLowerCase()
        .includes(match.params.brand.toLowerCase())
    );
    setList(filteredStock);
  });
  return (
    <div className="container-fluid">
      <div className="row p-0 p-md-5">
          {/* <div className="col p-5"><h2 className="text-center">Audi</h2></div> */}
            {list.map(car => (
              <div className="col-sm-12 col-md-6 col-lg-4 card-vehicle-stock">
                <Card vehicle={car} />
              </div>
            ))}
      </div>
    </div>
  );
}

export default connect(state => ({
  stock: state.Stock,
}))(Brand);
