export const BASE_API_URL = 'http://localhost:4000/api/';

export const API_ROUTES = {
    auth: 'auth/',
    users: 'users/',
    products: 'products/',
    categories: 'categories/',
    discounts: 'discounts/',
    orders: 'orders/'
};

export const AUTH_API_ROUTES = {
    login: API_ROUTES.auth + 'login',
    register: API_ROUTES.auth + 'register',
    logout: API_ROUTES.auth + 'logout'
};

export const USER_API_ROUTES = {
    profile: API_ROUTES.users + 'profile'
};
