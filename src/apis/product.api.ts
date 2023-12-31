import { API_ROUTES } from '@/constants/api';
import http from '@/utils/http';

const productApi = {
    getAllProducts() {
        return http.get(API_ROUTES.products);
    },

    getProductById(id: string) {
        return http.get(API_ROUTES.products + id);
    }
};

export default productApi;
