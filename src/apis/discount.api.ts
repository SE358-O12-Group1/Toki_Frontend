import { API_ROUTES } from '@/constants/api';
import VoucherType from '@/types/VoucherType';
import http from '@/utils/http';

export type DiscountRequestType = Omit<VoucherType, '_id' | 'uses_count'>;

const discountApi = {
    createDiscount(body: DiscountRequestType) {
        return http.post(API_ROUTES.discounts, body);
    },
    updateDiscount(id: string, body: DiscountRequestType) {
        return http.put(API_ROUTES.discounts + id, body);
    },
    getAllDiscounts() {
        return http.get(API_ROUTES.discounts);
    },
    applyDiscount(code: string, body: { order_value: number }) {
        return http.post(API_ROUTES.discounts + code, body);
    },
    deleteDiscount(id: string) {
        return http.delete(API_ROUTES.discounts + id);
    }
};

export default discountApi;
