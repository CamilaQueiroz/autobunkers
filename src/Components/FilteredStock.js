import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Card from './Card';

function FilteredStock(props) {
  const [filtered, setFiltered] = useState([]);

  const [pageFilter, setPageFilter] = useState(
    sessionStorage.getItem('currentPageFilter')
      ? Number(sessionStorage.getItem('currentPageFilter'))
      : 0
  );
  const size = 12;
  const [qtdVeiculos, setQtdVeiculos] = useState(0);
  const pageCount = Math.ceil(qtdVeiculos / size);

  useEffect(() => {
    sessionStorage.setItem('currentPageFilter', pageFilter);
    setFiltered(props.stock);
  }, [pageFilter, props.stock]);

  useEffect(() => {
    if (props.textInput !== '') {
      console.info(props.stock);
      const filterText = props.stock.filter(car => {
        return car.descveiccompleto.toLowerCase().includes(props.textInput);
      });
      console.info(filterText);
      const start = pageFilter * size;
      const end = start + size;

      if (filterText.length > 0) {
        setQtdVeiculos(filterText.length);
        setFiltered(filterText.slice(start, end));
      }
    }
  }, [props.textInput, props.stock]);
  return (
    <>
      {console.info(filtered)}
      {filtered.map(car => (
        <div
          key={car.iD_Veiculo}
          className="col-sm-12 col-md-6 col-lg-4 card-vehicle-stock"
        >
          <Card vehicle={car} />
        </div>
      ))}
    </>
  );
}

export default connect(state => ({
  textInput: state.TextFilter,
}))(FilteredStock);
