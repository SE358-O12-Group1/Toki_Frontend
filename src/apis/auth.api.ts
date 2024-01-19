import http from '@/utils/http';
import ChangePasswordType from '@/types/ChangePasswordType';

// constants
import { AUTH_API_ROUTES } from '@/constants/api';

const authApi = {
    signup(body: { email: string; password: string; confirmPassword: string }) {
        return http.post(AUTH_API_ROUTES.register, body);
    },

    login(body: { account: string; password: string }) {
        return http.post(AUTH_API_ROUTES.login, body);
    },

    changePassword(body: ChangePasswordType) {
        return http.post(AUTH_API_ROUTES.changePassword, body);
    },

    logout() {
        return http.post(AUTH_API_ROUTES.logout);
    }
};

export default authApi;
