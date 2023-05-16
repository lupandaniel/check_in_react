import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 2500,
  headers: { Accept: 'application/json' }
});
