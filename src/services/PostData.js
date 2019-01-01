import axios from 'axios';

export function sendData(email, password) {
  const URL = 'http://recruitment-api.pyt1.stg.jmr.pl/login';
  const DATA = {
      email,
      password
  };
  const AXIOS_CONFIG = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
  };

  return axios.post(URL, DATA, AXIOS_CONFIG);
}