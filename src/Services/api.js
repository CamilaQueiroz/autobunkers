import axios from 'axios';

const token = '0x7d655a59d3d9faa92aa47bef2c779ab4';

const api = axios.create({
  baseURL: 'http://apisites.bndv.com.br',
  headers: { AccessToken: token, Db: 1 },
});

export default api;
