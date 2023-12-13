import axios, { AxiosInstance } from 'axios';

// constants
import { BASE_API_URL } from '@/constants/api';

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
    }
}

const http = new Http().instance;

export default http;
