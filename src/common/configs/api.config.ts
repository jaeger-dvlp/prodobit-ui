import axios, { Axios } from 'axios';

const apiURL: string = import.meta.env.VITE_API_URL as string;

const API = axios.create({
  baseURL: apiURL,
}) as Axios;

export default API;
