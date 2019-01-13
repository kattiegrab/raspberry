import axios from 'axios';

export function sendData(login, password, message, status) {
  const URL = 'https://recruitment-api.pyt1.stg.jmr.pl/login';
  const DATA = {
      login,
      password,
      message, 
      status
  };
  const AXIOS_CONFIG = {
    headers: {
        'Content-Type': 'application/json'
    }
  };

  return axios.post(URL, DATA, AXIOS_CONFIG);
}

