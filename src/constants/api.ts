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
    logout: API_ROUTES.auth + 'logout',
    changePassword: API_ROUTES.auth + 'change-password'
};

export const USER_API_ROUTES = {
    profile: API_ROUTES.users + 'profile',
    orders: API_ROUTES.users + 'orders'
};

export const PRODUCT_API_ROUTES = {
    shop: API_ROUTES.products + 'shop'
};

export const ORDER_API_ROUTES = {
    shop: API_ROUTES.orders + 'shop',
    update: API_ROUTES.orders + 'update'
};
