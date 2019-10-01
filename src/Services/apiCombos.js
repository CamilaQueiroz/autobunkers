import api from './api';

export const brands = api.post('api/Combos/requestMarcasEmpresa', {
  iD_Empresa: 1,
  idCategoria: 1,
  iD_EmpresaGrupo: 2,
});

export async function models(idBrand) {
  const modelsCombo = await api.post('api/Combos/requestModelosEmpresa', {
    iD_Empresa: 1007,
    idVeicMarca: idBrand,
    idCategoria: 1,
    iD_EmpresaGrupo: 1007,
  });
  return modelsCombo;
}

export async function year(idBrand, idModel) {
  const yearCombo = await api.post('api/Combos/requestAnosModeloEmpresa', {
    idCategoria: 1,
    idVeicMarca: idBrand,
    idVeicModelo: idModel,
    iD_EmpresaGrupo: 1007,
    iD_Empresa: 1007,
  });
  return yearCombo;
}

export async function version(idBrand, idModel, yearModel) {
  const yearCombo = await api.post('api/Combos/requestVersoesEmpresa', {
    idCategoria: 1,
    idVeicMarca: idBrand,
    idVeicModelo: idModel,
    anoModelo: yearModel,
    iD_EmpresaGrupo: 1007,
    iD_Empresa: 1007,
  });
  console.info(yearCombo.data);
  return yearCombo;
}
