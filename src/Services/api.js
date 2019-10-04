import axios from 'axios';

const token = '0x00ba149aeccecf6443a4018406e12b23';

const api = axios.create({
  baseURL: 'http://apisites.bndv.com.br',
  headers: { AccessToken: token, Db: 1 },
});

export default api;
