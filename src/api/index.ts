import axios from 'axios';

import { OWHAT_TOKEN } from '~/constants/token';
import { BrowserStorage } from '~/utils/storage';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const PORT = import.meta.env.VITE_PORT;

export const myStorage = new BrowserStorage<string>(OWHAT_TOKEN);

export const instance = axios.create({
  baseURL: `${BASE_URL}:${PORT}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  config => {
    const token = myStorage.get();
    if (config.headers.ignoreGlobalCatch) config.headers.Authorization = '';
    else if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
