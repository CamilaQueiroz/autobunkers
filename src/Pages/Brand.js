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
    <>
      {list.map(car => (
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 align-center">
              <Card vehicle={car} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default connect(state => ({
  stock: state.Stock,
}))(Brand);
