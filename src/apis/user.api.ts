import http from '@/utils/http';
import UserType, { ProfileType } from '@/types/UserType';

// constants
import { API_ROUTES, USER_API_ROUTES } from '@/constants/api';

const userApi = {
    getUsers(role: number) {
        return http.get(API_ROUTES.users, {
            params: {
                role
            }
        });
    },

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

    updateUser(userId: string, data: ProfileType | UserType) {
        return http.put(API_ROUTES.users + userId, data);
    }
};

export default userApi;
