import UserType from './UserType';

type AuthType = {
    user: Pick<UserType, '_id' | 'name' | 'email' | 'avatar' | 'role'> | null;
    accessToken: string;
    refreshToken: string;
};

export const initialAuth: AuthType = {
    user: null,
    accessToken: '',
    refreshToken: ''
};

export default AuthType;
