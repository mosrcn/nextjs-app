/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
// import { AppStore } from '@/redux/store';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// let store: AppStore;

// export const injectStore = (_store: any) => {
//   store = _store;
// };

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

instance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    // store.dispatch({ type: 'global/showPageContentLoading' });
    // const { token } = store.getState().user;
    // if (token) {
    //   config.headers = { Authorization: `Bearer ${token}` };
    // }
    return config;
  },
  (error: AxiosError) => {
    // store.dispatch({ type: 'global/hidePageContentLoading' });
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // store.dispatch({ type: 'global/hidePageContentLoading' });
    return response;
  },
  (error: AxiosError) => {
    const originalConfig = error.config as typeof error.config & { _retry: boolean };
    // store.dispatch({ type: 'global/hidePageContentLoading' });
    console.log(error.isAxiosError, !!error.response, !!error.request);
    if (error.response) {
      // Status Code 400 - Payload Bad Request
      if (error.response.status === 400) {
        //   store.dispatch({
        //     type: 'global/setSiteModalAlert',
        //     payload: { message: '400 Bad Request', severity: 'error' },
        //   })
      }

      // Status Code 401 - Unauthorized
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        // TODO: Handle Refresh Cookie/Token
        // store.dispatch({
        //   type: 'global/setSiteModalAlert',
        //   // handle error message
        //   payload: {
        //     message: `Error - ${error.response.data?.message}` || '401 Unauthorized',
        //     messageDesc: 'Sorry your request could not be processed.',
        //     severity: 'error',
        //   },
        // });
        // store.dispatch({ type: 'user/signOut' });
      }

      if (error.response.status === 403) {
        // store.dispatch({
        //   type: 'global/setUnexpectedError',
        //   payload: { statusCode: 403, message: error.response.data?.message },
        // });
      }

      if (error.response.status === 404) {
        // store.dispatch({
        //   type: 'global/setUnexpectedError',
        //   payload: { statusCode: 404, message: error.response.data?.message },
        // });
      }

      // Status Code 500 - No retry
      if (error.response.status === 500) {
        // store.dispatch({
        //   type: 'global/setUnexpectedError',
        //   payload: { statusCode: 500, message: '500 Internal Server Error' },
        // });
      }
      if (error.response.status === 502) {
        // store.dispatch({
        //   type: 'global/setUnexpectedError',
        //   payload: { statusCode: 502, message: '502 Bad Gateway' },
        // });
      }

      if (error.response.status === 503) {
        // store.dispatch({
        //   type: 'global/setUnexpectedError',
        //   payload: { statusCode: 503, message: '503 Service Unavailable' },
        // });
      }
    } else if (error.request) {
      // The request was made but no response was received
    } else {
      // Something happened in setting up the request that triggered an Error
    }

    return Promise.reject(error);
  }
);

export type Http = {
  get: <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>) => Promise<R>;
  post: <T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) => Promise<R>;
  put: <T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) => Promise<R>;
  patch: <T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) => Promise<R>;
  delete: <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>) => Promise<R>;
};

export const http: Http = {
  get: (url, config) => instance.get(url, config),
  post: (url, data) => instance.post(url, data),
  put: (url, data) => instance.put(url, data),
  patch: (url, data) => instance.patch(url, data),
  delete: (url, data) => instance.delete(url, { data }),
};

export default instance;
