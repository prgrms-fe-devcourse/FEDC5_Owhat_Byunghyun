import axios from 'axios';

import { OWHAT_TOKEN } from '~/constants/token';
import { BrowserStorage } from '~/utils/storage';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const PORT = import.meta.env.VITE_PORT;

const myStorage = new BrowserStorage<string>(OWHAT_TOKEN);
const token = myStorage.get();

export const instance = axios.create({
  baseURL: `${BASE_URL}:${PORT}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : '',
  },
});
