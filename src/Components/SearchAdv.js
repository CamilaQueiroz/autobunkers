import React, { useEffect, useState } from 'react';
import { brands, models, year, version } from '../Services/apiCombos';

export default function SearchAdv() {
  const [brandsCombo, setBrandsCombo] = useState([]);
  const [modelsCombo, setModelsCombo] = useState([]);
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [yearCombo, setYearCombo] = useState([]);
  const [versionCombo, setVersionCombo] = useState([]);
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
    setMarca(idVeiculoMarca);
  };

  const loadYear = async e => {
    const modeloValue = e.target.value;
    setModelo(modeloValue);
    await year(marca, modeloValue)
      .then(res => setYearCombo(res.data))
      .catch(err => console.error(err));
  };

  const loadVersions = async e => {
    const anoModelo = e.target.value;
    await version(marca, modelo, anoModelo)
      .then(res => setVersionCombo(res.data))
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
              <select
                id="modelsCombo"
                className="form-control"
                onChange={loadYear}
              >
                <option>Selecione</option>
                {modelsCombo.map(model => (
                  <option key={model.iD_VeicModelo} value={model.iD_VeicModelo}>
                    {model.descricao_Modelo}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-sm-3">
              <select
                id="yearMinCombo"
                className="form-control"
                onChange={loadVersions}
              >
                <option>Selecione</option>
                {yearCombo.map(yearCar => (
                  <option value={yearCar.anoModelo}>{yearCar.anoModelo}</option>
                ))}
              </select>
            </div>

            <div className="col-sm-3">
              <select id="version" className="form-control">
                <option>Selecione</option>
                {versionCombo.map(versionCar => (
                  <option value={versionCar.descricao_VeicTipo}>
                    {versionCar.descricao_VeicTipo}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
