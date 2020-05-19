import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://192.168.43.94:5000/api',
});

export const setAuthToken = token => {
  API.defaults.headers.common['Authorization'] = `${token}`;
};
