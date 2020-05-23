import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://sayur-box.herokuapp.com/api',
});

export const setAuthToken = token => {
  API.defaults.headers.common['Authorization'] = `${token}`;
};
