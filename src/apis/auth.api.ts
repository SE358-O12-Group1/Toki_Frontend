import http from '@/utils/http';

// constants
import { AUTH_API_ROUTES } from '@/constants/api';

const authApi = {
    signup(body: { email: string; password: string; confirmPassword: string }) {
        return http.post(AUTH_API_ROUTES.register, body);
    },

    login(body: { email: string; password: string }) {
        return http.post(AUTH_API_ROUTES.login, body);
    }
};

export default authApi;
