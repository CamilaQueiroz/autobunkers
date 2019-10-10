import axios from 'axios';

const token = '0xa4a9d6181b61655145b45948e86439ba';

const api = axios.create({
  baseURL: 'http://apisites.bndv.com.br',
  headers: { AccessToken: token, Db: 1 },
});

export default api;
