import { API_ROUTES } from '@/constants/api';
import http from '@/utils/http';

const categoryApi = {
    getAllCategories() {
        return http.get(API_ROUTES.categories);
    }
};

export default categoryApi;
