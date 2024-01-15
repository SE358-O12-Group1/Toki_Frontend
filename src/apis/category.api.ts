import { API_ROUTES } from '@/constants/api';
import CategoryType from '@/types/CategoryType';
import http from '@/utils/http';

export type CategoryRequestType = Pick<CategoryType, 'name' | 'image'>;

const categoryApi = {
    createCategory(body: CategoryRequestType) {
        return http.post(API_ROUTES.categories, body);
    },

    getAllCategories() {
        return http.get(API_ROUTES.categories);
    },

    updateCategory(categoryId: string, body: CategoryRequestType) {
        return http.put(API_ROUTES.categories + categoryId, body);
    },

    deleteCategory(categoryId: string) {
        return http.delete(API_ROUTES.categories + categoryId);
    }
};

export default categoryApi;
