import http from '@/utils/http';
import { ProfileType } from '@/types/UserType';

// constants
import { API_ROUTES, USER_API_ROUTES } from '@/constants/api';

const userApi = {
    getProfile() {
        return http.get(USER_API_ROUTES.profile);
    },
    getMyOrders(status?: number) {
        return http.get(USER_API_ROUTES.orders, {
            params: {
                status
            }
        });
    },
    updateUser(userId: string, data: ProfileType) {
        return http.put(API_ROUTES.users + userId, data);
    }
};

export default userApi;
