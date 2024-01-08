import { API_ROUTES } from '@/constants/api';
import http from '@/utils/http';

const discountApi = {
    applyDiscount(code: string, body: { order_value: number }) {
        return http.post(API_ROUTES.discounts + code, body);
    }
};

export default discountApi;
