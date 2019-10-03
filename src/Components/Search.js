import React, { useState } from 'react';
import { connect } from 'react-redux';

function Search(props) {
  const [inputValue, setInputValue] = useState('');
  const handleSearch = e => {
    e.preventDefault();
    const { dispatch } = props;
    dispatch({
      type: 'FILTER_STOCK',
      inputValue,
    });
  };
  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Veículo..."
        aria-label="Search"
        onChange={e => setInputValue(e.target.value.toLowerCase())}
      />
      <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default connect(state => ({
  stock: state.Stock,
}))(Search);
