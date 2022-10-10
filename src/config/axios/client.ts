// Axios instance for public use
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const { NODE_ENV } = process.env

const AxiosClient = axios.create({
  baseURL:
    NODE_ENV === "development"
      ? "http://localhost:3001"
      : "https://production-url.com",
  withCredentials: true,
});

AxiosClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config.headers!["Authorization"]) {
      config.headers!["Authorization"] = `Bearer ${accessToken}`;
    }
    config.withCredentials = true;
    return config;
  },
  (error: any) => Promise.reject(error)
);

// config to check if a request failed with 401 status, and if so, refresh the access token and retry the original request.
AxiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const prevRequest = error?.config;
    if (error?.response?.status === 401 && !prevRequest?.sent) {
      prevRequest.sent = true;
      const newAccessToken = await refresh();
      prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
      return AxiosClient(prevRequest);
    }

    return Promise.reject(error);
  }
);

export default AxiosClient;
