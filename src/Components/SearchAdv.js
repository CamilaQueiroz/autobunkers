import React, { useEffect, useState } from 'react';
import { brands, models, year, version, prices } from '../Services/apiCombos';

export default function SearchAdv() {
  const [brandsCombo, setBrandsCombo] = useState([]);
  const [modelsCombo, setModelsCombo] = useState([]);
  const [tipo, setTipo] = useState(0);
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [yearCombo, setYearCombo] = useState([]);
  const [versionCombo, setVersionCombo] = useState([]);
  const [priceCombo, setPriceCombo] = useState([]);

  useEffect(() => {
    brands
      .then(res => setBrandsCombo(res.data))
      .catch(err => console.error(err));

    prices
      .then(res => setPriceCombo(res.data))
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
  const handleForm = async e => {
    const filter = {
      type: tipo,
      brand: marca,
      model: modelo,
      yearMax: yearCombo,
      version: versionCombo,
      priceMax: priceCombo,
    };
    console.info(e.target.value);
  };

  return (
    <form onChange={handleForm}>
      <div className="row">
        <div className="col-sm-12">
          <div className="row mt-3">
            <div className="col-sm-4 form-group">
              <label htmlFor="tipoVeiculo">Tipo</label>
              <select
                id="tipoVeiculo"
                className="form-control"
                onChange={e => setTipo(Number(e.target.value))}
              >
                <option value="0">Selecione</option>
                <option value="0">Todos</option>
                <option value="1">Novos</option>
                <option value="2">Usados</option>
              </select>
            </div>

            <div className="col-sm-4 form-group">
              <label htmlFor="brandsCombo">Marca</label>
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

            <div className="col-sm-4 form-group">
              <label htmlFor="modelsCombo">Modelo</label>
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

            <div className="col-sm-4 form-group">
              <label htmlFor="yearMaxCombo">Ano Maximo</label>
              <select
                id="yearMaxCombo"
                className="form-control"
                onChange={loadVersions}
              >
                <option>Selecione</option>
                {yearCombo.map(yearCar => (
                  <option value={yearCar.anoModelo}>{yearCar.anoModelo}</option>
                ))}
              </select>
            </div>

            <div className="col-sm-4 form-group">
              <label htmlFor="version">Versão</label>
              <select id="version" className="form-control">
                <option>Selecione</option>
                {versionCombo.map(versionCar => (
                  <option value={versionCar.descricao_VeicTipo}>
                    {versionCar.descricao_VeicTipo}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-sm-4 form-group">
              <label htmlFor="priceMax">Preço máximo</label>
              <select
                id="priceMax"
                className="form-control"
                onChange={e => setPriceCombo(Number(e.target.value))}
              >
                <option>Selecione</option>
                {priceCombo.map(price => (
                  <option value={price.preco}>{price.precoSite}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
