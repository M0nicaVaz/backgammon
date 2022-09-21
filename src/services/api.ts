import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://backgammon-api-production.up.railway.app',
});
