import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://192.168.10.81:8080',
  withCredentials: false,
});
