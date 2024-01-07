import http from '@/utils/http';

// constants
import { USER_API_ROUTES } from '@/constants/api';

const userApi = {
    getProfile() {
        return http.get(USER_API_ROUTES.profile);
    }
};

export default userApi;
