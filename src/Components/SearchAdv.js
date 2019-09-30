import React, { useEffect, useState } from 'react';
import { brands, models } from '../Services/apiCombos';

export default function SearchAdv() {
  const [brandsCombo, setBrandsCombo] = useState([]);
  const [modelsCombo, setModelsCombo] = useState([]);
  useEffect(() => {
    brands
      .then(res => setBrandsCombo(res.data))
      .catch(err => console.error(err));
  });

  const loadModels = async e => {
    const idVeiculoMarca = e.target.value;
    await models(idVeiculoMarca)
      .then(res => setModelsCombo(res.data))
      .catch(err => console.error(err));
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-3">
              <select id="tipoVeiculo" className="form-control">
                <option value="0">Selecione</option>
                <option value="0">Todos</option>
                <option value="1">Novos</option>
                <option value="2">Usados</option>
              </select>
            </div>

            <div className="col-sm-3">
              <select
                id="brandsCombo"
                onChange={loadModels}
                className="form-control"
              >
                <option>Selecione</option>
                {brandsCombo.map(brand => (
                  <option key={brand.iD_VeicMarca} value={brand.iD_VeicMarca}>
                    {brand.descricao}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-sm-3">
              <select id="modelsCombo" className="form-control">
                <option>Selecione</option>
                {modelsCombo.map(model => (
                  <option key={model.iD_VeicModelo} value={model.iD_VeicModelo}>
                    {model.descricao_Modelo}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-sm-3">
              <select id="yearMinCombo" className="form-control">
                <option>2019</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
