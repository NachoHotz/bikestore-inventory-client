// Axios instance for public use
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { SERVER_URLS, REFRESH_TOKENS } from './endpoints'

async function refreshTokens() {
  await Client.post(REFRESH_TOKENS)
}

export const Client = axios.create({
  baseURL: SERVER_URLS.DEVELOPMNET,
  withCredentials: true,
});

Client.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config.withCredentials) {
      config.withCredentials = true;
    }
    return config;
  },
  (error: any) => Promise.reject(error)
);

// config to check if a request failed with 401 status, and if so, refresh the access token and retry the original request.
Client.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const prevRequest = error?.config;
    if (error?.response?.status === 401 && !prevRequest?.sent) {
      await refreshTokens();
      prevRequest.sent = true;
      return Client(prevRequest);
    }

    return Promise.reject(error);
  }
);
