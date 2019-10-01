import axios from 'axios';

const token = '0x29c22ba2144c6641a6de161679c117f2';

const api = axios.create({
  baseURL: 'http://apisites.bndv.com.br',
  headers: { AccessToken: token, Db: 1 },
});

export default api;
