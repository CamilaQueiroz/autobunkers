import axios from 'axios';

const token = '0xc6dece34692d0ba6888a75f186c5d441';

const api = axios.create({
  baseURL: 'http://apisites.bndv.com.br',
  headers: { AccessToken: token, Db: 1 },
});

export default api;
