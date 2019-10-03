import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function QtdVeiculoMarca({ idMarca, stock }) {
  const [qtdMarca, setQtdMarca] = useState('');
  useEffect(() => {
    const filteredStock = stock.filter(car => car.iD_VeicMarca === idMarca);
    setQtdMarca(filteredStock.length);
  });
  return <>{qtdMarca}</>;
}

export default connect(state => ({
  stock: state.Stock,
}))(QtdVeiculoMarca);
