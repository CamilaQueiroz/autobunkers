import api from './api';

export const brands = api.post('api/Combos/requestMarcasEmpresa', {
  iD_Empresa: 1,
  idCategoria: 1,
  iD_EmpresaGrupo: 2,
});

export async function models(idBrand) {
  const teste = await api.post('api/Combos/requestModelosEmpresa', {
    iD_Empresa: 1007,
    idVeicMarca: idBrand,
    idCategoria: 1,
    iD_EmpresaGrupo: 1007,
  });
  return teste;
}

export const year = api.post('api/Combos/requestAnosModelo', {
  idCategoria: 2,
  idVeicMarca: 2,
  idVeicModelo: 3,
  iD_EmpresaGrupo: 4,
  iD_Empresa: 5,
});
