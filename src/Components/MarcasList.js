import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../Services/api';

import QtdVeiculoMarca from './QtdVeiculoMarca';

function MarcasList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const marcas = api.post('api/Combos/requestMarcasEmpresa', {
      iD_Empresa: 1007,
      idCategoria: 1,
      iD_EmpresaGrupo: 1007,
    });
    marcas
      .then(res => {
        if (res.status !== 200) {
          return;
        }
        setList(res.data);
      })
      .catch(error => {
        console.error(`error ${error}`);
      });
    return () => marcas;
  }, [list]);

  return (
    <>
      <span className="list-marca-link">
        {list.map(marca => (
          <Link
            className="text-dark text-decoration-none p-2 float-left"
            key={marca.iD_VeicMarca}
            to={`/${marca.descricao}`}
          >
            {marca.descricao}{' '}
            <span className="badge badge-danger text-decoration-none">
              <QtdVeiculoMarca idMarca={marca.iD_VeicMarca} />
            </span>
          </Link>
        ))}
      </span>
    </>
  );
}

export default MarcasList;
