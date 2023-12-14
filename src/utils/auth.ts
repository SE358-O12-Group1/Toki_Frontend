import AuthType, { UserAuthType } from '@/types/AuthType';

export const clearLS = () => {
    localStorage.removeItem('auth_data');
};

export const getAuthDataFromLS = () => {
    const authData = localStorage.getItem('auth_data');
    if (!authData) return null;
    return JSON.parse(authData) as AuthType;
};

export const getAccessTokenFromLS = () => {
    const authData = localStorage.getItem('auth_data');
    if (!authData) return '';
    const data = JSON.parse(authData);
    return data.accessToken;
};

export const getRefreshTokenFromLS = () => {
    const authData = localStorage.getItem('auth_data');
    if (!authData) return '';
    const data = JSON.parse(authData);
    return data.refreshToken;
};

export const getUserFromLS = () => {
    const authData = localStorage.getItem('auth_data');
    if (!authData) return null;
    const data = JSON.parse(authData);
    return data.user;
};

export const setAuthDataToLS = (data: AuthType) => {
    localStorage.setItem(
        'auth_data',
        JSON.stringify({
            user: data.user,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken
        })
    );
};

export const setAccessTokenToLS = (token: string) => {
    const authData = localStorage.getItem('auth_data');
    if (!authData) return;
    const data = JSON.parse(authData);
    data.accessToken = token;
    localStorage.setItem('auth_data', JSON.stringify(data));
};

export const setRefreshTokenToLS = (token: string) => {
    const authData = localStorage.getItem('auth_data');
    if (!authData) return;
    const data = JSON.parse(authData);
    data.refreshToken = token;
    localStorage.setItem('auth_data', JSON.stringify(data));
};

export const setUserDataToLS = (user: UserAuthType) => {
    const authData = localStorage.getItem('auth_data');
    if (!authData) return;
    const data = JSON.parse(authData);
    data.user = user;
    localStorage.setItem('auth_data', JSON.stringify(data));
};
