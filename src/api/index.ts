import axios, { AxiosRequestConfig } from 'axios';

import { BrowserStorage } from '~/utils/storage';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const axiosApi = (url: string, options?: AxiosRequestConfig) => {
  const myStorage = new BrowserStorage<string>('OWHAT_TOKEN');
  const token = myStorage.get();

  const instance = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    ...options,
  });
  return instance;
};

export const instance = axiosApi(BASE_URL);
