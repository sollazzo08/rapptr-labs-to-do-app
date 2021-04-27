import { apiURL } from '../config.json';
import axios from 'axios';

const apiEnpoint = apiURL + '/user-login.php';

export const login = (email, password) => {
  return axios.post(apiEnpoint, { email, password });
};
