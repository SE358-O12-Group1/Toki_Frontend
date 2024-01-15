import { API_ROUTES, PRODUCT_API_ROUTES } from '@/constants/api';
import ProductType from '@/types/ProductType';
import http from '@/utils/http';

export type ProductRequestType = Omit<
    ProductType,
    '_id' | 'seller' | 'rating' | 'sold_quantity' | 'category'
> & { category: string };

const productApi = {
    createProduct(body: ProductRequestType) {
        return http.post(API_ROUTES.products, body);
    },

    getAllProducts() {
        return http.get(API_ROUTES.products);
    },

    getProductById(id: string) {
        return http.get(API_ROUTES.products + id);
    },

    getShopProducts() {
        return http.get(PRODUCT_API_ROUTES.shop);
    },

    updateProduct(productId: string, body: ProductRequestType) {
        return http.put(API_ROUTES.products + productId, body);
    },

    deleteProduct(productId: string) {
        return http.delete(API_ROUTES.products + productId);
    }
};

export default productApi;
