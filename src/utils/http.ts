import axios, { AxiosInstance } from 'axios';

// constants
import { BASE_API_URL } from '@/constants/api';
import { getAccessTokenFromLS } from './auth';

export class Http {
    instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: BASE_API_URL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        this.instance.interceptors.request.use(
            async (config) => {
                const accessToken = await getAccessTokenFromLS();
                if (accessToken && config.headers) {
                    config.headers.authorization = 'Bearer ' + accessToken;
                    return config;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }
}

const http = new Http().instance;

export default http;
