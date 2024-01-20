import { API_ROUTES, ORDER_API_ROUTES } from '@/constants/api';
import http from '@/utils/http';

export type CreateOrderRequest = {
    discount?: string;
    order_lines: {
        product: string;
        quantity: number;
    }[];
    delivery_address: string;
};

const orderApi = {
    createOrder(body: CreateOrderRequest) {
        return http.post(API_ROUTES.orders, body);
    },

    getShopOrders(status?: number) {
        return http.get(ORDER_API_ROUTES.shop, {
            params: {
                status
            }
        });
    },

    updateOrderStatus(body: { orderLineIds: string[]; status: number }) {
        return http.put(ORDER_API_ROUTES.update, body);
    }
};

export default orderApi;
