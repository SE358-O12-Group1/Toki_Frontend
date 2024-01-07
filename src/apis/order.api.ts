import { API_ROUTES } from '@/constants/api';
import http from '@/utils/http';

export type CreateOrderRequest = {
    discount?: string;
    order_lines: {
        product: string;
        variants?: string[];
        quantity: number;
    }[];
    delivery_address: string;
};

const orderApi = {
    createOrder(body: CreateOrderRequest) {
        return http.post(API_ROUTES.orders, body);
    }
};

export default orderApi;
