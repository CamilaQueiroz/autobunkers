import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../Services/api';

import QtdVeiculoMarca from './QtdVeiculoMarca';

function MarcasList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const listarMarcas = api.post('api/Combos/requestMarcasEmpresa', {
      iD_Empresa: 1007,
      idCategoria: 1,
      iD_EmpresaGrupo: 1007,
    });
    listarMarcas.then(res => setList(res.data));
  });

  return (
    <div className="row">
      <ul className="list-unstyled">
        {list.map(marca => (
          <li className="pt-1">
            <Link
              className="text-secondary"
              key={marca.iD_VeicMarca}
              to={`/estoque/${marca.descricao}`}
            >
              {marca.descricao}{' '}
              <span className="badge badge-info">
                <QtdVeiculoMarca idMarca={marca.iD_VeicMarca} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MarcasList;
