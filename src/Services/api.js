import axios from 'axios';

const token = '0x1d1d1314d33925a7eb36817fdc43a347';

const api = axios.create({
  baseURL: 'http://apisites.bndv.com.br',
  headers: { AccessToken: token, Db: 1 },
});

export default api;
